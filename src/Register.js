import React from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";


const RegisterFormulario = () => {
    const [formulario, setFormulario] = React.useState({
        nombreusuario: "",
        email: "",
        contrasena: "",
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formulario);
        navigate("/login");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombreusuario"
                placeholder="Nombre de usuario"
                value={formulario.nombreusuario}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formulario.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                value={formulario.contrasena}
                onChange={handleChange}
            />
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterFormulario;