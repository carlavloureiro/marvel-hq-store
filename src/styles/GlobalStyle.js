import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/background.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    background-image: 
      linear-gradient(
        to bottom,
        rgba(139, 0, 0, 0.7),  
        rgba(128, 128, 128, 0.8)  
      ),
      url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
  }
`;

export default GlobalStyle;
