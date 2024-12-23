import {createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Layout/Home";
import Register from "../Component/Register";

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
        ]
    },
]);