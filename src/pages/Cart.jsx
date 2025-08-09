import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Carrinho from '../components/Carrinho/Carrinho'

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
      <Carrinho />
     </> 
  );
}
