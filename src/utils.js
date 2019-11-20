// get random number between 0 and max or 100 by default
const randInt = (max, min) => Math.floor(Math.random() * Math.floor((max || 100)) - (min || 0));

export default randInt;
