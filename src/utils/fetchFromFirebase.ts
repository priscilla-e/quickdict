import {ref, get, child} from "firebase/database";
import {database} from '../firebaseConfig.ts'
import { Definition, SearchResult } from "../types.ts";


export default async function fetchFromFirebase(word: string) {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `cache/${word}`))

    if (snapshot.exists()) {
      const definitions: Definition[] = snapshot.val();
      return {word, definitions} as SearchResult;
    }
  }
  catch (error) {
    console.log(error)
  }
  return null;
}