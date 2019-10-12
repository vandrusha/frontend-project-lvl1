#! /usr/bin/env node
import readLine, { getRandomInt } from '..';

console.log('Welcome to the Brain Games \nAnswer "yes" if the number is even, otherwise answer "no".');

const name = readLine('May I have your name? ');

console.log(`Hi! ${name}`);

for (let i = 0; i <= 2; i += 1) {
  const randomNumber = getRandomInt();
  console.log(`Question: ${randomNumber}`);
  const answer = readLine('Your answer: ');
  if ((randomNumber % 2 === 0 && answer.toLowerCase() === 'yes') || (randomNumber % 2 !== 0 && answer.toLowerCase() === 'no')) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else if (randomNumber % 2 === 0 && answer.toLowerCase() !== 'yes') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again ${name}!`);
    i = 2;
  } else if (randomNumber % 2 !== 0 && answer.toLowerCase() !== 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${name}!`); 
    i = 2;
  }
}
