import styled, { keyframes }  from 'styled-components';

const slideDireita = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideEsquerda = keyframes`
  from {
    transform: translateX(0px);
    opacity: 0;
  }
  to {
    transform: translateX(50px);
    opacity: 1;
  }
`;

export const BannerContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (min-width: 992px) {
    justify-content: space-between;
    padding: 5rem;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    margin-right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 40% 100%);
    z-index: 0;
  }
`;

export const TextArea = styled.div`
  font-family: 'Haettenschweiler', sans-serif;
  display: flex;
  width: 80vw;
  height: 80%;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
  animation: ${slideEsquerda} 1s ease-out forwards;
  

  @media (min-width: 768px) {
    width: 50vw;
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
    font-size: 2.8rem;
    font-weight: 800;
  }

  p {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
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

  i.bi-arrow-right {
    transition: transform 0.3s ease;
  }

  &:hover i.bi-arrow-right {
    transform: translateX(6px); 
  }

  @media (min-width: 992px) {
    width: 40%;
  }

`;


export const ImageCarrousel = styled.div`
  display: none;
  position: relative;
  z-index: 1;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const ImageContent = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2em;
  opacity: 0;
  animation: ${slideDireita} 1s ease-out forwards;

  @media (min-width: 992px) { 
    width: 40vw;
    min-width: 180px;
  }
`;
