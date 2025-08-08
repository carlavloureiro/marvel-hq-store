import styled from 'styled-components';

export const BannerContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 5rem;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background-color: #c7cfdfff;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
    z-index: 0;
  }
  }
`;

export const TextArea = styled.div`
  font-family: 'Haettenschweiler', sans-serif;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin: auto 0;
  height: 100%
  padding: 1rem;

`;

export const CheckButton = styled.button`
  width: 40%;
  height: auto;
  font-family: "Michroma", sans-serif;
  font-size: 1rem;
  background-color: black;
  color: #FFF;
`;

export const ImageCarrousel = styled.div`
  display: none;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ImageContent = styled.img`
  width: 70%;
  height: auto;
  margin-top: 2em;
  margin-left: auto;
`;
