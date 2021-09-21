import axios from 'axios';
import {
  loginURL, subjectURL, studentURL, clockingURL,
} from './api';

const bearer = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const createStudent = (data) => axios
  .post(studentURL, data)
  .then((res) => res.data)
  .catch((e) => e);

export const loginStudent = (data) => axios
  .post(loginURL, data)
  .then((res) => res.data)
  .catch((e) => e);

export const getSubjects = () => axios
  .get(subjectURL, bearer())
  .then((res) => res.data)
  .catch((e) => e);

export const createSubject = (data) => axios
  .post(subjectURL, data, bearer())
  .then((res) => res.data)
  .catch((e) => e);

export const getClockings = (id) => axios
  .get(`${subjectURL}/${id}`, bearer())
  .then((res) => res.data)
  .catch((e) => e);

export const createClocking = (data) => axios
  .post(clockingURL, data, bearer())
  .then((res) => res.data)
  .catch((e) => e);

export const editClocking = (id, data) => axios
  .put(`${clockingURL}/${id}`, data, bearer())
  .then((res) => res.data)
  .catch((e) => e);

export const deleteClocking = (id) => axios
  .delete(`${clockingURL}/${id}`, bearer())
  .then((res) => res.data)
  .catch((e) => e);
