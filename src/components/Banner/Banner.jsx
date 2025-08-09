import { useEffect, useState } from 'react';
import { BannerContainer, TextArea, TextWrapper, CheckButton, ImageCarrousel, ImageContent } from './Banner.styles';
import Spiderman from '../../assets/images/Spiderman.png';
import CaptainAmerica from '../../assets/images/CaptainAmerica.png';
import Hulk from '../../assets/images/Hulk.png'
import IronMan from '../../assets/images/IronMan.png'

export default function Banner() {
  const herois = [
  { src: IronMan, style: { transform: 'scale(1.2)', marginTop: '2rem' } }, 
  { src: Spiderman, style: { transform: 'scale(1.2)', marginTop: '2rem', height: 'auto' } },
  { src: Hulk, style: { transform: 'scale(0.9)', marginTop: '6rem' } },
  { src: CaptainAmerica, style: { transform: 'scale(2)', marginTop: '2rem' } },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % herois.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [herois.length]);

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
            Explorar edições <i className="bi bi-arrow-right"></i>
          </CheckButton>
        </TextWrapper>
      </TextArea>

      <ImageCarrousel>
        <ImageContent
          key={herois[currentImageIndex].src}
          src={herois[currentImageIndex].src}
          style={herois[currentImageIndex].style}
        />
      </ImageCarrousel>
    </BannerContainer>
  );
}
