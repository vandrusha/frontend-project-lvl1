import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const makePair = () => cons(utils.getRandomInt(), utils.getRandomInt());
const gameExpression = () => `${car(makePair())} ${cdr(makePair())}`;

const correctAnswer = (expression) => {
  let firstValue = '';
  let secondValue = '';
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      firstValue += expression[i];
    } else { break; }
  }
  for (let i = firstValue.length + 1; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      secondValue += expression[i];
    } else { break; }
  }
  const min = Number(firstValue) < Number(secondValue) ? Number(firstValue) : Number(secondValue);
  let acc = min;
  for (let i = min; i >= 1; i -= 1) {
    if (Number(firstValue) % i === 0 && Number(secondValue) % i === 0) {
      acc = i;
      break;
    }
  }
  return String(acc);
};

const runGame = () => game('gcd', gameExpression, correctAnswer);

export default runGame;
