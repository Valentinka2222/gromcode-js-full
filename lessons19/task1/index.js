'use strick';

export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
  name: 'Argo',
  hasWeels: false,

  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
  startMachine() {
    this.move(), this.liftAnchorUp();
  },

  stopMachine() {
    this.stop(), this.liftAnchorDown();
  },

  __proto__: vehicle,
};
ship.startMachine();
