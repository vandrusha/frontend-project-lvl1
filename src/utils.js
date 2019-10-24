// get random number between 0 and max or 100 by default
const randInt = (max) => Math.floor(Math.random() * Math.floor(max || 100));

// get random operation
const randOperation = () => {
  const operations = '+-*';
  return operations[randInt(2)];
};

export { randInt, randOperation };
