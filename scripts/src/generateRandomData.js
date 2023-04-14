import { randWord, randNumber } from '@ngneat/falso';

export const generateRandomData = ({ id, generate = randWord, text }) => {
  return {
    id,
    content: text ? text : generate(),
    rect: {
      x: randNumber(),
      y: randNumber(),
      width: randNumber(),
      height: randNumber()
    }
  }
}
