import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import BorrowedBookCard from './BorrowedBookCard';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import bookLoading from '../Lottie/book-loading.json'

const BorrowedBooks = () => {
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [books, setBooks] = useState([])
    useEffect(() => {
        
        axios.get(`https://assignment-11-ph-server.vercel.app/book-borrow/${user.email}`, { withCredentials: true })
            .then(res => {
                setBooks(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Borrowed-Books | E-Library</title>
            </Helmet>
            {
                books.length < 1 ? <>{loading ?<div className='mx-auto my-32 w-52'><Lottie className='' animationData={bookLoading}/> </div> : <div className='text-center my-32'><h1 className='text-5xl font-bold'>No books borrowed </h1></div>}</> :
                    <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                        {
                            books.map((book, idx) => <BorrowedBookCard books={books} setBooks={setBooks} book={book} key={idx}></BorrowedBookCard>)
                        }
                    </div>
                    
            }
        </div>
    );
};


{/* <div className="text-center my-40 "><span className="loading loading-spinner loading-lg"></span></div> */}
export default BorrowedBooks;