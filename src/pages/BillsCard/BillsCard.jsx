import React from "react";

const BillCard = ({ bill }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-3 px-4 text-center font-semibold text-blue-700">
              Icon
            </th>
            <th className="py-3 px-4 text-center font-semibold text-blue-700">
              Organization
            </th>
            <th className="py-3 px-4 text-center font-semibold text-blue-700">
              Bill Type
            </th>
            <th className="py-3 px-4 text-center font-semibold text-blue-700">
              Amount
            </th>
            <th className="py-3 px-4 text-center font-semibold text-blue-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-3 px-4">
              <img
                src={bill.icon}
                alt={bill.organization}
                className="w-12 h-12 object-contain"
              />
            </td>
            <td className="py-3 px-4 text-blue-800">{bill.organization}</td>
            <td className="py-3 px-4">{bill.bill_type}</td>
            <td className="py-3 px-4 font-bold text-gray-800">${bill.amount}</td>
            <td className="py-3 px-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => alert(`Details for ${bill.organization}`)}
              >
                See Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillCard;
