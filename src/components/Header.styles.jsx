import styled from 'styled-components';

const BaseLink = styled.a`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #fff;
    transform: scale(1.05);
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(32, 32, 32, 0.6);
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
`;

export const LogoLink = styled(BaseLink)``;

export const CartLink = styled(BaseLink)``;

export const CartIcon = styled.i`
  font-size: 2rem;
`;
