import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const makePair = () => cons(utils.randInt(10), cons(utils.randOperation(), utils.randInt(10)));
const gameExpression = () => `${car(makePair())} ${car(cdr(makePair()))} ${cdr(cdr(makePair()))}`;

const correctAnswer = (expression) => {
  let firstValue = '';
  let operator = '';
  let secondValue = '';
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      firstValue += expression[i];
    } else { break; }
  }

  operator = expression[firstValue.length + 1];

  for (let i = firstValue.length + 3; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      secondValue += expression[i];
    } else { break; }
  }

  let result;
  switch (operator) {
    case '-':
      result = Number(firstValue) - Number(secondValue);
      break;
    case '+':
      result = Number(firstValue) + Number(secondValue);
      break;
    case '*':
      result = Number(firstValue) * Number(secondValue);
      break;
    default: result = NaN;
  }
  return String(result);
};

const runGame = () => game('calc', gameExpression, correctAnswer);

export default runGame;
