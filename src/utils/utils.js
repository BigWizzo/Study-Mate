import { format } from 'date-fns';

export const dateToday = (date) => {
  return format(new Date(date), 'dd MMMM yyyy');
};
