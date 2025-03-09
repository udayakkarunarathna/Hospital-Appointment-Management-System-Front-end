import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.tsx';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Register: React.FC = () => {
  return (
    <RegisterContainer>
      <h1>Register</h1>
      <RegisterForm />
    </RegisterContainer>
  );
};

export default Register;