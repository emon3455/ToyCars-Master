/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../authProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="h-60 w-full flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;