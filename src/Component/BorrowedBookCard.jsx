import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const BorrowedBookCard = ({ book, books, setBooks }) => {
    const {bookId, Image, Name, selectedCategory, AName, returnDate, borrowDate,userName } = book;


    // return functionality 

    const handleReturn=e=>{
        e.preventDefault()
        axios.delete(`https://assignment-11-ph-server.vercel.app/book-return/${bookId}`)
        .then(res=>{
            toast.success("The book is returned successfully")
            const newBookList=books.filter(book=>book.bookId!=bookId)
            setBooks(newBookList)
        })
    }


    return (
        <div>
            <div className="card bg-base-100  shadow-xl rounded-none">
                <figure>
                    <img
                        className='h-72 w-52 lg:w-full'
                        src={Image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-5  items-start  gap-0">
                    <h2 className="card-title">{Name}</h2>
                    <p className=''><span className='font-semibold'>Author:</span> {AName}</p>
                    <p className=''><span className='font-semibold'>Category:</span> {selectedCategory}</p>
                    <p className=''><span className='font-semibold'>Borrowed Date:</span> {borrowDate}</p>
                    <p className='flex '><span className='font-semibold'>Borrowed_By: </span>  {userName}</p>
                    <p className=''><span className='font-semibold'>Return Date:</span> {returnDate}</p>

                    <div className=" justify-center btn-block mt-3">
                        <button onClick={handleReturn} className="btn btn-block rounded-none bg-sky-300 text-base ">Return</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBookCard;