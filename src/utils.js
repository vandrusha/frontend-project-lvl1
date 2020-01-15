// get random number between 0 and max or 100 by default
const randInt = (firstValue, secondValue) => {
  const min = firstValue < secondValue ? firstValue : secondValue || 0;
  const max = firstValue < secondValue ? secondValue : firstValue || 100;
  const minMaxDiff = Math.abs(min - max);
  const randomNumber = Math.floor(Math.random() * Math.floor(minMaxDiff + 1)) + min;
  return randomNumber;
};
export default randInt;
