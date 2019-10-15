#! /usr/bin/env node
import readLine, { getRandomInt, game } from '..';

console.log('Welcome to the Brain Games \nWhat number is missing in the progression?');

const name = readLine('May I have your name? ');

console.log(`Hi! ${name}`);
let hiddenNumber = '';
const correctAnswer = () => hiddenNumber;
const gameExpression = () => {
  let a = getRandomInt(10);
  const hiddenPosition = getRandomInt(9);
  let progressionString = '';
  const d = getRandomInt(10) + 1;
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

game(name, gameExpression, correctAnswer);
