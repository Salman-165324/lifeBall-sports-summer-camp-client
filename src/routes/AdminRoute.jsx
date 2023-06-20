import React from 'react';
import useFindUserRole from '../hooks/useFindUserRole';
import Spinner from '../components/utils/Spinner';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const [userRole, roleDataLoading] = useFindUserRole();

    if( roleDataLoading){

        return <Spinner /> 
    }

    if(userRole === 'admin'){

        return children; 
    }

    return <Navigate to={"/"} />

};

export default AdminRoute;