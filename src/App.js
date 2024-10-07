import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import RegisterFormulario from './pages/Register';
import Feed from './pages/Feed';
import Login from './pages/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterFormulario />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
