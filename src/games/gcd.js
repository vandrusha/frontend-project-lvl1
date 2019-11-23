import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (first, second) => {
  const min = first < second ? first : second;
  let divisor = min;
  for (let i = min; i >= 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      divisor = i;
      break;
    }
  }
  return divisor;
};

// define range of numbers for the expression
const upperLimit = 100;
const bottomLimit = 1;

const gameExpression = () => {
  const firstValue = randInt(upperLimit, bottomLimit);
  const secondValue = randInt(upperLimit, bottomLimit);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = gcd(firstValue, secondValue);
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => initGame(gameDescription, gameExpression);

export default runGame;
