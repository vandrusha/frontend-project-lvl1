import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (expression) => {
  let divider = 2;
  if (expression > 2) {
    for (; divider <= Math.floor(expression / 2);) {
      if (expression % divider === 0) {
        break;
      } else {
        divider += 1;
      }
    }
  }
  return expression % divider === 0;
};

const gameExpression = () => {
  const gameQuestion = randInt();
  const correctAnswer = isPrime(gameQuestion) ? 'no' : 'yes';
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => initGame(gameDescription, gameExpression);

export default runGame;
