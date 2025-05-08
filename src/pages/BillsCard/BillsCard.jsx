import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon from react-icons

const BillCard = ({ bill, user }) => {
  const isPaid = localStorage.getItem(`bill_${user?.uid}_${bill.id}_paid`);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      {/* Bill Icon */}
      <img
        src={bill.icon}
        alt={bill.organization}
        className="w-20 h-20 object-contain"
      />
      <div>
        <img className="w-6 h-6 mt-[-45px] ml-[100px]" src={bill.icon1} alt="" />
      </div>

      {/* Bill Info */}
      <div className="text-center flex flex-col gap-y-3">
        <h3 className="text-xl font-semibold text-blue-800"><span className="font-semibold text-md">Organization : </span>{bill.organization}</h3>
        <p className="text-lg "><span className="font-semibold text-md">Bill Type : </span> {bill.bill_type}</p>
        <p className="text-xl font-bold "><span className="font-semibold text-md">Amount : </span>${bill.amount}</p>
        <p className="text-md  font-semibold">
          Due Date: {new Date(bill.due_date).toLocaleDateString()}
        </p>
      </div>

      {/* Action Button */}
      <Link
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        to={`/billsdetails/${bill.id}`}
      >
        See Details
      </Link>

      {/* Paid Status */}
      <div className="flex justify-center">
        {isPaid && (
          <span role="img" aria-label="tick" className="text-green-500">
            <FaCheckCircle size={20} />
          </span>
        )}
      </div>
    </div>
  );
};

export default BillCard;
