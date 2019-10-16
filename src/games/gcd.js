import { cons, car, cdr } from 'hexlet-pairs';
import readLine, { getRandomInt, game } from '..';

console.log('Welcome to the Brain Games \nFind the greatest common divisor of given numbers.');

const name = readLine('May I have your name? ');

console.log(`Hi! ${name}`);

const makePair = () => cons(getRandomInt(), getRandomInt());
const gameExpression = () => `${car(makePair())} ${cdr(makePair())}`;

const correctAnswer = (expression) => {
  let firstValue = '';
  let secondValue = '';
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      firstValue += expression[i];
    } else { break; }
  }
  for (let i = firstValue.length + 1; i < expression.length; i += 1) {
    if (expression[i] !== ' ') {
      secondValue += expression[i];
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

const runGame = () => game(name, gameExpression, correctAnswer);

export default runGame;
