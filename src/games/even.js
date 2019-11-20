import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import initGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const divisionBy = (divider) => (expression) => expression % divider === 0;

const gameExpression = () => {
  const gameQuestion = randInt();
  const correctAnswer = divisionBy(2)(gameQuestion) ? 'yes' : 'no';
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => initGame(gameDescription, gameExpression);

export default runGame;
