import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Carrinho from '../components/Carrinho/Carrinho';
import { EmptyCart } from '../components/Carrinho/Carrinho.styles';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  function handleUpdateCart(newCart) {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <EmptyCart>
          <p>Seu carrinho está vazio.</p>
        </EmptyCart>
      </>
    );
  }

  return (
    <>
      <Header />
      <Carrinho cart={cart} onUpdateCart={handleUpdateCart} />
    </>
  );
}
