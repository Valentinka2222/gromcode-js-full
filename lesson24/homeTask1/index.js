export const getDiff = (startDate, endDate) => {
  let diff = Math.abs(endDate - startDate);

  diff /= 1000;
  const days = Math.floor(diff / 60 / 60 / 24);
  const hours = Math.floor((diff / 60 / 60) % 24);
  const minutes = Math.floor((diff / 60) % 60);
  const seconds = Math.floor(diff % 60);

  const dateStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return dateStr;
};

const dt1 = new Date(Date.UTC(2022, 3, 20, 5, 3, 29));
const dt2 = new Date(Date.UTC(2022, 7, 22, 5, 0, 45));
console.log(getDiff(dt2, dt1));
console.log(getDiff(dt1, dt2));
