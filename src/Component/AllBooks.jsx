import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const AllBooks = () => {

    // state for the all books 
    const [books, setBooks] = useState([])
    useEffect(() => {
        
        axios.get("https://assignment-11-ph-server.vercel.app/all-books",{withCredentials:true})
        .then(res=>setBooks(res.data))
    }, [])
    const handleFilter = e => {
        e.preventDefault();
        const newBook = books.filter(book => book.quantity > 0)
        setBooks(newBook)
    }

    // state for toggle functionality
    const [isClicked, setIsClicked] = useState(true)
    const handleToggle = e => {
        e.preventDefault();
        e.target.value == "Card" ? setIsClicked(true) : setIsClicked(false)
    }
    return (
        <div>
            <Helmet>
                <title>All-Books | E-Library</title>
            </Helmet>
            <div className='w-11/12 mx-auto mt-10 flex flex-col md:flex-row justify-between gap-5'>
                <button onClick={handleFilter} className='btn btn-ghost bg-sky-300 rounded-none text-xl px-10 '>Show Available Books</button>
                <select onChange={handleToggle} className='btn btn-ghost bg-sky-300 rounded-none text-xl px-10' defaultValue={"view"} id="">
                    <option value="view" disabled>View Functionality</option>
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>
            </div>

            <div>
                {

                    isClicked
                        ?
                        <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
                            {
                                books.map((book, idx) => <BookCard book={book} key={idx}></BookCard>)
                            }
                        </div>
                        :
                        <div>





                            <div className="overflow-x-auto w-11/12 mx-auto my-10">
                                <table className="table text-base">
                                    {/* head */}
                                    <thead className='text-lg'>
                                        <tr>
                                            <th></th>
                                            <th>Book</th>
                                            <th>Author</th>
                                            <th>Available</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            books.map((book,idx) =>
                                                <tr>
                                                    <th>
                                                        {idx + 1}
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={book.Image}
                                                                        alt="" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{book.Name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {book.AName}
                                                    </td>
                                                    <td>{book.quantity} pcs</td>
                                                    <th>
                                                    <Link to={`/book-update/${book._id}`}><button className="btn btn-ghost bg-sky-300">Update</button></Link>
                                                    </th>
                                                </tr>
                                            )
                                        }

                                    </tbody>

                                </table>
                            </div>




                        </div>
                }
            </div>
        </div>
    );
};

export default AllBooks;