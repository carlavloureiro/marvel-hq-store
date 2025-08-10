import { BannerContainer, TextArea, TextWrapper, CheckButton } from './Banner.styles';

export default function Banner() {

  return (
    <BannerContainer>
      <TextArea>
        <TextWrapper>
          <h3>O UNIVERSO MARVEL EM SUAS MÃOS</h3>
          <p>
            Descubra o universo dos seus heróis favoritos. Quadrinhos épicos,
            colecionáveis exclusivos e aventuras inesquecíveis te esperam!
          </p>
          <CheckButton as="a" href="#hq-list">
            Explorar edições
          </CheckButton>
        </TextWrapper>
      </TextArea>
    </BannerContainer>
  );
}
