import { 
  Container, CarrinhoWrapper, List, ListItem, ItemImage, ItemDetails, ItemTitle, ItemPrice, ItemQuantity, ItemControl, ResumoContainer, ResumoTitle, ResumoLine, ResumoTotal, ButtonFinalizar, MessageOverlay, DevBadge } from './Carrinho.styles';
import { useState } from 'react';

export default function Carrinho({ cart, onUpdateCart }) {
  const [selectedItems, setSelectedItems] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  const [showMessage, setShowMessage] = useState(false);

  function toggleSelect(id) {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function removeItem(id) {
    const newCart = cart.filter(item => item.id !== id);
    onUpdateCart(newCart);
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

  function handleCompra() {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);

    console.log("%c👋 Olá recrutador(a)!",
      "color: #e62429; font-size: 20px; font-weight: bold;");
    console.log("Espero que tenha curtido este projeto tanto quanto eu gostei de construí-lo! 🚀");
  }

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
          <ButtonFinalizar onClick={handleCompra}>
            Comprar (R$ {total.toFixed(2)})
          </ButtonFinalizar>
        </ResumoContainer>
      </CarrinhoWrapper>

      {showMessage && (
        <MessageOverlay>
          Parabéns! Você acaba de salvar o mundo dos carrinhos vazios.
          <DevBadge>
             Foi tão divertido codar isso quanto seria comprar essas HQs na vida real!
            Obrigada por revisar este projeto!
          </DevBadge>
        </MessageOverlay>
      )}
    </Container>
  );
}
