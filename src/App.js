import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Agregar Navigate
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
          {/* por default va a register. */}
          <Route path="/" element={<Navigate to="/register" />} />
          
          {/* Rutas publicas */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterFormulario />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
