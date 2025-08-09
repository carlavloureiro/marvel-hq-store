import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  padding: 6rem 1rem;
  color: #FAFAFA;
  font-family: "Montserrat";
`;

export const CarrinhoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70vw;
    height: 80vh;
    padding: 1rem;
    background-color: #1C1C1C;
    border: 1px solid rgba(250, 250, 250, 0.5);
`

export const Title = styled.h1`
  color: #e33c3c;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  width: 300px;
  align-items: center;
  gap: 1rem;
  background-color: #1c1c1c;
  border-radius: 8px;
  padding: 0.3rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

export const ItemImage = styled.img`
  width: 60px;
  border-radius: 6px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  margin: 0 0 0.3rem 0;
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
`;

export const ItemPrice = styled.p`
  margin: 0.2rem 0;
  color: #e33c3c;
`;

export const ItemQuantity = styled.p`
  margin: 0.2rem 0;
  color: #ccc;
`;

export const ResumoContainer = styled.div`
  color: #202020;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f8f8f8;
  width: 300px;
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
  width: 200px;
  outline: none;
`