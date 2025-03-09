import React, { useState } from 'react';
import { scheduleAppointment } from '../services/api.ts';

const AppointmentScheduler: React.FC = () => {
  const [patientID, setPatientID] = useState('');
  const [doctorID, setDoctorID] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await scheduleAppointment({ patientID: parseInt(patientID), doctorID: parseInt(doctorID), appointmentDate });
      console.log('Appointment scheduled:', response.data);
    } catch (error) {
      console.error('Failed to schedule appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Patient ID"
        value={patientID}
        onChange={(e) => setPatientID(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Doctor ID"
        value={doctorID}
        onChange={(e) => setDoctorID(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentScheduler;