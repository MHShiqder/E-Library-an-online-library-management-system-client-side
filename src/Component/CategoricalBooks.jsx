import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoricalBooks = () => {
    const data = useLoaderData()
    const [books, setBooks] = useState(data)
    console.log(books)
    return (
        <div>
            {
                books.map(book => <h1>{book.Name}</h1>)
            }
        </div>
    );
};

export default CategoricalBooks;