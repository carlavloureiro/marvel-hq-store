import { useParams, useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { getMarvelApiUrl } from '../../services/marvelApi.js';
import Header from '../Header/Header.jsx';
import { DetailContainer, ComicWrapper, ComicInfo, ComicImage, Title, Description, Price, ButtonCart } from './ComicDetail.style.jsx';

export default function HqDetail() {
  const { id } = useParams();
  const [hq, setHq] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function loadHq() {
      const url = getMarvelApiUrl(`comics/${id}`);
      const res = await fetch(url);
      const json = await res.json();
      setHq(json.data.results[0]);
    }
    loadHq();
  }, [id]);

  if (!hq) return <p>Carregando...</p>;

  const imageUrl = `${hq.thumbnail.path}.${hq.thumbnail.extension}`;
  const price = hq.prices[0]?.price ?? 'N/A';

  function handleAddToCart() {
  const item = {
    id: hq.id,
    title: hq.title,
    price: hq.prices[0]?.price ?? 0,
    image: `${hq.thumbnail.path}.${hq.thumbnail.extension}`,
    quantity: 1,
  };

  // Pega o carrinho do localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Procura se já existe o item no carrinho
  const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);

  if (existingIndex >= 0) {
    // Já existe → apenas aumenta a quantidade
    cart[existingIndex].quantity += 1;
  } else {
    // Não existe → adiciona ao carrinho
    cart.push(item);
  }

  // Salva no localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redireciona para /cart
  navigate('/cart');
''}


  return (
    <>
      <Header />
      <DetailContainer>
        <ComicWrapper>
          <ComicImage src={imageUrl} alt={hq.title} />
          <ComicInfo>
            <Title>{hq.title}</Title>
            <Description>{hq.description || 'Sem descrição disponível.'}</Description>
            <Price>Preço: ${price}</Price>
            <ButtonCart onClick={handleAddToCart}>Adicionar ao carrinho<i class="bi bi-cart4"></i></ButtonCart>
          </ComicInfo>
        </ComicWrapper>
      </DetailContainer>
    </>
  );
}
