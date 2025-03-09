import axios from 'axios';

const API_URL = 'http://localhost:5089/api'; // Backend URL


// Admin registration
export const registerAdmin = async (adminData: {
  email: string;
  passwordHash: string;
}) => {
  return axios.post(`${API_URL}/Auth/admin/register`, adminData);
};

// Admin login
export const loginAdmin = async (credentials: { email: string; password: string }) => {
  return axios.post(`${API_URL}/Auth/admin/login`, credentials);
};

// Example of a protected request (requires token)
export const getProtectedData = async (token: string) => {
  return axios.get(`${API_URL}/ProtectedEndpoint`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Register a patient (requires admin token)
export const registerPatients = async (patientData: {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
}) => {
  const token = localStorage.getItem('token'); // Retrieve the token from storage
  return axios.post(`${API_URL}/Auth/Patient/register`, patientData, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the request
    },
  });
};

export const loginPatient = async (credentials: { email: string; password: string }) => {
  return axios.post(`${API_URL}/Auth/admin/login`, credentials);
};

export const getDoctorAvailability = async () => {
  return axios.get(`${API_URL}/DoctorAvailability`);
};

export const scheduleAppointment = async (appointmentData: {
  patientID: number;
  doctorID: number;
  appointmentDate: string;
}) => {
  return axios.post(`${API_URL}/Appointments/schedule`, appointmentData);
};


// Get all users (requires admin token)
export const getAllUsers = async () => {
  const token = localStorage.getItem('token'); // Retrieve the token
  const response = await axios.get(`${API_URL}/Admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the request
    },
  });
  console.log('Users response:', response.data); // Log the response
  return response;
};

// Get all appointments (requires admin token)
export const getAllAppointments = async () => {
  const token = localStorage.getItem('token'); // Retrieve the token
  return axios.get(`${API_URL}/Admin/appointments`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the request
    },
  });
};