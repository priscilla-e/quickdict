import Header from "./components/layout/Header.tsx";
import SearchInput from "./components/search/SearchInput.tsx";
import SearchResult from './components/search/SearchResult.tsx';
import type { SearchResult, Definition } from "./types.ts";

const dummyDefinitions: DefinitionType[] = [
  // { word: 'Development',
  //   partOfSpeech: 'Verb',
  //   ipa?: 'di-ˈve-ləp-mənt',
  //   audio?: 'https://audios.com',
  //   meanings: ['']}
];

function App() {
  
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center px-10 mt-10 md:mt-24">
          <SearchInput onSearch={(e) => alert(e)}/>
        </div>

        <SearchResult definitions={dummyDefinitions} />
      </main>
    </>
  );
}

export default App;
