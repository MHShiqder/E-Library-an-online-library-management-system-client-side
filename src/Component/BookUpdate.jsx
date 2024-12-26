import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const BookUpdate = () => {
    const navigate=useNavigate()
    const { Image, Name, selectedCategory, ratings, AName } = useLoaderData()
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const contributor = user.email;
    const [selectedCategory2, setSelectedCategory2] = useState("");
    const handleTypes = (e) => {
        setSelectedCategory2(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Image = form.Image.value
        const Name = form.Name.value
        const AName = form.AName.value
        const ratings = parseInt(form.ratings.value)


        const formDocument = { Image, Name, selectedCategory2, contributor, ratings, AName }
        // console.log(formDocument)
        axios.put(`https://assignment-11-ph-server.vercel.app/update-books/${id}`, formDocument,{withCredentials:true})

            .then(res => {
                console.log(res.data)
                toast.success("Updated the information successfully")
            })
        navigate("/all-books")  
    }
    return (
        <div className="p-10 shadow-2xl mx-auto my-10 text-center w-96">
            <Helmet>
                <title>Update Info | E-Library</title>
            </Helmet>
            <h2 className="font-bold text-5xl mb-5">Update Info</h2>
            <form onSubmit={handleSubmit}>


                {/* form row 1 */}
                {/* image  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input defaultValue={Image} type="text" name="Image" placeholder="Image link" className="input input-bordered" required />
                </div>

                {/* book name  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input defaultValue={Name} type="text" name="Name" placeholder="Name of The Book" className="input input-bordered" required />
                </div>


                {/* new div  */}
                {/* Author name  */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input defaultValue={AName} type="text" name="AName" placeholder="Name of The Book Author" className="input input-bordered" required />
                </div>

                {/* new div 2 */}
                {/* category  */}
                <div className="form-control w-full relative">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <img className="w-5 h-5 absolute right-3 bottom-4" src="https://cdn-icons-png.flaticon.com/128/9297/9297089.png" alt="" />
                    <select onChange={handleTypes} defaultValue={selectedCategory} name="Types" id=""
                        className="input input-bordered">
                        <option value="Drama">Drama</option>
                        <option value="History">History</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Novel">Novel</option>
                    </select>
                </div>

                {/* ratings  */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input defaultValue={ratings} type="number" name="ratings" placeholder="Books Rating" className="input input-bordered" required />
                </div>


                <div>
                    <button className="btn btn-block mt-5 bg-sky-500 text-white hover:bg-sky-700">Submit</button>

                </div>

            </form >
        </div >
    );
};

export default BookUpdate;