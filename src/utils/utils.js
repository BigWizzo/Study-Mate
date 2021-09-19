import { format, isToday, isYesterday } from 'date-fns';

export const dateToday = (date) => {
  return format(new Date(date), 'dd MMMM yyyy');
};

export const dateShort = (date) => {
  return format(new Date(date), 'MMM dd yyyy');
};

export const checkDay = (date) => {
  if (isToday(date)) {
    return 'today';
  }
  if (isYesterday(date)) {
    return 'yesterday';
  }
  return 'rest';
};
