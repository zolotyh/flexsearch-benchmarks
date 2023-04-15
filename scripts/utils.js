import { writeFile } from 'node:fs/promises';
import { mkdirSync, existsSync } from 'node:fs'

export const jsObjToFile = async (path, obj) => {
  await writeFile(path, JSON.stringify(obj));
}

export const createFolderIfNeeded = (path) => {
  if(existsSync(path)){ return; }
  mkdirSync(path);
}
