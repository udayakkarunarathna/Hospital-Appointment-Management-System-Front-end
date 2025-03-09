import React from 'react';
import styled from 'styled-components';
import AppointmentScheduler from '../components/AppointmentScheduler.tsx';

const AppointmentContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AppointmentPage: React.FC = () => {
  return (
    <AppointmentContainer>
      <h1>Schedule an Appointment</h1>
      <AppointmentScheduler />
    </AppointmentContainer>
  );
};

export default AppointmentPage;