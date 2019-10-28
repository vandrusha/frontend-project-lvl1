import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import * as utils from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameExpression = () => {
  const initialData = `${car(cons(utils.randInt() + 1, utils.randInt()))} ${cdr(cons(utils.randInt() + 1, utils.randInt()))}`;
  const correctAnswer = (parameter) => {
    let firstValue = '';
    let secondValue = '';
    for (let i = 0; i < parameter.length; i += 1) {
      if (parameter[i] !== ' ') {
        firstValue += parameter[i];
      } else { break; }
    }
    for (let i = firstValue.length + 1; i < parameter.length; i += 1) {
      if (parameter[i] !== ' ') {
        secondValue += parameter[i];
      } else { break; }
    }
    const min = Number(firstValue) < Number(secondValue) ? Number(firstValue) : Number(secondValue);
    let acc = min;
    for (let i = min; i >= 1; i -= 1) {
      if (Number(firstValue) % i === 0 && Number(secondValue) % i === 0) {
        acc = i;
        break;
      }
    }
    return String(acc);
  };
  const output = cons(initialData, correctAnswer(initialData));
  return output;
};

const runGame = () => game('gcd', gameDescription, gameExpression);

export default runGame;
