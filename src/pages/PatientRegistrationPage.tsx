import React from 'react';
import styled from 'styled-components';
import PatientRegistrationForm from '../components/PatientRegistrationForm.tsx';

const PRContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PatientRegistrationPage: React.FC = () => {
  return (
    <PRContainer>
      <h1>Login</h1>
      <PatientRegistrationForm />
    </PRContainer>
  );
};

export default PatientRegistrationPage;