import Header from './components/layout/Header.tsx';
import SearchInput from './components/search/SearchInput.tsx';
import SearchResult from './components/search/SearchResult.tsx';
import type { SearchResult as SearchResultType } from './types.ts';

const dummyResults: SearchResultType = {
  word: 'development',
  definitions: [
    {
      partOfSpeech: 'Verb',
      ipa: 'di-ˈve-ləp-mənt',
      audio: 'https://audios.com',
      meanings: [
        'to set down in writing or the like, as for the purpose of preserving evidence.',
        'to set down in writing or the like, as for the purpose of preserving evidence.',
        'to set down in writing or the like, as for the purpose of preserving evidence.',
      ],
    },
  ],
};

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="mt-10 flex justify-center px-10 md:mt-24">
          <SearchInput onSearch={(e) => alert(e)} />
        </div>

        <SearchResult searchResult={dummyResults} />
      </main>
    </>
  );
}

export default App;
