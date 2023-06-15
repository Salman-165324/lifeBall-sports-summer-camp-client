import React from 'react';
import useCartData from '../../../hooks/useCartData';

const PaymentHistory = () => {
    const [cartData] = useCartData(); 
    console.log(cartData)
    return (
        <div>
            
        </div>
    );
};

export default PaymentHistory;