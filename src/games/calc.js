import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const operations = '+-*';

// get random operation
const randOperation = () => operations[randInt(operations.length - 1)];

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
    default: result = null;
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
  const initialOperation = randOperation();
  const gameQuestion = `${firstOperand} ${initialOperation} ${secondOperand}`;
  const resultOfCorrectAnswer = correctAnswer(firstOperand, secondOperand, initialOperation);
  const output = cons(gameQuestion, String(resultOfCorrectAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
