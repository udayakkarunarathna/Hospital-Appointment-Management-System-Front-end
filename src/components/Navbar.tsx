import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/doctor-availability">Doctor Availability</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/patient-registration">Patient Registration</NavLink>
    </Nav>
  );
};

export default Navbar;