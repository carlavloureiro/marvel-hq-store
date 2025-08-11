import React, { useEffect, useState } from 'react';
import { fetchHQs } from '../../services/marvelApi';
import { Container, Title, CardsWrapper, Pagination, NavButton, EmptyMessage, Spinner } from './HqList.styles';
import HqCard from '../HqCard/HqCard';

export default function HQList() {
  const [hqs, setHqs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 16;

  useEffect(() => {
    async function loadHQs() {
      setLoading(true);
      const data = await fetchHQs(offset, limit);
      setHqs(data.results);
      setTotal(data.total);
      setLoading(false);
    }

    loadHQs();
  }, [offset]);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  function handleNextPage() {
    if (currentPage < totalPages) {
      setOffset((prev) => prev + limit);
    }
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
        <Spinner />
      ) : hqs.length === 0 ? (
        <EmptyMessage>Nenhum quadrinho encontrado.</EmptyMessage>
      ) : (
        <>
          <CardsWrapper>
            {hqs.map((comic) => (
              <HqCard key={comic.id} comic={comic} />
            ))}
          </CardsWrapper>

          <Pagination>
            <NavButton onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</NavButton>
            <span>{currentPage} / {totalPages}</span>
            <NavButton onClick={handleNextPage} disabled={currentPage === totalPages}>Próximo</NavButton>
          </Pagination>
        </>
      )}
    </Container>
  );
}
