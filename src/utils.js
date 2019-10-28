// get random number between 0 and max or 100 by default
const randInt = (max) => Math.floor(Math.random() * Math.floor(max || 100));

// until the second util is added
const ignoreLint = () => 'Don`t let lint throw an error';

export { randInt, ignoreLint };
