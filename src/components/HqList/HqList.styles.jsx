import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* cor clara para o fundo */
  border-top: 4px solid #202020; /* cor escura para a parte giratória */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;

export const Container = styled.section`
  padding: 2rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  color: white;
  background-color: #202020;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  &:disabled {
    background-color: white;
    color: #F5F5F5;
    cursor: not-allowed;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
`;


