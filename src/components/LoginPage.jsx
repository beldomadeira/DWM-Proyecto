import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import "./loginPage.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const preventDefault = (event) => event.preventDefault();

export const LoginPage = () => {

  const [formulario, setFormulario] = useState({
    email: "",
    contrasena: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formulario.email,
        password: formulario.contrasena,
      }),
    });

    console.log(response);

    if (response.ok) {
      navigate("/feed");
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h1 className='title-app'>UCUGRAM</h1>
      <div className='log-box'>
        <h3 className='log-text'>Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <input 
              type="text" 
              name="email" 
              placeholder="Usuario" 
              value={formulario.email} 
              onChange={handleInputChange} 
            />
            <AccountCircleIcon className='user-icon'></AccountCircleIcon>
          </div>
          <div className="password">
            <input 
              type="password" 
              name="contrasena" 
              placeholder="Contraseña" 
              value={formulario.contrasena} 
              onChange={handleInputChange} 
            />
            <LockIcon className='lock-icon'></LockIcon>
          </div>
          <button type="submit">Ingresar</button>
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