import axios from 'axios';

axios.defaults.baseURL = 'https://books-reading-api-backend.herokuapp.com/api';

const setToken = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const formatError = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
});

const register = async (credentials) =>
  (await axios.post('/auth/register', credentials)).data.data;

const login = async (credentials) =>
  (await axios.post('/auth/login', credentials)).data.data;

const loginGoogle = async () => await axios.get('/auth/google');

const logOut = async (credentials) =>
  (await axios.post('/auth/logout', credentials)).data.data;

const refresh = async (sid) =>
  (await axios.post('/refresh', { sid })).data.data;

const getAllBooks = async () => (await axios.get('/books')).data;

const getCurrTraining = async () => (await axios.get('/training')).data;

const startTraining = async (details) =>
  (await axios.post('/training', details)).data;

const addResult = async (body) => (await axios.patch('/training', body)).data;

const api = {
  unsetToken,
  setToken,
  formatError,
  register,
  login,
  loginGoogle,
  logOut,
  refresh,
  getAllBooks,
  getCurrTraining,
  startTraining,
  addResult,
};

export default api;
