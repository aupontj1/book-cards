import BooksShow from "./BooksShow";

const BooksList = ({books, onDelete, onEdit}) => {

    const renderedBooks = books.map((book) => {
        return <BooksShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    });

    return(
        <div className="book-list">
            {renderedBooks}
        </div>

    );
};


export default BooksList;