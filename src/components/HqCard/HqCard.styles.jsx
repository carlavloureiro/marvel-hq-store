import styled from 'styled-components';


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 400px;
  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 0.7rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 768px) {
    width: 300px;
   height: 500px;
  }
`;

export const ComicImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #202020;

  h3 {
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div p {
    font-family: "Montserrat";
    font-size: 1.5rem;
    font-weight: 700;
  }
`;