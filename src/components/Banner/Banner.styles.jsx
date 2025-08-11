import styled, { keyframes } from 'styled-components';

const aparecer = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  z-index: 1;
  animation: ${aparecer} 1.5s ease forwards;

  @media (min-width: 768px) {
    width: 100vw;
    height: 80%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto 0;
  height: auto;
  color: #FAFAFA;
  padding: 2rem 0.5rem;

  h3 {
    font-family: "Orbitron", sans-serif;
    font-size: 2.3rem;
    font-weight: 800;
  }

  p {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 572px) {
    h3 {
      font-size: 2.8rem;
    }
  }
`;

export const CheckButton = styled.button`
  background-color: #FAFAFA;
  width: 70%;
  height: 30%;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.7rem 1.2rem;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #202020;
    color: #FAFAFA;
    transform: scale(1.05); 
  }

  @media (min-width: 992px) {
    width: 40%;
  }
`;
