import BooksShow from "./BooksShow";

const BooksList = ({books}) => {

    const renderedBooks = books.map((book) => {
        return <BooksShow key={book.id} book={book} />
    });

    return(

        <div className="book-list">
            {renderedBooks}
        </div>

    );
};


export default BooksList;