import axios from 'axios';
import { loginURL } from './api';

export const loginStudent = (data) => {
  return axios
    .post(loginURL, data)
    .then((res) => localStorage.setItem('token', res.data.token));
};
