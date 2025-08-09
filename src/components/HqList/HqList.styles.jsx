import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3; 
  border-top: 4px solid #202020; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
`;

export const Title = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  background-color: #202020;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: white;
    color: #C5C5C5;
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


