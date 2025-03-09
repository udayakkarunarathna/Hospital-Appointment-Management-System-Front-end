import React, { useState } from 'react';
import { registerAdmin } from '../services/api.ts';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerAdmin({ email, passwordHash: password });
      console.log('Admin registration successful:', response.data);
    } catch (error) {
      console.error('Admin registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register Admin</button>
    </form>
  );
};

export default RegisterForm;