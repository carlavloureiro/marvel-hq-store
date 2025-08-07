import { HeaderContainer, Logo, LogoLink, CartLink, CartIcon } from './Header.styles.jsx';
import LogoImg from '../assets/images/Logo.png'

export default function Header() {
  return (
    <HeaderContainer>
    <LogoLink href="/">
        <Logo src={LogoImg} alt="Logo Marvel" />
    </LogoLink>
    <CartLink href="/cart">
        <CartIcon className="bi bi-cart" />
    </CartLink>
    </HeaderContainer>
  );
}
