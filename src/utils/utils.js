import { format } from 'date-fns';

export const dateToday = (date) => {
  return format(new Date(date), 'dd MMMM yyyy');
};

export const dateShort = (date) => {
  return format(new Date(date), 'MMM dd yyyy');
};
