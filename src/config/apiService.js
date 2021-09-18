import axios from 'axios';
import { loginURL, subjectURL, studentURL, clockingURL } from './api';

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

export const getSubjects = (bearer) => {
  return axios
    .get(subjectURL, bearer)
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

export const createClocking = (data, bearer) => {
  return axios
    .post(clockingURL, data, bearer)
    .then((res) => res.data)
    .catch((e) => e);
};

export const editClocking = (id, data, bearer) => {
  return axios
    .put(clockingURL + '/' + id, data, bearer)
    .then((res) => res.data)
    .catch((e) => e);
};

export const deleteClocking = (id, bearer) => {
  return axios
    .delete(clockingURL + '/' + id, bearer)
    .then((res) => res.data)
    .catch((e) => e);
};
