import { randWord } from '@ngneat/falso';
import { generateRandomData } from './generateRandomData.js';


export const equalDataReducer = (memo, _value, index) => {
  const currentIndex = index === 0 ? 0 : index * 2 - 1;
  memo.push(generateRandomData({ id: currentIndex, text: randWord() }))
  memo.push(generateRandomData({ id: currentIndex + 1, text: ' ' }));
  return memo;
};
