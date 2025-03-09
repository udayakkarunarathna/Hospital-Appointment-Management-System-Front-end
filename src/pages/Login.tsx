import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm.tsx';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;