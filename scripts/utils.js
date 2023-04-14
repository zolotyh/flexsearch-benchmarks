import { writeFile } from 'node:fs/promises';

export const jsObjToFile = async (path, obj) => {
  await writeFile(path, JSON.stringify(obj));
}
