import { useState } from "react";

const BooksEdit = ({book, onSubmit}) => {
    const [editTitle, setEditTitle] = useState(book.title);

    const handleChange = (event) => {
        setEditTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Gets new title from the App component prop w/ book id
       onSubmit(book.id, editTitle)
    }

    return(
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Book Title</label>
            <input className="input" value={editTitle} onChange={handleChange} />
            <button className="button is-primary">Save Book</button>
        </form>
    );
};


export default BooksEdit;