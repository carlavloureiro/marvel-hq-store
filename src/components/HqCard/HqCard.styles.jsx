import styled from 'styled-components';


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 250px;
  background-color: #FAFAFA;
  border-radius: 10px;
  padding: 0.3rem;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 400px; 
    padding: 0.7rem;
  }
`;


export const ComicImage = styled.img`
  width: auto;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
`;

export const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #202020;

  h3 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div p {
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    div p {
      font-size: 1.3rem
    }
  }
`;

export const AddCartButton = styled.button`
  font-family: "Roboto Condensed";
  background-color: #e62429;
  width: 90%;
  height: auto;
  color: #FAFAFA;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c3191e;
  }

  i {
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;