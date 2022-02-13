const createMessage = () => {
  let message = 'Just learn it';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your Gromcode`);
  }
  function setMessage(text) {
    message = text;
  }
  return { sendMessage, setMessage };
};
const messanger = createMessage();
messanger.setMessage('Good job');
messanger.sendMessage('Ann');
