import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Register from './pages/register/Register';
import Feed from './pages/feed/Feed';
import Login from './pages/login/Login';
import UserProfile from './pages/profile/Profile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta default */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />

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

          {/* Rutas publicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;