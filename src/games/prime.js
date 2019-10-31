import { cons } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameExpression = () => {
  const gameQuestion = utils.randInt();
  const correctAnswer = (expression) => {
    let correct = 'yes';
    if (expression === 1) {
      correct = 'yes';
    } else if (expression === 0 || expression % 2 === 0) {
      correct = 'no';
    } else {
      for (let i = 2; i < expression / 2; i += 1) {
        if (expression % i === 0) {
          correct = 'no';
          break;
        }
      }
    }
    return correct;
  };
  const output = cons(gameQuestion, correctAnswer(gameQuestion));
  return output;
};

const runGame = () => game(gameDescription, gameExpression);

export default runGame;
