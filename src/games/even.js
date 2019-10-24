import game from '..';
import * as utils from '../utils';

const gameExpression = () => utils.randomInt();
const divisionBy = (divider) => (expression) => (expression % divider === 0 ? 'yes' : 'no');
const correctAnswer = divisionBy(2);

const runGame = () => game('even', gameExpression, correctAnswer);

export default runGame;
