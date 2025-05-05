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
          <table className="min-w-full bg-white shadow-md rounded-lg text-center">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Icon</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Organization</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Bill Type</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Amount</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bills.map((bill) => (
                <BillCard key={bill.id} bill={bill} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bills;
