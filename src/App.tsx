import Header from "./components/layout/Header.tsx";
import SearchForm from "./components/ui/SearchForm.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center px-10 mt-10">
          <SearchForm onSearch={(e) => alert(e)}/>
        </div>
      </main>
    </>
  );
}

export default App;
