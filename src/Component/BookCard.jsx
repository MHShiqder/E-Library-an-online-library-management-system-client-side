import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const {_id, Image, Name, selectedCategory, Description, contributor, quantity, ratings, AName, Content } = book;
    // console.log(_id)
    return (
        <div>
            <div className="card bg-base-100  shadow-xl rounded-none">
                <figure>
                    <img
                        className='h-72 w-52 lg:w-full'
                        src={Image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-5  items-center text-center gap-0">
                    <h2 className="card-title">{Name}</h2>
                    <p className=''><span className='font-semibold'>Author:</span> {AName}</p>
                    <p className='mb-2'><span className='font-semibold'>Available:</span> {quantity} pcs</p>
                    <div className="card-actions justify-center ">
                        <Link to={`/book-update/${_id}`}><button className="btn btn-ghost bg-sky-300">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;