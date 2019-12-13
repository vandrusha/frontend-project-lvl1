import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

// define progression length
const progressionLength = 10;

const getQuestionAnswer = () => {
  let correctAnswer = '';
  let firstProgressionValue = randInt(progressionLength);
  const hiddenPosition = randInt(progressionLength - 1);
  let gameQuestion = '';
  const increment = randInt(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenPosition) {
      gameQuestion += `${firstProgressionValue} `;
      firstProgressionValue = increment * (i + 1);
    } else if (i === hiddenPosition) {
      gameQuestion = `${gameQuestion}.. `;
      correctAnswer = firstProgressionValue;
      firstProgressionValue = increment * (i + 1);
    }
  }
  const output = cons(gameQuestion, String(correctAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
