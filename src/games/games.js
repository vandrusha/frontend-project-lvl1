import readLine from '..';

console.log('Welcome to brain games!');

const name = readLine('May I have your name? ');

const runGame = () => console.log(`Hi! ${name}`);

export default runGame;
