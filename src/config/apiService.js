import axios from 'axios';
import { loginURL, subjectURL, studentURL, clockingURL } from './api';

const bearer = () => ({
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

export const createStudent = () => {
  return axios
    .post(studentURL, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const loginStudent = (data) => {
  return axios
    .post(loginURL, data)
    .then((res) => res.data)
    .catch((e) => e);
};

export const getSubjects = () => {
  return axios
    .get(subjectURL, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const createSubject = (data) => {
  return axios
    .post(subjectURL, data, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const getClockings = (id) => {
  return axios
    .get(subjectURL + '/' + id, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const createClocking = (data) => {
  return axios
    .post(clockingURL, data, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const editClocking = (id, data) => {
  return axios
    .put(clockingURL + '/' + id, data, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};

export const deleteClocking = (id) => {
  return axios
    .delete(clockingURL + '/' + id, bearer())
    .then((res) => res.data)
    .catch((e) => e);
};
