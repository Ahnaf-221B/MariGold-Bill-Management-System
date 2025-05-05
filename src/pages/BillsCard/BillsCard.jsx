import React from 'react';
import { Link } from 'react-router-dom';

const BillCard = ({ bill }) => {
  return (
    <tr className="border-t">
      <td className="py-3 px-4">
        <img src={bill.icon} alt={bill.organization} className="w-12 h-12 mx-auto object-contain" />
      </td>
      <td className="py-3 px-4 text-blue-800">{bill.organization}</td>
      <td className="py-3 px-4">{bill.bill_type}</td>
      <td className="py-3 px-4 font-bold text-gray-800">${bill.amount}</td>
      
      <td className="py-3 px-4">
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          to={`/billsdetails/${bill.id}`}
        >
          See Details
        </Link>
      </td>
    </tr>
  );
};

export default BillCard;
