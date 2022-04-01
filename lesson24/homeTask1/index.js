export const getDiff = (startDate, endDate) => {
  let diff = Math.abs(endDate - startDate);

  diff /= 1000;
  const days = Math.ceil(diff / 60 / 60 / 24);
  const hours = Math.ceil((diff / 60 / 60) % 24);
  const minutes = Math.ceil((diff / 60) % 60);
  const seconds = Math.ceil(diff % 60);

  const dateStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return dateStr;
};

const dt1 = new Date(Date.UTC(2022, 3, 20, 5, 25, 50));
const dt2 = new Date(Date.UTC(2023, 7, 10, 5, 40, 45));
console.log(getDiff(dt2, dt1));
console.log(getDiff(dt1, dt2));
