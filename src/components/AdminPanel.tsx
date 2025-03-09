import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllAppointments } from '../services/api.ts';

const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<{ patients: any[]; doctors: any[] }>({ patients: [], doctors: [] });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getAllUsers();
        const appointmentsResponse = await getAllAppointments();
        setUsers(usersResponse.data); // Set the users object
        setAppointments(appointmentsResponse.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Users</h3>
      <h4>Patients</h4>
      <ul>
        {Array.isArray(users.patients) && users.patients.map((patient: any) => (
          <li key={patient.patientID}>
            {patient.firstName} {patient.lastName} ({patient.email})
          </li>
        ))}
      </ul>
      <h4>Doctors</h4>
      <ul>
        {Array.isArray(users.doctors) && users.doctors.map((doctor: any) => (
          <li key={doctor.doctorID}>
            {doctor.firstName} {doctor.lastName} ({doctor.email})
          </li>
        ))}
      </ul>
      <h3>Appointments</h3>
      <ul>
        {Array.isArray(appointments) && appointments.map((appointment: any) => (
          <li key={appointment.appointmentID}>
            {appointment.patientID} - {appointment.doctorID} - {appointment.appointmentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;