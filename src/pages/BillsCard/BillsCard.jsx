import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon from react-icons

const BillCard = ({ bill, user }) => {
  const isPaid = localStorage.getItem(`bill_${user?.uid}_${bill.id}_paid`);

  return (
    <tr className="border-t ">
      <td className="py-3 px-4 text-center sm:text-left ">
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src={bill.icon}
            alt={bill.organization}
            className="w-12 h-12 mx-auto object-contain"
          />
        </div>
      </td>

      <td className="py-3 px-4 text-blue-800  text-center sm:text-left">
        <div className="text-center">{bill.organization}</div>
      </td>

      <td className="py-3 px-4 text-center sm:text-left">
        <div className="text-center">{bill.bill_type}</div>
      </td>

      <td className="py-3 px-4 font-bold text-gray-800 text-center sm:text-left">
        <div className="text-center">${bill.amount}</div>
      </td>

      <td className="py-3 px-4 font-bold text-gray-800 text-center sm:text-left">
      
              <div className="text-center"> {new Date(bill.due_date).toLocaleDateString()}</div>
             
           
      </td>

      <td className="items-center text-center sm:text-left flex md:mt-5 justify-center">
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          to={`/billsdetails/${bill.id}`}
        >
          See Details
        </Link>
      </td>

      <td className="py-3 px-4 text-center sm:text-left items-center justify-center">
        <div className=" justify-center flex">
           {isPaid && (
         
            <span role="img" aria-label="tick" className="text-green-500 ">
            <FaCheckCircle   size={20} />
          </span>
         
          
        )}
        </div>
       
      </td>
    </tr>
  );
};

export default BillCard;
