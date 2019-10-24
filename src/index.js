import readlineSync from 'readline-sync';

// define cycles - a number of the available correct answers before game ends
const rounds = 3;

// game engine consists with 3 rounds if answer is correct. If answer is incorrect game ends
// conditions for answer defined in executable files
const game = (gameName, gameExpression, correctAnswer) => {
  let gameDescription = '';
  if (gameName === 'even') {
    gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  } else if (gameName === 'calc') {
    gameDescription = 'What is the result of the expression?';
  } else if (gameName === 'gcd') {
    gameDescription = 'Find the greatest common divisor of given numbers.';
  } else if (gameName === 'progression') {
    gameDescription = 'What number is missing in the progression?';
  } else if (gameName === 'prime') {
    gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  }

  console.log(`Welcome to the Brain Games \n${gameDescription}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi! ${name}`);

  for (let i = 1; i <= rounds; i += 1) {
    const expression = gameExpression();
    const correct = correctAnswer(expression);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (answer !== correct) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again ${name}!`);
      break;
    }
  }
};

export default game;
