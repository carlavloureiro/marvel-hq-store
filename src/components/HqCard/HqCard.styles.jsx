import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap:2rem;
  background-color: #C5C5C5;
  border-radius: 10px;
  width: 200px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.5);
  }
`;

export const ComicImage = styled.img`
  width: 100%;
`;

export const ComicInfo = styled.div`
  background-color: #F5F5F5;
  color: #202020;
`;