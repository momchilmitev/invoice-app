export const getDate = (seconds) => {
  const monthStrings = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date(seconds * 1000);
  const day = date.getDate() < 10 ? `0${date.getDay()}` : date.getDay();
  const month = monthStrings[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
