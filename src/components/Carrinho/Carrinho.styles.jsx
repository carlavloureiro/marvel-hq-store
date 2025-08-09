import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 80vh;
  margin-top: 5rem;
  color: #FAFAFA;
  font-family: "Montserrat";
  padding: 1rem;
`;

export const CarrinhoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%; 
  height: auto;
  max-height: 80vh;
  padding: 1rem;
  background-color: #FAFAFA;
  border: 1px solid rgba(250, 250, 250, 0.5);
  border-radius: 10px;
  overflow-y: auto;
  box-sizing: border-box;

  @media(min-width: 768px) {
    flex-direction: row;  
    width: 70%;
    height: auto;
    max-height: none;
    gap: 3rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media(min-width: 768px) {
    width: 60%;
    margin-right: 1rem;
  }
`;

export const ListItem = styled.li`
  font-family: "Roboto Condensed", sans-serif;
  color: #1C1C1C;
  display: flex;
  width: 100%;  
  align-items: center;
  gap: 1rem;
  background-color: #FAFAFA;
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ItemImage = styled.img`
  width: 50px;
  border-radius: 6px;

  @media(min-width: 768px) {
    width: 60px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ItemTitle = styled.h3`
  margin: 0 0 0.3rem 0;
  font-weight: 700;
  font-size: 1rem;
  color: #1C1C1C;
`;

export const ItemPrice = styled.p`
  margin: 0.2rem 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.9rem;
`;

export const ItemQuantity = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: rgba(28, 28, 28, 0.8);
`;

export const ResumoContainer = styled.div`
  color: #202020;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f8f8f8;
  width: 100%;

  @media(min-width: 768px) {
    width: 35%;
    margin-top: 0;
    position: sticky;
    top: 20px;  
    height: fit-content;
  }
`;

export const ResumoTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const ResumoLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ResumoTotal = styled(ResumoLine)`
  font-weight: bold;
  color: #202020;
  font-size: 18px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

export const ButtonFinalizar = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem;
  outline: none;
  cursor: pointer;
  background-color: #F0141E;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F0141E;
  }
`;

export const ItemControl = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 10px;
`;