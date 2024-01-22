import { useEffect, useState } from 'react';
import Header from './components/layout/Header.tsx';
import SearchInput from './components/search/SearchInput.tsx';
import SearchResult from './components/search/SearchResult.tsx';
import NoResult from './components/search/NoResult.tsx';
import Footer from './components/layout/Footer.tsx';
import type { SearchResult as SearchResultType } from './types.ts';
import {
  cacheToFirebase,
  fetchFromFirebase,
  fetchFromAPI,
  getRandomWord,
} from './utils';
import {
  addSearchResult,
  getSearchResult,
  getSearchHistory,
} from './indexedDBConfig.ts';

function App() {
  const [searchResult, setSearchResult] = useState<SearchResultType | null>(
    null
  );

  const [searchHistory, setSearchHistory] = useState<SearchResultType[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      const history = await getSearchHistory();
      setSearchHistory(history);

      // If history is empty, handle search with a random word
      if (history.length === 0) {
        const randomWord = getRandomWord();
        handleSearh(randomWord);
      } else {
        setSearchResult(history[0]);
      }
    }

    fetchHistory();
  }, []);

  console.log(searchHistory);
  
  const handleSearh = async (searchTerm: string) => {
    // Fetch from User's Local IndexedDB
    let res = await getSearchResult(searchTerm);

    if (!res) {
      // Not found in IndexedDB: Fetch from Firebase
      res = await fetchFromFirebase(searchTerm);

      if (!res) {
        // Not found in Firebase: Fetch from API
        res = await fetchFromAPI(searchTerm)
        
        if (res) {
          // Found in API: Cache to IndexedDB and Firebase
          addSearchResult(res);
          cacheToFirebase(res);
        }
        else {
          res = null
        }
      }
      else {
        // Found in Firebase: Cache to IndexedDB
        addSearchResult(res);
      }
    }

    setSearchResult(res);

    // Update search history 
    const history = await getSearchHistory()
    setSearchHistory(history)
  };


  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div className="mt-10 flex justify-center px-10 md:mt-24">
          <SearchInput onSearch={handleSearh} />
        </div>

        {searchResult ? (
          <SearchResult searchResult={searchResult} />
        ) : (
          <NoResult />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
