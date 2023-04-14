import { Document, registerCharset, Index } from 'flexsearch/dist/flexsearch.bundle'
import { MARKS, MEASUREMENT_NAMES } from './consts.js';
import { getMeasurements } from './getMeasurements.js';
import { text } from './test.js';


export const demo1 = async () => {

  const index = new Index({
    charset: 'cyrillic:default',
    tokenize: "full",
  });

  performance.mark(MARKS.start);
  performance.mark(MARKS.load);
  index.add(0, text);
  performance.mark(MARKS.index);

  performance.measure('indexValue', 'start', 'index');

  const result = await index.search({
    query: 'Когда я пишу',
    enrich: true,
  });

  performance.mark(MARKS.search);

  console.log(result);

  return {
    name: 'Гулливер',
    ...getMeasurements()
  }
}

