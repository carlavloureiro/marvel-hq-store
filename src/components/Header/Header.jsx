import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, LogoLink, HamburgerButton, MobileMenu, NavBar, NavItem, NavLink, CartLink, CartIcon, CartBadge } from './Header.styles.jsx';
import LogoImg from '../../assets/images/Logo.png';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const isCartPage = location.pathname === '/cart';

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
    <HeaderContainer isScrolled={isScrolled} isCartPage={isCartPage}>
      <LogoLink href="/">
        <Logo src={LogoImg} alt="Logo Marvel" />
      </LogoLink>

      <HamburgerButton onClick={toggleMenu} className="bi bi-list" />

      <MobileMenu isOpen={isMenuOpen}>
        <NavItem><NavLink as={Link} to="/">Início</NavLink></NavItem>
        <NavItem><NavLink as={Link} to="#hq-list">Produtos</NavLink></NavItem>
        <NavItem><NavLink as={Link} to="#sobre">Sobre</NavLink></NavItem>
      </MobileMenu>

      <NavBar>
        <NavItem><NavLink as={Link} to="/">Início</NavLink></NavItem>
        <NavItem><NavLink as={Link} to="#hq-list">Produtos</NavLink></NavItem>
        <NavItem><NavLink as={Link} to="#sobre">Sobre</NavLink></NavItem>
      </NavBar>

      <CartLink href="/cart">
        <CartIcon isScrolled={isScrolled} isCartPage={isCartPage} className="bi bi-cart" />
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
      </CartLink>
    </HeaderContainer>
  );
}
