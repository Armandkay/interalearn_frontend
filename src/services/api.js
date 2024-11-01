import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getCourses = () => API.get('/courses');
export const createCourse = (courseData) => API.post('/courses', courseData);

// Add other CRUD operations as needed

