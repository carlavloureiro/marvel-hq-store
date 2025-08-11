import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  margin-top: 7rem;
  color: #FAFAFA;
  font-family: "Montserrat";
  padding: 1rem;
`;

export const CarrinhoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh; 
  height: auto;
  background-color: #FAFAFA;
  border: 1px solid rgba(250, 250, 250, 0.5);
  border-radius: 10px;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0.8rem;

  @media(min-width: 576px) {
    justify-content: flex-start;
    width: 50vw;
    height: auto;
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
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
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
  width: 80vw;

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
    background-color: #c8101b;
  }
`;

export const ItemControl = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  align-items: center;
  margin-top: 10px;
  
  i {
    font-size: 1rem
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70vh;
  margin: auto;
  color: #fafafa;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-align: center;
`;

export const MessageOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #b71c1c;  
  box-shadow: 0 0 15px 4px rgba(183, 28, 28, 0.7); 
  color: #fff;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  border-radius: 10px;
  z-index: 2001;
  text-align: center;
  max-width: 100%;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const DevBadge = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

