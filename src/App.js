import BooksCreate from "./comps/BooksCreate";
import BooksList from "./comps/BooksList";
import BooksShow from "./comps/BooksShow";
import BooksEdit from "./comps/BooksEdit";


function App() {
  return (
    <div className="App">
      <BooksCreate />
      <BooksList />
      <BooksShow />
      <BooksEdit />
    </div>
  );
}

export default App;
