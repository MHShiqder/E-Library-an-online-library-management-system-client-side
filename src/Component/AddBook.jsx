import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AddBook = () => {
    const { user } = useContext(AuthContext)
    const contributor = user.email;
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleTypes = (e) => {
        setSelectedCategory(e.target.value);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Image = form.Image.value
        const Name = form.Name.value
        const AName = form.AName.value
        const Description = form.Description.value
        const Content = form.Content.value
        const ratings = parseInt(form.ratings.value)
        const quantity = parseInt(form.quantity.value)
        

        const formDocument = { Image, Name, selectedCategory, Description, contributor,quantity,ratings,AName,Content }
        // console.log(formDocument)
        axios.post("http://localhost:5000/add-books",formDocument)
            
            .then(res => {
                console.log(res.data)
                toast.success("Added the Book successfully")
            })
            form.reset();
    }
    return (
        <div className="w-11/12 mx-auto my-10 text-center">
            <h2 className="font-bold text-5xl mb-5">Add Book</h2>
            <form onSubmit={handleSubmit}>


                {/* form row 1 */}
                <div className="flex flex-col sm:flex-row  gap-5">
                    {/* image  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="Image" placeholder="Image link" className="input input-bordered" required />
                    </div>

                    {/* book name  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="Name" placeholder="Name of The Book" className="input input-bordered" required />
                    </div>
                </div>


                {/* new div  */}
                <div className="flex flex-col sm:flex-row  gap-5">
                    {/* quantity  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="AName" placeholder="Name of The Book Author" className="input input-bordered" required />
                    </div>
                </div>

                {/* new div 2 */}
                <div className="flex flex-col sm:flex-row  gap-5">
                    {/* category  */}
                    <div className="form-control w-full relative">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <img className="w-5 h-5 absolute right-3 bottom-4" src="https://cdn-icons-png.flaticon.com/128/9297/9297089.png" alt="" />
                        <select onChange={handleTypes} defaultValue={"category"} name="Types" id=""
                            className="input input-bordered">
                            <option value="category" disabled>--Category--</option>
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
                        <input type="number" name="ratings" placeholder="Books Rating" className="input input-bordered" required />
                    </div>


                </div>
                {/* description part */}
                <div className="flex flex-col sm:flex-row  gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name="Description" placeholder="Put the description" className="input input-bordered h-28" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Book Content</span>
                        </label>
                        <textarea type="text" name="Content" placeholder="Put the Book Content" className="input input-bordered h-28" required />
                    </div>
                </div>

                <div>
                    <button className="btn btn-block mt-5 bg-sky-500 text-white hover:bg-sky-700">Add</button>

                </div>

            </form >
        </div >
    );
};


export default AddBook;