import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
    const navigate=useNavigate()
    const {user,userSignOut}=useContext(AuthContext)
    const links = <>

        <NavLink className="sm:text-base btn btn-ghost font-semibold mr-0" to="/">Home</NavLink>
        <NavLink className="sm:text-base btn btn-ghost font-semibold mr-0" to="/all-books">All Books</NavLink>
        {
            user?
            <>
            <NavLink className="sm:text-base btn btn-ghost font-semibold mr-0" to="/add-book">Add Book</NavLink>
            <NavLink className="sm:text-base btn btn-ghost font-semibold mr-0" to="/borrowed-books">Borrowed Books</NavLink>
            </>
            :
            <>
            </>
        }
        <NavLink className="sm:text-base btn btn-ghost font-semibold mr-0" to="/about-us">About Us</NavLink>
               
    </>

    const handleSignOut=()=>{
        userSignOut()
        .then(()=>{
            toast.success("Logged out Successfully")
            navigate("/")
        })

    }
    
    return (
        <div className=" text-white sticky top-0 z-50">
            

            <div className="main-header bg-[#eab64f] ">
                <div className="navbar w-11/12 mx-auto p-0">
                    <div className="navbar-start md:w-1/2 w-2/3">
                        <div className="dropdown text-black">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link to="/">
                        <h1 className="text-2xl sm:text-4xl  font-bold border-4 border-white px-2 py-1">E-Library</h1>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end   w-1/3 md:w-1/2">
                        {
                            user
                            ?<div className=" flex group hover:bg-sky-300 absolute flex-col pt-1 hover:border-2 hover:border-t-0 hover:border-white top-1 p-3 pr-0  hover:right-4 gap-2 items-center  my-auto mr-0 ">
                                <img className="w-12 h-12 rounded-full object-cover  " src={`${user.photoURL}`} alt="" />
                                <h2 className="text-black hidden group-hover:block font-bold">{user.displayName}</h2>
                                <Link to="/profile-edit" className="border-2 px-3 py-1 text-sm border-white text-black hidden group-hover:block"><button >Edit Profile</button></Link>
                                <button onClick={handleSignOut} className="hidden group-hover:block btn bg-white  rounded-none top-14 hover:bg-slate-100 py-2  h-auto min-h-0">Logout</button>
                            </div>
                            :<div className="sm:space-x-2">
                                <Link to="/login" className="btn btn-ghost">Login</Link>
                                <Link to="/register" className="btn btn-ghost">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Header;