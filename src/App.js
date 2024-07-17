import BooksCreate from "./comps/BooksCreate";
import BooksList from "./comps/BooksList";
import { useState } from "react";


function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999), 
        title
      }
    ]
    setBooks(updatedBooks);
    console.log(updatedBooks);
  }

  return (
    <div className="app">
      <BooksList books={books} />
      <BooksCreate onCreate={createBook} />
    </div>
  );
}

export default App;
