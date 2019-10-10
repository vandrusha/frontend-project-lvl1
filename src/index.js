import readlineSync from 'readline-sync';

const askName = (greeting) => readlineSync.question(greeting);

export default askName;
