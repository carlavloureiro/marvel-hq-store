import { BannerContainer, TextArea, TextWrapper, CheckButton, ImageCarrousel, ImageContent } from './Banner.styles';
import Spiderman from  '../assets/images/Spiderman.png'

export default function Banner() {
  return (
    <BannerContainer>
        <TextArea>
          <TextWrapper>
          </TextWrapper>
          <CheckButton>Explorar edições</CheckButton>
        </TextArea>
        <ImageCarrousel>
            <ImageContent src={Spiderman}></ImageContent>
        </ImageCarrousel>
    </BannerContainer>
  );
}