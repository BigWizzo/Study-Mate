import axios from 'axios';
import { loginURL } from './api';

export const loginStudent = (data) => {
  return axios.post(loginURL, data).then((res) => res.data);
};
