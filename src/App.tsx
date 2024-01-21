import { useEffect, useState } from 'react';
import Header from './components/layout/Header.tsx';
import SearchInput from './components/search/SearchInput.tsx';
import SearchResult from './components/search/SearchResult.tsx';
import NoResult from './components/search/NoResult.tsx';
import type { SearchResult as SearchResultType } from './types.ts';
import {
  cacheToFirebase,
  fetchFromFirebase,
  fetchFromAPI,
  getRandomWord,
} from './utils';

function App() {
  const [searchResult, setSearchResult] = useState<SearchResultType | null>(
    null
  );

  // useEffect(() => {
  //   // TODO: Display user's last search else random word
  //   handleSearh(getRandomWord());
  // }, []);

  const handleSearh = async (searchTerm: string) => {
    // Fetch word from local storage
    const localStorageRes = localStorage.getItem(searchTerm);
    if (localStorageRes) {
      console.log('Local storage!', localStorageRes);
      setSearchResult(JSON.parse(localStorageRes) as SearchResultType);
      return;
    }

    // If not found, fetch from Cache Database (Firebase)
    const firebaseRes = await fetchFromFirebase(searchTerm);
    if (firebaseRes) {
      console.log('Firebase!', firebaseRes);
      setSearchResult(firebaseRes);

      // Cache this res to the user's storage so we retrieve from there next time
      localStorage.setItem(searchTerm, JSON.stringify(firebaseRes));
      return;
    }

    // If not found, fetch from API
    const apiRes = await fetchFromAPI(searchTerm);
    if (apiRes) {
      console.log('API!', apiRes);
      setSearchResult(apiRes);

      // Cache to firebase to and user's localStorage
      cacheToFirebase(apiRes);
      localStorage.setItem(searchTerm, JSON.stringify(apiRes));
      return;
    }

    // No Result Found!
    setSearchResult(null);
    alert(searchTerm);
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
    </>
  );
}

export default App;
