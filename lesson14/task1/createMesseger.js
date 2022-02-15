'use strict';

const createMessenger = () => {
  let message = 'Just learn it';
  function sendMessage(name) {
    let sender = 'Gromcode';

    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text.bold();
  }

  return { setMessage, sendMessage };
};

const messenger = createMessenger();
messenger.setMessage('Good job');
messenger.sendMessage('Ann');

const messenger2 = createMessenger();
messenger2.sendMessage('Bob');

export function sendMessage(name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
}
export function setMessage(text) {
  message = text;
}
export { message };
