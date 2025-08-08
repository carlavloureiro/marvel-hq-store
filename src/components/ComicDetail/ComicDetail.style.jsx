import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const ComicWrapper = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

export const ComicInfo = styled.div`
  flex: 1;
`;

export const ComicImage = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  background-color: #e62429;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c3191e;
  }
`;
