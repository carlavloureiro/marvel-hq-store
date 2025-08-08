import { useEffect, useState } from 'react';
import { HeaderContainer, Logo, LogoLink, HamburgerButton, MobileMenu, NavBar, NavItem, NavLink, CartLink, CartIcon } from './Header.styles.jsx';
import LogoImg from '../../assets/images/Logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <LogoLink href="/">
        <Logo src={LogoImg} alt="Logo Marvel" />
      </LogoLink>

      {/* Botão de menu (visível no mobile) */}
      <HamburgerButton onClick={toggleMenu} className="bi bi-list"></HamburgerButton>

      {/* Menu móvel */}
      <MobileMenu isOpen={isMenuOpen}>
        <NavItem><NavLink href="/">Início</NavLink></NavItem>
        <NavItem><NavLink href="/produtos">Produtos</NavLink></NavItem>
        <NavItem><NavLink href="/sobre">Sobre</NavLink></NavItem>
      </MobileMenu>

      {/* Navbar horizontal (visível em telas maiores) */}
      <NavBar>
        <NavItem><NavLink href="/">Início</NavLink></NavItem>
        <NavItem><NavLink href="/produtos">Produtos</NavLink></NavItem>
        <NavItem><NavLink href="/sobre">Sobre</NavLink></NavItem>
      </NavBar>

      <CartLink href="/cart">
        <CartIcon className="bi bi-cart" />
      </CartLink>
    </HeaderContainer>
  );
}