#! /usr/bin/env node
import readLine, { getRandomInt, game } from '..';

console.log('Welcome to the Brain Games \nAnswer "yes" if the number is even, otherwise answer "no".');

const name = readLine('May I have your name? ');

console.log(`Hi! ${name}`);

const gameExpression = () => getRandomInt();
const correctAnswer = (expression) => (expression % 2 === 0 ? 'yes' : 'no');

game(name, gameExpression, correctAnswer);
