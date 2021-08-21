import axios from 'axios';
import { loginURL, subjectURL, studentURL } from './api';

export const createStudent = (data) => {
  return axios
    .post(studentURL, data)
    .then((res) => res.data)
    .catch((e) => e);
};

export const loginStudent = (data) => {
  return axios
    .post(loginURL, data)
    .then((res) => res.data)
    .catch((e) => e);
};

export const getSubjects = (data) => {
  return axios
    .get(subjectURL, data)
    .then((res) => res.data)
    .catch((e) => e);
};

export const getClockings = (id, data) => {
  return axios
    .get(subjectURL + '/' + id, data)
    .then((res) => res.data)
    .catch((e) => e);
};
