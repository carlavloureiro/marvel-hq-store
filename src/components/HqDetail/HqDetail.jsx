import { useParams, useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { getMarvelApiUrl } from '../../services/marvelApi.js';
import { Spinner, DetailContainer, ComicWrapper, ComicInfo, ComicImage, Title, Description, Price, ButtonCart, LoadingContainer } from './HqDetail.style.jsx';

export default function ComicDetail({ onLoadingChange }) {
  const { id } = useParams();
  const [hq, setHq] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function loadHq() {
      onLoadingChange(true);   
      const url = getMarvelApiUrl(`comics/${id}`);
      const res = await fetch(url);
      const json = await res.json();
      setHq(json.data.results[0]);
      onLoadingChange(false); 
    }
    loadHq();
  }, [id]);

  if (!hq) return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );

  const imageUrl = `${hq.thumbnail.path}.${hq.thumbnail.extension}`;
  const price = hq.prices[0]?.price ?? 'N/A';

  function handleAddToCart() {
    const item = {
      id: hq.id,
      title: hq.title,
      price: hq.prices[0]?.price ?? 0,
      image: imageUrl,
      quantity: 1,
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  }

  return (
    <DetailContainer>
      <ComicWrapper>
        <ComicImage src={imageUrl} alt={hq.title} />
        <ComicInfo>
          <Title>{hq.title}</Title>
          <Description>{hq.description || 'Sem descrição disponível.'}</Description>
          <Price>Preço: ${price}</Price>
          <ButtonCart onClick={handleAddToCart}>
            Adicionar ao carrinho<i className="bi bi-cart4"></i>
          </ButtonCart>
        </ComicInfo>
      </ComicWrapper>
    </DetailContainer>
  );
}
