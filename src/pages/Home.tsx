import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Hospital Appointment Management System</h1>
      <p>Please login or register to manage your appointments.</p>
    </HomeContainer>
  );
};

export default Home;