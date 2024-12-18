import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import "./loginPage.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

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
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email: formulario.email,
        password: formulario.contrasena,
      });
      // Guardar token
      
      localStorage.setItem("token", response.data.token);
      console.log("Inicio de sesión exitoso", response.data);
      localStorage.setItem("id", response.data._id);
      console.log("ID de usuario", response.data._id);
      navigate("/feed");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Credenciales incorrectas");
        alert("Correo o contraseña incorrecta"); // Mostrar alerta o un mensaje en pantalla
      } else {
        console.error("Error en el inicio de sesión", error);
      }
    }
  };  

  return (
    <div>
      <h1 className='title-app'>UCUGRAM</h1>
      <div className='log-box'>
        <h3 className='log-text'>Iniciar Sesión</h3>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="username-login">
            <input className='input-user'
              type="text" 
              name="email" 
              placeholder="Correo" 
              value={formulario.email} 
              onChange={handleInputChange} 
            />
            <AccountCircleIcon className='user-icon'></AccountCircleIcon>
          </div>
          <div className="password-login">
            <input className='input-pass'
              type="password" 
              name="contrasena" 
              placeholder="Contraseña" 
              value={formulario.contrasena} 
              onChange={handleInputChange} 
            />
            <LockIcon className='lock-icon'></LockIcon>
          </div>
          <button type="submit" className='boton-ingresar'>Ingresar</button>
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
            <span
              className="link"
              onClick={() => navigate("/register")}
              style={{ cursor: "pointer", color:"blue" }}
            >
              Registrarse
            </span>
          </Box>
        </form>
      </div>
    </div>
  );
}