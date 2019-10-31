import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const operations = '+-*';

// get random operation
const randOperation = () => operations[utils.randInt(2)];

const gameDescription = 'What is the result of the expression?';

const gameExpression = () => {
  const initialData = cons(utils.randInt(10), utils.randInt(10));
  const operation = randOperation();
  const gameQuestion = `${car(initialData)} ${operation} ${cdr(initialData)}`;
  const correctAnswer = (expression) => {
    let firstValue = '';
    let secondValue = '';
    for (let i = 0; i < expression.length; i += 1) {
      if (expression[i] !== ' ') {
        firstValue += expression[i];
      } else { break; }
    }

    for (let i = firstValue.length + 3; i < expression.length; i += 1) {
      if (expression[i] !== ' ') {
        secondValue += expression[i];
      } else { break; }
    }

    let result;
    switch (operation) {
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
  const output = cons(gameQuestion, correctAnswer(gameQuestion));
  return output;
};

const runGame = () => game(gameDescription, gameExpression);

export default runGame;
