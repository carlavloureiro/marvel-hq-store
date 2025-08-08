import React, { useEffect, useState } from 'react';
import { fetchHQs } from '../../services/marvelApi';
import { Container, Title, CardsWrapper, Pagination, NavButton } from './HqList.styles'
import HQCard from '../HqCard/HQCard';

export default function HQList() {
  const [hqs, setHqs] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 6;

  useEffect(() => {
    async function loadHQs() {
      const data = await fetchHQs(offset, limit);
      console.log(data);
      setHqs(data.results);
    }

    loadHQs();
  }, [offset]);

  function handleNextPage() {
    setOffset((prev) => prev + limit);
  }

  function handlePrevPage() {
    setOffset((prev) => Math.max(0, prev - limit));
  }

  return (
    <Container id="hq-list">
      <Title>HQs Marvel</Title>

      <CardsWrapper>
        {hqs.map((comic) => (
          <HQCard key={comic.id} comic={comic} />
        ))}
      </CardsWrapper>

      <Pagination>
        <NavButton onClick={handlePrevPage} disabled={offset === 0}>
          Página Anterior
        </NavButton>
        <NavButton onClick={handleNextPage}>Próxima Página</NavButton>
      </Pagination>
    </Container>
  );
}
