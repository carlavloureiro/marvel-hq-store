import styled from 'styled-components';

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
  display: flex;
  position: fixed;
  width: 100vw;
  height: auto;
  justify-content: space-between;
  padding: 0.8rem;
  gap: 3rem;
  color: #F5F5F5;
  align-items: center;
  z-index: 1000;

  background-color: ${({isScrolled }) => (isScrolled ? 'rgba(40, 30, 30, 0.85)' : 'transparent')};

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.img` 
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0;
  width: 8rem;

  @media (min-width: 564px) {
    margin-right: 5rem;
  }

  @media (min-width: 768px) {
    width: 9rem;
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
  background-color: rgba(40, 30, 30, 0.85);
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

export const NavLink = styled(BaseLink)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5%;      
    width: 100%;        
    height: 0.2rem;       
    
    background: linear-gradient(
      to right,
      rgba(237, 29, 36, 0) 0%,        
      rgba(237, 29, 36, 0.8) 40%,    
      rgba(237, 29, 36, 1) 50%,       
      rgba(237, 29, 36, 0.8) 60%,    
      rgba(237, 29, 36, 0) 100%      
    );
    
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: center;
    border-radius: 4px;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;


export const CartLink = styled(BaseLink)`
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
`;

export const CartIcon = styled.i`
  font-size: 2rem;
  margin-right: 2rem;

  @media (min-width: 768px) {
    color: #FAFAFA;
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