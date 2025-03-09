import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import DoctorAvailabilityPage from './pages/DoctorAvailabilityPage.tsx';
import AppointmentPage from './pages/AppointmentPage.tsx';
import AdminPage from './pages/AdminPage.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';
import PatientRegistrationPage from './pages/PatientRegistrationPage.tsx'; 

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-availability" element={<DoctorAvailabilityPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/patient-registration" element={<PatientRegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;