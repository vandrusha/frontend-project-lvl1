import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const divisionBy = (divider) => (expression) => expression % divider === 0;

const gameExpression = () => {
  const gameQuestion = utils.randInt();
  const correctAnswer = divisionBy(2)(gameQuestion) ? 'yes' : 'no';
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => game(gameDescription, gameExpression);

export default runGame;
