import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let divider = 2;
  if (number > 2) {
    for (; divider <= Math.floor(number / 2);) {
      if (number % divider === 0) {
        break;
      } else {
        divider += 1;
      }
    }
  }
  return number % divider === 0;
};

const getQuestionAnswer = () => {
  const gameQuestion = randInt();
  const correctAnswer = isPrime(gameQuestion) ? 'no' : 'yes';
  const output = cons(gameQuestion, String(correctAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
