import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import "./loginPage.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export const LoginPage = () => {

  const preventDefault = (event) => event.preventDefault();
  const [usernameLogin, setUsernameLogin] =  useState(""); 
  const [passwordLogin, setPasswordLogin] =  useState(""); 
  const [error, setError] =  useState(null);
  
  const validatePassword = (input) => {
    if (input.length < 8) {
      setError("Contraseña invalida - Mínimo 8 caracteres.");
    } else {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (passwordLogin.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setError(null);
      console.log('Usuario:', usernameLogin);
      console.log('Contraseña:', passwordLogin);
    }
  };

  return (
    <div>
      <h1 className='title-app'>UCUGRAM</h1>
      <div className='log-box'>
        <h3 className='log-text'>Iniciar Sesión</h3>
        <form className='form-login' onSubmit={handleSubmit}>
          <div className="username-login">
            <input 
              type="text" 
              placeholder="Usuario" 
              value={usernameLogin}
              onChange={(e) => setUsernameLogin(e.target.value)} 
            />
            <AccountCircleIcon className='user-icon'></AccountCircleIcon>
          </div>
          <div className="password-login">
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={passwordLogin} 
              onChange={(e) => setPasswordLogin(e.target.value)} 
            />
            <LockIcon className='lock-icon'></LockIcon>
          </div>

          {error && <p className="error-message">{error}</p>} 
          
          <button className='boton-ingresar' type="submit">Ingresar</button>
          
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              typography: 'body1',
              '& > :not(style) ~ :not(style)': {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <Link href="#" underline="hover">
              {'¿Olvidaste tu contraseña?'}
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              typography: 'body1',
              '& > :not(style) ~ :not(style)': {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <Link href="#" underline="hover">
              {'Registrarse'}
            </Link>
          </Box>
        </form>
      </div>
    </div> 
  );
}
