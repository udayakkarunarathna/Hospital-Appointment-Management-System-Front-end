import React, { useState } from 'react';
import { registerPatients } from '../services/api.ts';

const PatientRegistrationForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerPatients({
        firstName,
        lastName,
        email,
        passwordHash,
        phoneNumber,
      });
      console.log('Patient registration successful:', response.data);
      alert('Patient registered successfully!');
    } catch (error) {
      console.error('Patient registration failed:', error);
      alert('Failed to register patient. Please check your inputs and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register a New Patient</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={passwordHash}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register Patient</button>
    </form>
  );
};

export default PatientRegistrationForm;