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
const maxNumber = 100;
const minNumber = 1;

const getQuestionAnswer = () => {
  const firstValue = randInt(maxNumber, minNumber);
  const secondValue = randInt(maxNumber, minNumber);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = gcd(firstValue, secondValue);
  const output = cons(gameQuestion, String(correctAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
