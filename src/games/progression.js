import { cons } from 'hexlet-pairs';
import initGame from '..';
import randInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

// define progression length
const progressionLength = 10;

const getQuestionAnswer = () => {
  const firstProgressionValue = randInt(progressionLength);
  let progressionString = `${firstProgressionValue}`;
  const increment = randInt(progressionLength);
  const correctAnswer = firstProgressionValue + increment * randInt(progressionLength - 1);
  for (let i = 1; i < progressionLength; i += 1) {
    progressionString = `${progressionString} ${firstProgressionValue + increment * i}`;
  }
  const gameQuestion = progressionString.replace(String(correctAnswer), '..');
  const output = cons(gameQuestion, String(correctAnswer));
  return output;
};

const runGame = () => initGame(gameDescription, getQuestionAnswer);

export default runGame;
