import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const operations = '+-*';

const getRandomOperation = () => operations[randInt(operations.length - 1)];

const getCorrectAnswer = (firstValue, secondValue, operation) => {
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
    default: return null;
  }
  return result;
};

// define the range of numbers in the expression
const maxNumber = 10;
const minNumber = 0;
const gameDescription = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const firstOperand = randInt(maxNumber, minNumber);
  const secondOperand = randInt(maxNumber, minNumber);
  const initialOperation = getRandomOperation();
  const gameQuestion = `${firstOperand} ${initialOperation} ${secondOperand}`;
  const correctAnswer = getCorrectAnswer(firstOperand, secondOperand, initialOperation);
  const output = cons(gameQuestion, String(correctAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
