import React, { useEffect, useState } from 'react';
import { BannerContainer, TextArea, ImageCarrousel } from './Banner.styles';
import { getMarvelApiUrl } from '../services/marvelApi';

export default function Banner() {
  return (
    <BannerContainer>
        <TextArea>
            <h1>Texto do Banner</h1>
            <p>Descrição aqui</p>
        </TextArea>
        <ImageCarrousel>

        </ImageCarrousel>
    </BannerContainer>
  );
}
