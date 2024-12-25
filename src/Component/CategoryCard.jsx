import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    const categories = ["Drama", "History", "Thriller", "Novel"]
    return (
        <div>
<h1 className='text-5xl font-bold mt-10 mb-5 text-center'>Categories of Books</h1>
        <div className='my-10 grid md:grid-cols-2 gap-5 w-11/12 mx-auto'>
            
            {
                categories.map((category,idx) => {
                    return <Link key={idx} to={`/categorical-book/${category}`}>
                        <div className='bg-sky-300 p-10'>
                            <h1 className='text-3xl font-bold'>{category}</h1>
                        </div>
                    </Link>
                })
            }
        </div>
        </div>

    );
};

export default CategoryCard;