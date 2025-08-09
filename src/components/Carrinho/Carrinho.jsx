import { useEffect, useState } from 'react';
import { 
   Container, CarrinhoWrapper, List, ListItem, ItemImage, ItemDetails, 
  ItemTitle, ItemPrice, ItemQuantity, ItemControl, ResumoContainer, 
  ResumoTitle, ResumoLine, ResumoTotal, ButtonFinalizar 
} from './Carrinho.styles';

export default function Carrinho() {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const initialSelected = {};
    storedCart.forEach(item => {
      initialSelected[item.id] = true;
    });
    setSelectedItems(initialSelected);
  }, []);


  function toggleSelect(id) {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function removeItem(id) {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));

    setSelectedItems(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }

  const total = cart.reduce((acc, item) => {
    if (selectedItems[item.id]) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <Container>
      <CarrinhoWrapper>
        <List>
          {cart.map(item => (
            <ListItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <ItemDetails>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>Preço: R$ {item.price.toFixed(2)}</ItemPrice>
                <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
                <ItemControl>
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item.id]}
                    onChange={() => toggleSelect(item.id)}
                  />
                  <i
                    className="bi bi-trash"
                    onClick={() => removeItem(item.id)}
                    title="Remover item"
                  />
                </ItemControl>
              </ItemDetails>
            </ListItem>
          ))}
        </List>

        <ResumoContainer>
          <ResumoTitle>Resumo do Pedido</ResumoTitle>
          <ResumoLine>
            <span>Subtotal:</span>
            <span>R$ {total.toFixed(2)}</span>
          </ResumoLine>
          <ResumoLine>
            <span>Frete:</span>
            <span>R$ 0,00</span>
          </ResumoLine>
          <ResumoTotal>
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </ResumoTotal>
          <ButtonFinalizar>Comprar (R$ {total.toFixed(2)})</ButtonFinalizar>
        </ResumoContainer>
      </CarrinhoWrapper>
    </Container>
  );
}
