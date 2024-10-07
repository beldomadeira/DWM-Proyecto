import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import "./loginPage.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const preventDefault = (event) => event.preventDefault();

export const LoginPage = () => {
    return (
    <div>
      <h1 className='title-app'>UCUGRAM</h1>
      <div className='log-box'>
            <h3 className='log-text'>Iniciar Sesión</h3>
            <form>
              <div className="username">
                <input type="text" placeholder="Usuario" />
                <AccountCircleIcon className='user-icon'></AccountCircleIcon>
              </div>
              <div className="password">
                <input type="password" placeholder="Contraseña" />
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




    
