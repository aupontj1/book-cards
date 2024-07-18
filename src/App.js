import BooksCreate from "./comps/BooksCreate";
import BooksList from "./comps/BooksList";
import { useState } from "react";


function App() {
  const [books, setBooks] = useState([]);

  // Edits the book with the id specificity of each book
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return {...book, title: newTitle};
      }

      // else return book as normal
      return book;
    });

    // Rerender book w/ setBooks func to the updatedBooks
    setBooks(updatedBooks);
  };

  // Deletes the book with the id specificity of each book
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    // Rerender book w/ setBooks func to the updatedBooks
    setBooks(updatedBooks);
  }

  // Creates the book with name of title from BookCreate comp, & adds it to the existing lists of books (on the end) 
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999), 
        title
      }
    ];

    // Rerender book w/ setBooks func to the updatedBooks
    setBooks(updatedBooks);
    console.log(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Book Reading List</h1>
      <BooksList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BooksCreate onCreate={createBook} />
    </div>
  );
}

export default App;
