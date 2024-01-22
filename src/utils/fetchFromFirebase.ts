import { ref, get, child } from 'firebase/database';
import { database } from '../firebaseConfig.ts';
import { SearchResult } from '../types.ts';

/**
 * Fetches cached search result from Firebase.
 *
 * @param word The word to find result for.
 * @returns The result result if found or null otherwise. 
 */
export default async function fetchFromFirebase(word: string) {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `cache/${word}`));

    if (snapshot.exists()) {
      const searchResult: SearchResult = snapshot.val();
      return searchResult;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}
