import React from "react";
import '../components/Register.css';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formulario);
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": formulario.nombreusuario,
                "email": formulario.email,
                "password": formulario.contrasena,
            }),
        });
        console.log(response);
        if(response.ok)navigate("/feed");
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