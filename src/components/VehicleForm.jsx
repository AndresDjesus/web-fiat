import React, { useState } from 'react';
import { Box, Grid} from '@mantine/core';

// Nuevo componente para el formulario

export function VehicleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí enviarías los datos a tu backend
    console.log('Nombre:', name);
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}


