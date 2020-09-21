const messages = ['Hello', 'Luis', 'Reyna', 'Rocio', 'Rodrigo', 'Fernanda', 'Francisco', 'Rangel', 'Castro', 'Pinzon', 'Moreira'];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg };
