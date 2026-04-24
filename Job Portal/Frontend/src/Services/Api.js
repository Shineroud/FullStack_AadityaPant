import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: API_URL,
});

export const getJobs = async () => {
  const response = await api.get('/jobs/');
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await api.post('/jobs/', jobData);
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post(`/users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post('/users/signup', userData);
  return response.data;
};
