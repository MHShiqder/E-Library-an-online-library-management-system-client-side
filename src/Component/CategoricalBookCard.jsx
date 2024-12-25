import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const CategoricalBookCard = ({ book }) => {
    const {_id, Image, Name, quantity, selectedCategory, ratings, AName } = book;

    return (
        <div>
            <div className="card bg-base-100  shadow-xl rounded-none">
                <figure>
                    <img
                        className='h-72 w-52 lg:w-full'
                        src={Image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-5 pl-10 items-start text-center gap-0">
                    <h2 className="card-title text-sky-600 font-bold">{Name}</h2>
                    <p className=''><span className='font-semibold'>Author:</span> {AName}</p>
                    <p className=''><span className='font-semibold'>Category:</span> {selectedCategory}</p>
                    <p className=''><span className='font-semibold'>Available:</span> {quantity} pcs</p>
                    <p className='mb-2 flex items-center'>
                        <span className='font-semibold'>Rating:-</span>
                        <ReactStars
                            edit={false}
                            value={ratings}
                            size={25}
                            activeColor="#ffd700"
                        />
                    </p>
                    <div className="card-actions justify-center ">
                        <Link to={`/book-details/${_id}`}><button className="btn btn-ghost bg-sky-300 rounded-sm px-5 py-2 h-auto min-h-0 text-base">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoricalBookCard;