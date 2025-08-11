import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  height: 600px;
  object-fit: cover;
  background-color: #FAFAFA;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextArea = styled.div`
    max-width: 500px
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #202020;
  border-bottom: 1px solid #444;
  padding-bottom: 0.3rem;

    @media (min-width: 768px) { 
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const Highlight = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #202020;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: #555;

  @media (min-width: 768px) { 
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;  
  height: 500px; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`;

export const HeroImage = styled.img`
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  border-radius: 15px;
  animation: ${slideIn} 0.8s ease forwards;

  @media (min-width: 768px) { 

    height: 100%;
  }
`;