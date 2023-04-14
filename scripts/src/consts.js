import { randomDataReducer } from "./randomDataReducer.js"
import { equalDataReducer } from "./equalDataReducer.js"

export const REDUCERS_TYPES = {
  random: 'random',
  equal: 'equal',
}

export const REDUCERS = {
  [REDUCERS_TYPES.random]: randomDataReducer,
  [REDUCERS_TYPES.equal]: equalDataReducer,
}
