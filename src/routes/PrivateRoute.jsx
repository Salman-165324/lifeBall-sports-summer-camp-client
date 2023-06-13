import React from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/utils/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth(); 
    const location = useLocation(); 

    if( loading){

        return <Spinner></Spinner>; 
    }

    if(user){

        return children; 
    }

    return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;