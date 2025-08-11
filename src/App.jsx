import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';
import ScrollToHash from './components/ScrollToHash';

function App() {
  useEffect(() => {
    console.log("Bem-vindo, herói da NeoApp!");
    console.log("Antes de ser dev, fui fã de heróis...");
    console.log("Mas depois de aprender React e Styled Components, me tornei minha própria super-heroína do código! ⚡️");
    console.log("Este projeto é minha primeira missão, e prometo que as próximas serão ainda maiores!");
    console.log("Se você quer um dev que nunca desiste, aqui estou! Pronta para derrotar bugs malignos e salvar seu código!");
  }, []);

  return (
    <Router basename="/marvel-hq-store">
      <GlobalStyle />
      <ScrollToHash />
      <AppRoutes />
    </Router>
  );
}

export default App;
