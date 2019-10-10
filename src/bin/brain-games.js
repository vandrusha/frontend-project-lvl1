#! /usr/bin/env node
import askName from '..';

console.log('Welcome to brain games!');

const name = askName('May I have your name? ');

console.log(`Hi! ${name}`);
