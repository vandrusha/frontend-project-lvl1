import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const operations = '+-*';

// get random operation
const operationIndex = operations.length - 1;
const randOperation = () => operations[randInt(operationIndex)];

const correctAnswer = (firstValue, secondValue, operation) => {
  let result;
  switch (operation) {
    case '-':
      result = firstValue - secondValue;
      break;
    case '+':
      result = firstValue + secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default: result = NaN;
  }
  return result;
};


// define the range of numbers in the expression
const rangeOfNumbers = 10;
const gameDescription = 'What is the result of the expression?';

const gameExpression = () => {
  const firstOperand = randInt(rangeOfNumbers);
  const secondOperand = randInt(rangeOfNumbers);
  const initialOperation = randOperation();
  const gameQuestion = `${firstOperand} ${initialOperation} ${secondOperand}`;
  const output = cons(gameQuestion, correctAnswer(firstOperand, secondOperand, initialOperation));
  return output;
};

const runGame = () => initGame(gameDescription, gameExpression);

export default runGame;
