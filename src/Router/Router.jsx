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
                path:"/all-books",
                element:<PrivateProfile><AllBooks></AllBooks></PrivateProfile>,
                loader:()=>fetch("http://localhost:5000/all-books"),
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
            },
        ]
    },
]);