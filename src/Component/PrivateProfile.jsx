import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from 'lottie-react';
import bookLoading from '../Lottie/book-loading.json'


const PrivateProfile = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
    if(loading){
        return <div className='mx-auto my-32 w-52'><Lottie className='' animationData={bookLoading}/> </div>
    }
    if(user){
        return children
    }
    
    return (
        <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    );
};

export default PrivateProfile;