import React, { useEffect, useState } from 'react';
import { Container, TextArea, Title, Subtitle, Highlight, Description, ImageWrapper, HeroImage } from './Sobre.styles'
import Hero1 from '../../assets/images/DoctorStrange.png'
import Hero2 from '../../assets/images/Ironman.png'

export default function Sobre() {
  const heroes = [Hero1, Hero2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroes.length]);

  return (
    <Container id="sobre">
      <TextArea>
        <Title>SOBRE NÓS</Title>
        <Subtitle>O Universo Marvel Aqui</Subtitle>
        <Highlight>SEJA UM HERÓI</Highlight>
        <Description>
          Na Marvel HQ Store, entregamos para os fãs um verdadeiro <strong>pedacinho do universo Marvel</strong> — com produtos oficiais, coleções exclusivas e as últimas novidades. Tudo isso com a mesma paixão que dedico ao desenvolvimento web: atenção aos detalhes, qualidade e inovação constante.
        </Description>
      </TextArea>
      <ImageWrapper key={currentIndex}>
        <HeroImage src={heroes[currentIndex]} alt="Superhero" />
      </ImageWrapper>
    </Container>
  );
}
