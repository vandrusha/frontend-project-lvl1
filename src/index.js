import readlineSync from 'readline-sync';

const readLine = (greeting) => readlineSync.question(greeting);

// get random number between 0 and 100
const getRandomInt = () => Math.floor(Math.random() * Math.floor(100));

export default readLine;
export { getRandomInt };
