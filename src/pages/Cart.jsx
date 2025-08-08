import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <p>Seu carrinho está vazio.</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <h1>Carrinho</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width={80} />
            <h3>{item.title}</h3>
            <p>Preço: ${item.price}</p>
            <p>Quantidade: {item.quantidade}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
