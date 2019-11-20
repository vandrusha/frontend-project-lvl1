import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const operations = '+-*';

// get random operation
const operationIndex = operations.length - 1;
const randOperation = () => operations[randInt(operationIndex)];

// define the range of numbers in the expression
const rangeOfNumbers = 10;
const gameDescription = 'What is the result of the expression?';

const gameExpression = () => {
  const firstNumber = randInt(rangeOfNumbers);
  const secondNumber = randInt(rangeOfNumbers);
  const initialOperation = randOperation();
  const gameQuestion = `${firstNumber} ${initialOperation} ${secondNumber}`;
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
    return String(result);
  };
  const output = cons(gameQuestion, correctAnswer(firstNumber, secondNumber, initialOperation));
  return output;
};

const runGame = () => initGame(gameDescription, gameExpression);

export default runGame;
