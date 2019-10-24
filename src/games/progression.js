import game from '..';
import * as utils from '../utils';

let hiddenNumber = '';
const correctAnswer = () => hiddenNumber;
const gameExpression = () => {
  let a = utils.randInt(10);
  const hiddenPosition = utils.randInt(9);
  let progressionString = '';
  const d = utils.randInt(10) + 1;
  for (let i = 0; i < 10; i += 1) {
    if (i !== hiddenPosition) {
      progressionString += `${a} `;
      a += d;
    } else if (i === hiddenPosition) {
      progressionString += '.. ';
      hiddenNumber = String(a);
      a += d;
    }
  }
  return progressionString;
};

const runGame = () => game('progression', gameExpression, correctAnswer);

export default runGame;
