export const bearer = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
};
