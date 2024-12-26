import React, { useContext, useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const [recentlyBorrowed,setRecentlyBorrowed]=useState(false)
    const {user}=useContext(AuthContext)
    // Load the borrowed books 
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(`https://assignment-11-ph-server.vercel.app/book-borrow/${user.email}`,{withCredentials:true})
            .then(res => {
                setBooks(res.data)
            })
    }, [])

    
    // destructuring the selected book for details 
    const { _id, Image, Name, selectedCategory, Description, quantity, ratings, AName, Content } = useLoaderData();
    const [quantity2,setQuantity2]=useState(quantity)
    
    // is the book already borrowed? 
    const alreadyBorrowed=books.find(book=>book.bookId==_id)

    // form submit function 
    const handleSubmit=e=>{
        e.preventDefault();
        const returnDate=e.target.date.value;
        const userName=user?.displayName;
        const userEmail=user?.email;
        const bookId=_id;
        const borrowDate=new Date().toISOString().split("T")[0];
        const borrowData={userEmail,userName,Image, Name, selectedCategory, Description, quantity2, ratings, AName, Content,returnDate,bookId,borrowDate}
        axios.post("https://assignment-11-ph-server.vercel.app/book-borrow",borrowData)
        .then(res=>{
            setQuantity2(quantity2-1)
            setRecentlyBorrowed(true)
            // console.log(res.data)
            toast.success(`Successfully Borrowed ${Name} `)
        })

        document.getElementById(`my_modal_${_id}`).close()
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <Helmet>
                <title>Book-Details | E-Library</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-2xl rounded-l-none">
                <figure className='lg:w-1/3 p-5  '>
                    <img className='h-96 lg:h-full'
                        src={Image}
                        alt="Album" />
                </figure>
                <div className="card-body lg:w-2/3 ">
                    <h2 className="card-title mb-10 font-bold text-5xl text-sky-600">{Name}</h2>
                    <p className='text-xl'><span className='font-semibold  '>Author:</span> {AName}</p>
                    <p className='text-xl'><span className='font-semibold'>Category:</span> {selectedCategory}</p>
                    <p className='text-xl'><span className='font-semibold'>Available:</span> {quantity2} pcs</p>
                    <p className='text-xl'><span className='font-semibold'>Description:</span> {Description}</p>
                    <p className='text-xl'><span className='font-semibold'>Content:</span> {Content}</p>
                    <p className='mb-2 flex items-center text-xl'>
                        <span className='font-semibold'>Rating:-</span>
                        <ReactStars
                            edit={false}
                            value={ratings}
                            size={30}
                            activeColor="#ffd700"
                        />
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="btn btn-ghost bg-sky-300 rounded-sm min-h-0 h-auto py-2 px-5 text-base" disabled={!quantity2||alreadyBorrowed||recentlyBorrowed}>Borrow</button>
                    </div>
                </div>
            </div>

            {/* modal part  */}
            <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Book Borrow Form!</h3>
                    <form onSubmit={handleSubmit} >
                        {/* name field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.displayName} className='input input-bordered' readOnly />
                        </div>

                        {/* email field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} className='input input-bordered' readOnly />
                        </div>

                        {/* date field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Return Date</span>
                            </label>
                            <input type="date" name='date' className='input input-bordered' min={new Date().toISOString().split("T")[0]} required/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-sky-500 text-white hover:bg-sky-700">Borrow</button>
                        </div>
                    </form>
                    <div className="">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-block mt-3 bg-red-500 text-white hover:bg-red-700">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default BookDetails;