import { useState } from "react";

const BooksCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return(
        <div className="book-create">
            <h3 style={{ marginBottom: "10px"}}>Add A Book</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Click for Book</button>
            </form>
        </div>

    );
};


export default BooksCreate;