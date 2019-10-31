import { cons } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const gameDescription = 'What number is missing in the progression?';

const gameExpression = () => {
  let correctAnswer = '';
  let firstProgressionValue = utils.randInt(10);
  const hiddenPosition = utils.randInt(9);
  let gameQuestion = '';
  const increment = utils.randInt(10, 1);
  for (let i = 0; i < 10; i += 1) {
    if (i !== hiddenPosition) {
      gameQuestion += `${firstProgressionValue} `;
      firstProgressionValue += increment;
    } else if (i === hiddenPosition) {
      gameQuestion += '.. ';
      correctAnswer = String(firstProgressionValue);
      firstProgressionValue += increment;
    }
  }
  const output = cons(gameQuestion, correctAnswer);
  return output;
};

const runGame = () => game(gameDescription, gameExpression);

export default runGame;
