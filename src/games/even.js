import { cons } from 'hexlet-pairs';
import * as utils from '../utils';
import game from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameExpression = () => {
  const initialData = utils.randInt();
  const divisionBy = (divider) => (expression) => expression % divider === 0;
  const correctAnswer = divisionBy(2)(initialData) ? 'yes' : 'no';
  const output = cons(initialData, correctAnswer);
  return output;
};

const runGame = () => game('even', gameDescription, gameExpression);

export default runGame;
