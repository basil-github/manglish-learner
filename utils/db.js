// db.js
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
export const db = new Dexie("Database");
db.version(1).stores({
  words: "++id, malayalam, manglish,read_status", // Primary key and indexed props
});
export async function addWord(data) {
  try {
    const id = await db.words.add(data);
    return id;
  } catch (error) {
    return error;
  }
}
export async function deleteWord(id) {
  try {
    const res = await db.words.delete(id);
    return res;
  } catch (error) {
    return error;
  }
}
export function Words() {
  try {
    const words = useLiveQuery(() => db?.words?.toArray());
    return words;
  } catch (error) {
    return error;
  }
}
