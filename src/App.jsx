import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle isCartPage={location.pathname === '/cart'}/>
      <AppRoutes />
    </Router>
  );a
}

export default App;
