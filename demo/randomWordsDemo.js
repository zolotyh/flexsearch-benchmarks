import { Document, registerCharset, Index } from 'flexsearch/dist/flexsearch.bundle'
import { MARKS, MEASUREMENT_NAMES } from './consts.js';
import { fetchData } from './fetchData.js';
import { getMeasurements } from './getMeasurements.js';

const getRandomContentFromData = (data) => {
  const item = data[Math.floor(Math.random() * (data.length - 1))];
  return item.content;
}



export const randomWordsDemo = async (numberOfItems) => {
  const filePath = `random_${numberOfItems}_words.json`;

  const index = new Document({
    charset: 'cyrillic:default',
    tokenize: "full",
    cache: 100,
    document: {
      id: "id",
      store: true,
      index: "content"
    }

  });

  performance.mark(MARKS.start);
  const data =  await fetchData(filePath);
  performance.mark(MARKS.load);

  data.forEach((item, counter) => {
    index.add(counter, item);
  })

  performance.mark(MARKS.index);

  performance.measure('indexValue', 'start', 'index');

  const searchString = getRandomContentFromData(data);

  const result = await index.search(searchString, { pluck: "content", enrich: true });


  performance.mark(MARKS.search);

  console.log(result, searchString);

  return {
    name: filePath,
    numberOfWords: data.length,
    ...getMeasurements()
  }
}

