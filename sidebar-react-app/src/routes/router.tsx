/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import PainelDeControle from '../pages/PainelDeControle';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PainelDeControle" element={<PainelDeControle />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;