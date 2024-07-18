import { useState } from "react";

const BooksCreate = ({onCreate}) => {
    // Grabs the title from the form 
    const [title, setTitle] = useState('');

    // Handles the text inside the input 
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    // Handles the form element functionality
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