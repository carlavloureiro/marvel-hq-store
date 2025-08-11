import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';
import mobileBackgroundImage from '../assets/images/mobile-bg.jpeg';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Haettenschweiler';
    src: url('../assets/fonts/Haettenschweiler.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400; 
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url('../assets/fonts/Montserrat.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden; 
  }

  html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
  }

 body {
  background:
    linear-gradient(
      to bottom,
      rgba(27, 27, 27, 0.9),
      rgba(122, 46, 32, 0.9)
    ),
    url(${mobileBackgroundImage});
  background-position: center top;

  @media (min-width: 763px) {
    background:
      linear-gradient(
        to bottom,
        rgba(27, 27, 27, 0.9),
        rgba(122, 46, 32, 0.9)
      ),
      url(${backgroundImage});
    background-repeat: repeat;
    background-position: center center;
    background-size: cover;
  }

  @media (min-width: 764px) {
    background-attachment: fixed;
    overflow-x: hidden;
  }
}

  img {
    max-width: 100%;
  }

  main, section, div {
    max-width: 100%;
  }

`;

export default GlobalStyle;
