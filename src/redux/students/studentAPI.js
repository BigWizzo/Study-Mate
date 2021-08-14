import axios from 'axios';

export const baseURL = 'http://localhost:5000';
export const studentURL = baseURL + '/students';

export const addTask = (data) => {
  return axios.post(studentURL, data).then((res) => res.data);
};
