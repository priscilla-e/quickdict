import Header from "./components/layout/Header.tsx";
import SearchInput from "./components/search/SearchInput.tsx";
import Definition from './components/definition/Definition.tsx';
import type { Definition as DefinitionType } from "./types.ts";

const dummyDefinitions: DefinitionType[] = [];

function App() {
  
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center px-10 mt-10 md:mt-24">
          <SearchInput onSearch={(e) => alert(e)}/>
        </div>

        <Definition definitions={dummyDefinitions} />
      </main>
    </>
  );
}

export default App;
