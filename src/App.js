import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import RegisterFormulario from './pages/Register';
import Feed from './pages/Feed';
import Login from './pages/Login';
import UserProfile from './pages/User';
import EditProfile from './components/edit-profile';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta default */}
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="*" element={<Navigate to="/register" />} />

          {/* Rutas privadas */}
          <Route
            path="/user/:id"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          {/* Rutas publicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterFormulario />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;