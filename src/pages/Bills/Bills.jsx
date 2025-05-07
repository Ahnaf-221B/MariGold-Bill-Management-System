import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import BillCard from "../BillsCard/BillsCard"; // Import BillCard component
import { AuthContext } from "../../provider/AuthContext";

const Bills = () => {
  const bills = useLoaderData(); // Fetch the data using the loader
  const { user } = useContext(AuthContext); // Access user context

  const location = useLocation();
  const [filteredBills, setFilteredBills] = useState(bills);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const billType = queryParams.get('billType') || 'all';
    
    if (billType === 'all') {
      setFilteredBills(bills);
    } else {
      const filtered = bills.filter(bill => bill.bill_type.toLowerCase() === billType.toLowerCase());
      setFilteredBills(filtered);
    }
  }, [location.search, bills]);

  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Your Bills</h2>

        {/* Card Layout (Single Column for Mobile, Grid for Tablet/PC) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredBills.map((bill) => (
            <BillCard key={bill.id} bill={bill} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bills;
