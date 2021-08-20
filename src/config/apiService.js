import axios from 'axios';
import { loginURL, subjectURL, clockingURL } from './api';

export const loginStudent = (data) => {
  return axios.post(loginURL, data).then((res) => res.data);
};

export const getSubjects = (data) => {
  return axios.get(subjectURL, data).then((res) => res.data);
};

export const getClockings = (id, data) => {
  return axios.get(`subjectURL/${id}`, data).then((res) => res.data);
};
