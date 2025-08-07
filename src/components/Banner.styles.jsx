import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100vw;
  height: 80vh;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 5rem;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageCarrousel = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

