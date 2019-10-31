import { cons } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameExpression = () => {
  const firstValue = utils.randInt(100, 1);
  const secondValue = utils.randInt(100, 1);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = (first, second) => {
    const min = first < second ? first : second;
    let gcd = min;
    for (let i = Math.floor(min / 2); i >= 1; i -= 1) {
      if (first % i === 0 && second % i === 0) {
        gcd = i;
      }
    }
    return String(gcd);
  };
  const output = cons(gameQuestion, correctAnswer(firstValue, secondValue));
  return output;
};

const runGame = () => game(gameDescription, gameExpression);

export default runGame;
