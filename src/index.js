import readlineSync from 'readline-sync';

console.log("Welcome to brain games!");

const askName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${askName}`);


