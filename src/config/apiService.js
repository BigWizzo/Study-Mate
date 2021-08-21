import axios from 'axios';
import { loginURL, subjectURL, studentURL } from './api';

export const createStudent = (bearer) => {
  return axios
    .post(studentURL, bearer)
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

export const createSubject = (data, bearer) => {
  return axios
    .post(subjectURL, data, bearer)
    .then((res) => res.data)
    .catch((e) => e);
};

export const getClockings = (id, data) => {
  return axios
    .get(subjectURL + '/' + id, data)
    .then((res) => res.data)
    .catch((e) => e);
};
