import { MEASUREMENT_NAMES, MARKS } from './consts.js'
export const getMeasurements = () => {
  performance.measure(MEASUREMENT_NAMES.dataLoadTime, MARKS.start, MARKS.load);
  performance.measure(MEASUREMENT_NAMES.indexTime, MARKS.load, MARKS.index);
  performance.measure(MEASUREMENT_NAMES.searchTime, MARKS.index, MARKS.search);

  const result =  { 
    dataLoad: performance.getEntriesByName(MEASUREMENT_NAMES.dataLoadTime)[0].duration,
    search: performance.getEntriesByName(MEASUREMENT_NAMES.searchTime)[0].duration, 
    buildIndex: performance.getEntriesByName(MEASUREMENT_NAMES.indexTime)[0].duration
  }

  performance.clearMeasures()
  performance.clearMarks()

  return result;
}
