import { useEffect, useState } from 'react';
import { Container, CarrinhoWrapper, Title, List, ListItem, ItemImage, ItemDetails, ItemTitle, ItemPrice, ItemQuantity, ResumoContainer, ResumoTitle, ResumoLine, ResumoTotal, ButtonFinalizar } from './Carrinho.styles';

export default function Carrinho() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Calcula o total do pedido
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Container>
      <Title>Carrinho</Title>
      <CarrinhoWrapper>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ItemImage src={item.image} alt={item.title} />
              <ItemDetails>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>Preço: R$ {item.price.toFixed(2)}</ItemPrice>
                <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
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
          <ButtonFinalizar>Comprar(${total})</ButtonFinalizar>
        </ResumoContainer>
      </CarrinhoWrapper>
    </Container>
  );
}
