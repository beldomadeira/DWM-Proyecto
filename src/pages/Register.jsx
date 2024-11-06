import React from "react";
import '../components/Register.css';
import { useNavigate, Link } from "react-router-dom";


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
        const response = await fetch("http://localhost:3001/api/auth/register", {
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
        if (response.ok) navigate("/feed");
    }

    return (
        <div className="register-container">
            <h1 className="title-register">UCUGRAM</h1>
            <form onSubmit={handleSubmit} className="form-register">
                <input
                    type="text"
                    name="nombreusuario"
                    placeholder="Nombre de usuario"
                    className="register-input "
                    value={formulario.nombreusuario}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    className="register-input "
                    placeholder="Email"
                    value={formulario.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="contrasena"
                    className="register-input "
                    placeholder="Contraseña"
                    value={formulario.contrasena}
                    onChange={handleChange}
                />
                <button className="register-button" type="submit">Registrarse</button>
            </form>
            <div className="register-to-login">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className="login-link">Inicia sesión</Link>
            </div>
        </div>
    );
}

export default RegisterFormulario;