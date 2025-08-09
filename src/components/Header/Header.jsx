import { useEffect, useState } from 'react';
import { HeaderContainer, Logo, LogoLink, HamburgerButton, MobileMenu, NavBar, NavItem, NavLink, CartLink, CartIcon, CartBadge } from './Header.styles.jsx';
import LogoImg from '../../assets/images/Logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedTotal = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(updatedTotal);
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <LogoLink href="/">
        <Logo src={LogoImg} alt="Logo Marvel" />
      </LogoLink>

      <HamburgerButton onClick={toggleMenu} className="bi bi-list"></HamburgerButton>

      <MobileMenu isOpen={isMenuOpen}>
        <NavItem><NavLink href="/">Início</NavLink></NavItem>
        <NavItem><NavLink href="/produtos">Produtos</NavLink></NavItem>
        <NavItem><NavLink href="/sobre">Sobre</NavLink></NavItem>
      </MobileMenu>

      <NavBar>
        <NavItem><NavLink href="/">Início</NavLink></NavItem>
        <NavItem><NavLink href="/#hq-list">Produtos</NavLink></NavItem>
        <NavItem><NavLink href="/sobre">Sobre</NavLink></NavItem>
      </NavBar>

      <CartLink href="/cart">
        <CartIcon className="bi bi-cart" />
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </CartLink>
    </HeaderContainer>
  );
}
