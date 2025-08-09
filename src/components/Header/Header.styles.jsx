import styled, { keyframes } from 'styled-components';

const BaseLink = styled.a`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;

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
  width: 100vw;
  height: auto;
  padding: 1rem;
  justify-content: center;
  gap: 4rem;
  color: #F5F5F5;
  display: flex;
  align-items: center;
  z-index: 1000;

  background-color: ${({ isScrolled }) => (isScrolled ? '#1C1C1C' : 'transparent')};
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.img`
  width: 7rem; 
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 480px) {
    width: 9rem;
  }

  @media (min-width: 564px) {
    margin-right: 6rem;
  }

  @media (min-width: 768px) {
    width: 14rem;
  }
`;

export const LogoLink = styled(BaseLink)``;


export const HamburgerButton = styled.i`
  font-size: 2rem;

  @media (min-width: 768px) {
    display: none; 
  }
`

export const MobileMenu = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(32, 32, 32, 0.95);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: none;
 
  @media (min-width: 768px) {
    display: flex;
    gap: 6rem;
    margin-right: 20%;
  }
`;

export const NavItem = styled.div`
`;

export const NavLink = styled(BaseLink)``;

export const CartLink = styled(BaseLink)`
    position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;
`;

export const CartIcon = styled.i`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${({ isScrolled }) => (isScrolled ? '#FAFAFA' : '#FAFAFA')};

  @media (min-width: 768px) {
    color: #202020;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 6px;
  min-width: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;