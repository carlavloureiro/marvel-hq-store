import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMarvelApiUrl } from '../../services/marvelApi.js';
import Header from '../Header/Header.jsx';
import { DetailContainer, ComicWrapper, ComicInfo, ComicImage, Title, Description, Price, Button } from './ComicDetail.style.jsx';

export default function HqDetail() {
  const { id } = useParams();
  const [hq, setHq] = useState(null);

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

  return (
    <>
      <Header />
      <DetailContainer>
        <ComicWrapper>
          <ComicInfo>
            <Title>{hq.title}</Title>
            <Description>{hq.description || 'Sem descrição disponível.'}</Description>
            <Price>Preço: ${price}</Price>
            <Button onClick={() => alert('Adicionado ao carrinho!')}>Adicionar ao carrinho</Button>
          </ComicInfo>
          <ComicImage src={imageUrl} alt={hq.title} />
        </ComicWrapper>
      </DetailContainer>
    </>
  );
}
