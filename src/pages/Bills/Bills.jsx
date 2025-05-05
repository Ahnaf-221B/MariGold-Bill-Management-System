import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BillCard from '../BillsCard/BillsCard'; // Import BillCard component

const Bills = () => {
  const bills = useLoaderData(); // Fetch the data using the loader

  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Your Bills</h2>

        {/* Table Layout */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className=''>
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Icon</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Organization</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Bill Type</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Amount</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Due Date</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="border-t">
                  <td className="py-3 px-4">
                    <img src={bill.icon} alt={bill.organization} className="w-12 h-12 object-contain" />
                  </td>
                  <td className="py-3 px-4 text-blue-800">{bill.organization}</td>
                  <td className="py-3 px-4">{bill.bill_type}</td>
                  <td className="py-3 px-4 font-bold text-gray-800">${bill.amount}</td>
                  <td className="py-3 px-4 text-gray-500">{new Date(bill["due-date"]).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => alert(`Details for ${bill.organization}`)}
                    >
                      See Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bills;
 