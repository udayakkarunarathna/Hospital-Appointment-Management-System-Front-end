import React from 'react';
import styled from 'styled-components';
import AdminPanel from '../components/AdminPanel.tsx';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #00adff59;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AdminPage: React.FC = () => {
  return (
    <AdminContainer>
      <h1>Admin Panel</h1>
      <AdminPanel />
    </AdminContainer>
  );
};

export default AdminPage;