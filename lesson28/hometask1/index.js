'use strict';
const date = new Date(2020, 0, 7, 17, 17, 17);
export const shmoment = (date) => {
  let oldDate = date;
  let newDate = new Date(date);
  console.log(oldDate.getFullYear());
  const calculator = {
    add(unitTime, value) {
      switch (unitTime) {
        case 'days':
          newDate.setDate(oldDate.getDate() + value);
          console.log(newDate);
          break;
        case 'years':
          newDate.setFullYear(oldDate.getFullYear() + value);

          break;
        case 'months':
          newDate.setMonth(oldDate.getMonth() + value);
          break;
        case 'hours':
          newDate.setHours(oldDate.getHours() + value);
          break;
        case 'minutes':
          newDate.setMinutes(oldDate.getMinutes() + value);
          break;
        case 'seconds':
          newDate.setSeconds(oldDate.getSeconds() + value);
          break;
        case 'milliseconds':
          newDate.setMilliseconds(oldDate.getMilliseconds() + value);
          break;
        default:
          newDate = date;
          break;
      }
      return this;
    },
    subtract(unitTime, value) {
      switch (unitTime) {
        case 'days':
          newDate.setDate(oldDate.getDate() - value);
          console.log(newDate);
          break;
        case 'years':
          newDate.setFullYear(oldDate.getFullYear() - value);
          break;
        case 'months':
          newDate.setMonth(oldDate.getMonth() - value);
          break;
        case 'hours':
          newDate.setHours(oldDate.getHours() - value);
          break;
        case 'minutes':
          newDate.setMinutes(oldDate.getMinutes() - value);
          break;
        case 'seconds':
          newDate.setSeconds(oldDate.getSeconds() - value);
          break;
        case 'milliseconds':
          newDate.setMilliseconds(oldDate.getMilliseconds() - value);
          break;
        default:
          newDate = date;
          break;
      }
      return this;
    },
    result() {
      return newDate;
    },
  };
  return calculator;
};

const result = shmoment(date)
  .add('days', 10)
  .add('years', 2)
  .add('minutes', 10)
  .subtract('hours', 3)
  .result();
console.log(result);
