import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// define cycles - a number of the available correct answers before game ends
const rounds = 3;

// game engine consists with 3 rounds if answer is correct. If answer is incorrect game ends
// conditions for answer defined in the game module
const game = (gameDescription, gameExpression) => {
  console.log(`Welcome to the Brain Games \n${gameDescription}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi! ${name}`);

  for (let i = 1; i <= rounds; i += 1) {
    const questionAnswer = gameExpression();
    console.log(`Question: ${car(questionAnswer)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === cdr(questionAnswer)) {
      console.log('Correct!');
    } else if (answer !== cdr(questionAnswer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${cdr(questionAnswer)}".\nLet's try again ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
