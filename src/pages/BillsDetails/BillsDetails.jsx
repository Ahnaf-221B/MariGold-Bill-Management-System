import React from 'react';
import { useLoaderData, Link, useParams } from 'react-router-dom';

const BillDetails = () => {
  const bills = useLoaderData();
  const {id} = useParams();
  
  const bill = bills.find((bill) => bill.id === parseInt(id));

  return (
    <section className="py-12 px-6 bg-blue-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Bill Details</h2>

     
      <div className="bg-white p-8 shadow-xl rounded-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        
        <div className="relatve w-40 h-40 rounded-lg  flex items-center justify-center p-2 ml-20">
          <img
            src={bill.icon}
            alt={bill.organization}
            className="w-full h-full object-contain"
          />
          <img className='absolute w-10 h-10 relative mt-20 mr-700px]' src={bill.icon1} />
        </div>

      
        <div className="w-1/3 text-left space-y-4">
          <h3 className="text-2xl font-semibold "><span className='font-bold text-blue-700'>Organization : </span> {bill.organization}</h3>
          <p className="text-xl font-semibold text-gray-800"><span className='font-bold text-blue-700'>Bill Type : </span>  {bill.bill_type} Bill</p>
          <p className="text-xl font-semibold text-gray-700"><span className='font-bold text-blue-700'>Amount : </span>  ${bill.amount}</p>
          <p className="font-semibold text-xl"><span className='font-bold text-blue-700'>Due Date : </span>  {new Date(bill.due_date).toLocaleDateString()}</p>
        
       
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">
          Pay Bill
        </button>
      </div>
      </div>

     
     

      {/* Back Button */}
      <div className="mt-4 text-center">
        <Link to="/bills" className="text-blue-600 hover:text-blue-800">
          Back to Bills
        </Link>
      </div>
    </div>
  </section>
  );
};

export default BillDetails;
