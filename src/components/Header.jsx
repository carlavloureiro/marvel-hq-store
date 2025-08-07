import { HeaderContainer, Logo, CartIcon, LogoLink } from './Header.styles.jsx';
import LogoImg from '../assets/images/Logo.png'

export default function Header() {
  return (
    <HeaderContainer>
    <LogoLink href="/">
        <Logo src={LogoImg} alt="Logo Marvel" />
      </LogoLink>
      <CartIcon className="bi bi-cart" />
    </HeaderContainer>
  );
}
