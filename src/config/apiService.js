import axios from 'axios';
import { loginURL, subjectURL } from './api';

export const loginStudent = (data) => {
  return axios.post(loginURL, data).then((res) => res.data);
};

export const getSubjects = (data) => {
  return axios.get(subjectURL, data).then((res) => res.data);
};
