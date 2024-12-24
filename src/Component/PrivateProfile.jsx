import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateProfile = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation();
    if(loading){
        return <div className="text-center my-40 "><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
    
    return (
        <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    );
};

export default PrivateProfile;