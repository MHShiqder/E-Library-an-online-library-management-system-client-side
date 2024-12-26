import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import BorrowedBookCard from './BorrowedBookCard';
import { AuthContext } from '../provider/AuthProvider';

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext)
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/book-borrow/${user.email}`)
            .then(res => {
                setBooks(res.data)
            })
    }, [])
    return (
        <div>
            {
                books.length < 1 ? <div className='text-center my-32'><h1 className='text-5xl font-bold'>No books borrowed </h1></div> :
                    <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                        {
                            books.map((book, idx) => <BorrowedBookCard books={books} setBooks={setBooks} book={book} key={idx}></BorrowedBookCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default BorrowedBooks;