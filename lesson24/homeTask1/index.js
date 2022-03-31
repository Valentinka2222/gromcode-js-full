export const getDiff = (startDate, endDate) => {
  let diff = endDate - startDate;

  diff /= 1000;
  const days = Math.round(diff / 60 / 60 / 24);
  const hours = Math.round((diff / 60 / 60) % 24);
  const minutes = Math.round((diff / 60) % 60);
  const seconds = Math.round(diff % 60);

  const dateStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  console.log(dateStr);
  return dateStr;
};
