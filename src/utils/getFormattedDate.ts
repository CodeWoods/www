export const getFormattedDate = (value: string) => {
  return new Date(Date.parse(value)).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};
