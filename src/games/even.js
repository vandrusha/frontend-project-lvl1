import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import initGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;

const getQuestionAnswer = () => {
  const gameQuestion = randInt();
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
