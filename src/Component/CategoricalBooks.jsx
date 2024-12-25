import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoricalBookCard from './CategoricalBookCard';

const CategoricalBooks = () => {
    const {category} = useParams();
    const data = useLoaderData()
    const [books, setBooks] = useState(data)

    return (
        <div className='my-10 text-center'>

            <h1 className='text-5xl font-bold'>{category}</h1>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                {
                    books.map((book, idx) => <CategoricalBookCard book={book} key={idx}></CategoricalBookCard>)
                }
            </div>
        </div>
    );
};

export default CategoricalBooks;