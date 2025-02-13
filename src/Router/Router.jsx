import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Layout/Home";
import Register from "../Component/Register";
import Login from "../Component/Login";
import AllBooks from "../Component/AllBooks";
import AddBook from "../Component/AddBook";
import BorrowedBooks from "../Component/BorrowedBooks";
import PrivateProfile from "../Component/PrivateProfile";
import Forget from "../Component/Forget";
import BookUpdate from "../Component/BookUpdate";
import CategoricalBooks from "../Component/CategoricalBooks";
import BookDetails from "../Component/BookDetails";
import ProfileEdit from "../Component/ProfileEdit";
import AboutUs from "../Component/About Us/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/register",
                element:<Register></Register>,
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/forget",
                element:<Forget></Forget>,
            },
            {
                path:"/about-us",
                element:<AboutUs></AboutUs>,
            },
            {
                path:"/all-books",
                element:<PrivateProfile><AllBooks></AllBooks></PrivateProfile>,
                
            },
            {
                path:"/add-book",
                element:<PrivateProfile><AddBook></AddBook></PrivateProfile>,
            },
            {
                path:"/borrowed-books",
                element:<PrivateProfile><BorrowedBooks></BorrowedBooks></PrivateProfile>,
            },
            {
                path:"/book-update/:id",
                element:<PrivateProfile><BookUpdate></BookUpdate></PrivateProfile>,
                loader:({params})=>fetch(`https://assignment-11-ph-server.vercel.app/book-update/${params.id}`)
            },
            {
                path:"/categorical-book/:category",
                element:<PrivateProfile><CategoricalBooks></CategoricalBooks></PrivateProfile>,
                loader:({params})=>fetch(`https://assignment-11-ph-server.vercel.app/categorical-book/${params.category}`)
            },
            {
                path:"/book-details/:id",
                element:<PrivateProfile><BookDetails></BookDetails></PrivateProfile>,
                loader:({params})=>fetch(`https://assignment-11-ph-server.vercel.app/book-details/${params.id}`)
            },
            {
                path:"/profile-edit",
                element:<PrivateProfile><ProfileEdit></ProfileEdit></PrivateProfile>,
            },
        ]
    },
]);