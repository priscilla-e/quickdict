import Header from "./components/layout/Header.tsx";
import SearchInput from "./components/search/SearchInput.tsx";
import SearchOutput from "./components/search/SearchOutput.tsx"

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center px-10 mt-10 md:mt-24">
          <SearchInput onSearch={(e) => alert(e)}/>
        </div>
        <SearchOutput />
      </main>
    </>
  );
}

export default App;
