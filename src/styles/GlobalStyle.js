import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';

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
    font-weight: <weight>;
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
    font-weight: <weight>;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: 
      linear-gradient(
        to bottom,
        rgba(32, 32, 32, 0.9),
        rgba(142, 0, 0, 0.9)
      ),
      url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
