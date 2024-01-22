import { database } from '../firebaseConfig.ts';
import { ref, set } from 'firebase/database';
import type { SearchResult } from '../types.ts';

/**
 * Writes a search result to Firebase Realtime Database.
 *
 * @param searchResult The search result.
 */
export default function cacheToFirebase(searchResult: SearchResult) {
  const cacheRef = ref(database, `cache/${searchResult.word}`);
  set(cacheRef, searchResult);
}
