import { useState } from "react";
import BooksEdit from "./BooksEdit";

const BooksShow = ({book, onDelete, onEdit}) => {
    // State that helps show the form using boolean value
    const [editShow, setEditShow] = useState(false);

    const deleteClick = () => {
        onDelete(book.id)
    }

    const editClick = () => {
        setEditShow(!editShow)
    }

    /**
     event handler that handles both showing the edit to be false & 
     passing the props of id & newTitle for each book
     */ 
    const handleSubmit = (id, newTitle) => {
        setEditShow(false);
        onEdit(id, newTitle)
    }

    // Allows BookEdit comp to work & show the edited book title
    let bookContent = <h3>{book.title}</h3>;
    if(editShow) {
        bookContent = <BooksEdit book={book} onSubmit={handleSubmit} />
    }

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="books" />
            {bookContent}
            <div className="actions">
                <div className="edit" onClick={editClick}>
                    Edit
                </div>
                <div className="delete" onClick={deleteClick}>
                    Delete
                </div>
            </div>
        </div>

    );
};


export default BooksShow;