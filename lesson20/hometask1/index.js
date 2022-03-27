'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.dateCreated = new Date();
    this.type = type;
    this.id = '';
    this.isConfirmed = false;
  }

  checkPrice() {
    return this.price > 1000;
  }
  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell' ? true : false;
  }
}

const order1 = new Order(1200, 'Kharkiv', 'Buy');

console.log(order1);
console.log(order1.confirmOrder());
console.log(order1);
console.log(order1.checkPrice());
console.log(order1.id);
console.log(order1);

const order = new Order(1200, 'Kharkiv', 'Buy');
const order2 = new Order(1800, 'Kharkiv', 'Buy');

console.log(order2.id);
