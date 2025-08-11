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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;     
  height: 100vh;            
  width: 100vw;             
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  width: 100vw;
  height: 100vh;
`;

export const ComicWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  width: 60%;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

export const ComicInfo = styled.div`
  flex: 1;
  text-align: start;

  .bi-cart4 {
    font-size: 1.2rem;
    margin-left: 0.8rem;
  }
`;

export const ComicImage = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);

  @media (min-width: 1400px) {
      width: 400px
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-family: "Roboto Condensed";
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const ButtonCart = styled.button`
  font-family: "Roboto Condensed";
  background-color: #e62429;
  color: #FAFAFA;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c3191e;
  }
`;
