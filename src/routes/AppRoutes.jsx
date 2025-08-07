import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HqDetail from '../pages/HqDetail';
import Cart from '../pages/Cart';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hq/:id" element={<HqDetail />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}
