import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Pagination = styled.div`
  margin-top: 2rem;
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #e62429;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
