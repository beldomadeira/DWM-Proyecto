import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const Login = () => {
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
      
      localStorage.setItem("token", response.data.token);
      console.log("Inicio de sesión exitoso", response.data);
      localStorage.setItem("id", response.data._id);
      console.log("ID de usuario", response.data._id);
      navigate("/feed");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Credenciales incorrectas");
        alert("Correo o contraseña incorrecta"); 
      } else {
        console.error("Error en el inicio de sesión", error);
      }
    }
  }; 

  return (
    <div className="login-container">
      <h1 className="title-app">UCUGRAM</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="input-user"
          type="text"
          name="email"
          placeholder="Correo"
          value={formulario.email}
          onChange={handleInputChange}
        />
        <input
          className="input-pass"
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={formulario.contrasena}
          onChange={handleInputChange}
        />
        <button type="submit" className="boton-ingresar">Ingresar</button>
      </form>
      <div className="register-to-login">
          <p>¿No tienes una cuenta?</p>
          <Link to="/register" className="register-link">Registrarse</Link>
      </div>
    </div>
  );
};

export default Login;
