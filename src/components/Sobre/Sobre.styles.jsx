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
  gap: 3rem;
  padding: 2rem;
  background-color: #FAFAFA;
`;

export const TextArea = styled.div`
  max-width: 400px;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #202020;
  border-bottom: 1px solid #444;
  padding-bottom: 0.3rem;
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
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  animation: ${slideIn} 0.8s ease forwards;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;