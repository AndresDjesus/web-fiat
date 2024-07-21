import React, { useState } from 'react';

export const Registrarse = () => {
  const [usuario, setUsuario] = useState(''); // Estado para el nombre de usuario
  const [correo, setCorreo] = useState(''); // Estado para el correo electrónico
  const [contrasena, setContrasena] = useState(''); // Estado para la contraseña

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'usuario':
        setUsuario(value);
        break;
      case 'correo':
        setCorreo(value);
        break;
      case 'contrasena':
        setContrasena(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Valida los datos del formulario (opcional)
    // Puedes agregar validaciones para asegurarte de que el usuario haya ingresado valores correctos

    console.log('Formulario enviado:', { usuario, correo, contrasena });
    // Puedes reemplazar el console.log con lógica para enviar los datos a un servidor o realizar otra acción
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 color='white'>Registro</h2>
      <label htmlFor="usuario">Nombre de usuario:</label>
      <input type="text" id="usuario" name="usuario" value={usuario} onChange={handleInputChange} />
      <br />
      <label htmlFor="correo">Correo electrónico:</label>
      <input type="email" id="correo" name="correo" value={correo} onChange={handleInputChange} />
      <br />
      <label htmlFor="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={handleInputChange} />
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
};