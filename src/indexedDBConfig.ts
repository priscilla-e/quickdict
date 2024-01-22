import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { SearchResult } from './types';

interface QuickdictDB extends DBSchema {
  searchResults: {
    key: string; // 'word' is used as a key
    value: SearchResult;
  };
}

async function createDatabase() {
  const db = await openDB<QuickdictDB>('QuickdictDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('searchResults')) {
        db.createObjectStore('searchResults', {
          keyPath: 'word',
        });
      }
    },
  });

  return db;
}

// Create DB instance
const indexedDB: IDBPDatabase<QuickdictDB> = await createDatabase();

// Helper functions for adding and removing data from indexDB...
async function addSearchResult(searchResult: SearchResult) {
  const tx = indexedDB.transaction('searchResults', 'readwrite');
  await tx.store.add(searchResult);
  await tx.done;
}

async function getSearchResult(word: string) {
  const tx = indexedDB.transaction('searchResults', 'readonly');
  const searchResult = await tx.store.get(word);
  await tx.done;
  return searchResult || null;
}

async function getSearchHistory() {
  const tx = indexedDB.transaction('searchResults', 'readonly');
  const searchHistory = await tx.store.getAll();
  await tx.done;

  // Sort the searchHistory array by timestamp (desc)
  searchHistory.sort((a, b) => b.timestamp - a.timestamp);

  return searchHistory;
}

export { indexedDB, addSearchResult, getSearchResult, getSearchHistory };
