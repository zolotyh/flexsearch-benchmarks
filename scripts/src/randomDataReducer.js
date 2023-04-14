import { generateRandomData } from './generateRandomData.js';


export const randomDataReducer = (memo, _value, index) => {
  memo.push(generateRandomData({ id: index }))
  return memo;
};
