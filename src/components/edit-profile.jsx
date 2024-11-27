import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToUpdate = {};
      if (editForm.username) dataToUpdate.username = editForm.username;
      if (editForm.email) dataToUpdate.email = editForm.email;
      if (editForm.password) dataToUpdate.password = editForm.password;

      await axios.put(`http://localhost:3001/api/user/profile/edit`, dataToUpdate);
      navigate(-1); // Go back to profile page
    } catch (error) {
      setError('Error al actualizar el perfil');
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="edit-profile-container">
      <h1>Editar Perfil</h1>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={editForm.username}
            onChange={handleChange}
            placeholder="Nuevo nombre de usuario"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editForm.email}
            onChange={handleChange}
            placeholder="Nuevo email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={editForm.password}
            onChange={handleChange}
            placeholder="Nueva contraseña"
          />
        </div>

        <div className="button-group">
          <button type="submit">Guardar cambios</button>
          <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;