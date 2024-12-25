import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const AllBooks = () => {
    // const data=useLoaderData();
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/all-books")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    
    return (
        <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
            {
                books.map((book,idx)=><BookCard book={book} key={idx}></BookCard>)
            }
        </div>
    );
};

export default AllBooks;