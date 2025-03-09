import React from 'react';
import styled from 'styled-components';
import DoctorAvailability from '../components/DoctorAvailability.tsx';

const DoctorAvailabilityContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DoctorAvailabilityPage: React.FC = () => {
  return (
    <DoctorAvailabilityContainer>
      <h1>Doctor Availability</h1>
      <DoctorAvailability />
    </DoctorAvailabilityContainer>
  );
};

export default DoctorAvailabilityPage;