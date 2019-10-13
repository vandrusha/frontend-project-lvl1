import readlineSync from 'readline-sync';

const readLine = (input) => readlineSync.question(input);

// get random number between 0 and max or 100 by default
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max || 100));

// define cycles - a number of the available correct answers before game ends
const rounds = 3;

// get random operation
const randomOperation = () => {
  const operations = '+-*';
  return operations[getRandomInt(2)];
};

// game engine consists with 3 rounds if answer is correct. If answer is incorrect game ends
// conditions for answer defined in executable files
const game = (name, gameExpression, correctAnswer) => {
  for (let i = 1; i <= rounds; i += 1) {
    const expression = gameExpression();
    const correct = correctAnswer(expression);
    console.log(`Question: ${expression}`);
    const answer = readLine('Your answer: ');
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

export default readLine;
export { getRandomInt, game, randomOperation };
