import moment from 'moment/moment';
import React from 'react';

const PaymentHistoryTable = ({item, index}) => {

    const {transectionId, date, amount } = item; 
    const formattedDate = moment(date).format("YYYY-MM-DD HH:mm:ss")
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{transectionId}</td>
        <td>${amount}</td>
        <td>{formattedDate}</td>
      </tr>
    );
};

export default PaymentHistoryTable;