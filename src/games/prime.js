import readLine, { getRandomInt, game } from '..';

console.log('Welcome to the Brain Games \nAnswer "yes" if given number is prime. Otherwise answer "no".');

const name = readLine('May I have your name? ');

console.log(`Hi! ${name}`);

const gameExpression = () => getRandomInt();
const correctAnswer = (expression) => {
  let correct = 'yes';
  if (expression === 1) {
    correct = 'yes';
  } else if (expression === 0 || expression % 2 === 0) {
    correct = 'no';
  } else {
    for (let i = 2; i < expression / 2; i += 1) {
      if (expression % i === 0) {
        correct = 'no';
        break;
      }
    }
  }
  return correct;
};

const runGame = () => game(name, gameExpression, correctAnswer);

export default runGame;
