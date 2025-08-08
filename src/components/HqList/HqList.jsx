import React, { useEffect, useState } from 'react';
import { fetchHQs } from '../../services/marvelApi';
import { Container, Title, CardsWrapper, Pagination, NavButton, LoadingMessage, EmptyMessage, Spinner} from './HqList.styles';
import HQCard from '../HqCard/HQCard';

export default function HQList() {
  const [hqs, setHqs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 6;

  useEffect(() => {
    async function loadHQs() {
      setLoading(true);
      const data = await fetchHQs(offset, limit);
      setHqs(data.results);
      setLoading(false);
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
      <Title>
        <h1>Catálogo de Quadrinhos</h1>
      </Title>

      {loading ? (
        <Spinner/>
      ) : hqs.length === 0 ? (
        <EmptyMessage>Nenhum quadrinho encontrado.</EmptyMessage>
      ) : (
        <>
          <CardsWrapper>
            {hqs.map((comic) => (
              <HQCard key={comic.id} comic={comic} />
            ))}
          </CardsWrapper>

          <Pagination>
            <NavButton onClick={handlePrevPage} className="bi bi-arrow-left" disabled={offset === 0}></NavButton>
            <NavButton onClick={handleNextPage} className="bi bi-arrow-right"></NavButton>
          </Pagination>
        </>
      )}
    </Container>
  );
}
