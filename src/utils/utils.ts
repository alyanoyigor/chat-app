export const convertDate = (
  date: string,
  monthOptions: Intl.DateTimeFormatOptions = { month: 'short' },
  yearOptions: Intl.DateTimeFormatOptions = { year: 'numeric' }
) => {
  const month = new Date(date).toLocaleString('en-US', monthOptions);
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(date).toLocaleString('en-US', yearOptions);
  const time = new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return { month, day, year, time };
};
