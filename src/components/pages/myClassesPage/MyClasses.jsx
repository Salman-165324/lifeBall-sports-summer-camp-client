import React from 'react';
import useAxiosInstance from '../../../hooks/useAxiosInstance';

const MyClasses = () => {
    const [axiosInstance] = useAxiosInstance(); 
    axiosInstance('/classes')
    .then( res => res.data)
    
    return (
        <div>
            <h1>This are Your Classes</h1>
        </div>
    );
};

export default MyClasses;