import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
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
