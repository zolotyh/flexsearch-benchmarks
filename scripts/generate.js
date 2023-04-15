#!/usr/bin/env node

import { join } from 'node:path';
import { REDUCERS_TYPES, REDUCERS } from './src/consts.js';
import { jsObjToFile, createFolderIfNeeded } from './utils.js'

/*
 * Set WORDS_NUMBER to generate json file with length equals WORDS_NUMBER
 */
const WORDS_NUMBER = process.env.WORDS_NUMBER ? parseInt(process.env.WORDS_NUMBER, 10) : 1_000;

/* 
 * Set REDUCER_TYPE to manager generation type
*/
const REDUCER_TYPE = process.env.REDUCER_TYPE;

const PUBLIC_FOLDER_NAME = 'public'

const generateFileName = (reducerType) => {
  const fileName = `${reducerType}_${WORDS_NUMBER}_words.json`
  return join(PUBLIC_FOLDER_NAME, fileName);
}


const getReducerInfo = () => {
  const name = REDUCERS_TYPES.hasOwnProperty(REDUCER_TYPE) ? REDUCERS_TYPES[REDUCER_TYPE] : REDUCERS_TYPES.random
  return {
    name,
    reducer: REDUCERS[name]
  }
}

const generateData = async () => {
  const reducerInfo = getReducerInfo();

  const obj = new Array(WORDS_NUMBER)
    .fill()
    // use defferent reducers to get different types of data
    .reduce(reducerInfo.reducer, [])

  // name of the generated file depends on reducers name
  createFolderIfNeeded(PUBLIC_FOLDER_NAME);
  await jsObjToFile(generateFileName(reducerInfo.name), obj);
}

generateData();


