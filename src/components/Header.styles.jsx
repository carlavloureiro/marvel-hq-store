import styled from 'styled-components';

export const HeaderContainer = styled.header`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #202020;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000; 
`;

export const Logo = styled.img`
  width: 8rem;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  }
`;

export const LogoLink = styled.a`
  display: inline-block;
`;

export const CartIcon = styled.i`
  font-size: 2rem;
`
