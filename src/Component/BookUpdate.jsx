import React from 'react';
import { useParams } from 'react-router-dom';

const BookUpdate = () => {
    const id=useParams();
    console.log(id)
    return (
        <div>
            Book Update
        </div>
    );
};

export default BookUpdate;