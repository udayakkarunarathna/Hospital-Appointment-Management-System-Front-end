import React, { useEffect, useState } from 'react';
import { getDoctorAvailability } from '../services/api.ts';

const DoctorAvailability: React.FC = () => {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await getDoctorAvailability();
        setAvailability(response.data);
      } catch (error) {
        console.error('Failed to fetch availability:', error);
      }
    };
    fetchAvailability();
  }, []);

  return (
    <div>
      <h2>Doctor Availability</h2>
      <ul>
        {availability.map((slot: any) => (
          <li key={slot.availabilityID}>
            {slot.doctorID} - {slot.availableFrom} to {slot.availableTo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAvailability;