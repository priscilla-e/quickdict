import Header from "./components/layout/Header.tsx";
import SearchInput from "./components/search/SearchInput.tsx";
import Definition from './components/definition/Definition.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center px-10 mt-10 md:mt-24">
          <SearchInput onSearch={(e) => alert(e)}/>
        </div>
        
        <Definition />
      </main>
    </>
  );
}

export default App;
