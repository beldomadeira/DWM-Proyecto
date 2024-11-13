import React from "react";
import '../components/Register.css';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";



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
        try {
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

            if (response.ok) {
                const data = await response.json();
                const token = data.token; // Ajusta este valor si el token tiene otro nombre en la respuesta
                localStorage.setItem("token", token); // Guarda el token para autenticar la siguiente solicitud

                // Actualizar la foto de perfil predeterminada
                const updateResponse = await axios.put("http://localhost:3001/api/user/profile/edit",
                    { profilePicture: "https://cdn-icons-png.freepik.com/512/6063/6063734.png" },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Usa el token para autenticar
                        },
                    }
                );

                if (updateResponse.status === 200) {
                    console.log("Foto de perfil actualizada correctamente");
                    navigate("/feed");
                } else {
                    console.error("Error al actualizar la foto de perfil:", updateResponse);
                }
            } else {
                console.error("Error en el registro:", response);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };


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