const getDiff = (startDate, endDate) => {
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

let dt1 = new Date('October 13, 2020 08:11:00');
let dt2 = new Date('October 13, 2020 11:13:00');
console.log(getDiff(dt1, dt2));
