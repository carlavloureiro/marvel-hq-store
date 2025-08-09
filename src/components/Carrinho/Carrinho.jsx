import { useEffect, useState } from 'react';
import { Container, CarrinhoWrapper, Title, List, ListItem, ItemImage, ItemDetails, ItemTitle, ItemPrice, ItemQuantity } from './Carrinho.styles';

export default function Carrinho() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

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
                    <ItemPrice>Preço: R$ {item.price}</ItemPrice>
                    <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
                    </ItemDetails>
                </ListItem>
                ))}
            </List>
        </CarrinhoWrapper>
    </Container>
  );
}