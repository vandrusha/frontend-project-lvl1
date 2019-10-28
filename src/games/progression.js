import { cons } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const gameDescription = 'What number is missing in the progression?';

const gameExpression = () => {
  let correctAnswer = '';
  let a = utils.randInt(10);
  const hiddenPosition = utils.randInt(9);
  let initialData = '';
  const d = utils.randInt(10) + 1;
  for (let i = 0; i < 10; i += 1) {
    if (i !== hiddenPosition) {
      initialData += `${a} `;
      a += d;
    } else if (i === hiddenPosition) {
      initialData += '.. ';
      correctAnswer = String(a);
      a += d;
    }
  }
  const output = cons(initialData, correctAnswer);
  return output;
};

const runGame = () => game('progression', gameDescription, gameExpression);

export default runGame;
