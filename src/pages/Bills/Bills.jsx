import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BillCard from '../BillsCard/BillsCard'; // Import BillCard component
import { AuthContext } from '../../provider/AuthContext';

const Bills = () => {
  const bills = useLoaderData(); // Fetch the data using the loader
  const { user } = useContext(AuthContext); // Access user context

  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Your Bills</h2>

        {/* Table Layout */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg  text-center">
            {/* Table Header */}
            <thead className="bg-blue-100 ">
              <tr>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Icon</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Organization</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Bill Type</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Amount</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Action</th>
                <th className="py-3 px-4 text-center font-semibold text-blue-700">Paid</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className='text-center justify-center items-center'>
              {bills.map((bill) => (
                <BillCard key={bill.id} bill={bill} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bills;
