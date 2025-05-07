import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext"; // Import useAuth to access balance

const BillDetails = () => {
  const bills = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const { balance, updateBalance, user } = useContext(AuthContext);

  const bill = bills.find((bill) => bill.id === parseInt(id));

  const [isPaid, setIsPaid] = useState(bill.paid || false);

  // Check if the bill is already paid for the current user
  useEffect(() => {
    if (localStorage.getItem(`bill_${user?.uid}_${bill.id}_paid`)) {
      setIsPaid(true);
    }
  }, [bill.id, user?.uid]);

  // Handle payment and redirect
  const handlePayment = () => {
    if (isPaid) {
      alert("This bill has already been paid.");
      return;
    }

    // Ensure that the balance is sufficient to pay the bill
    if (balance >= bill.amount) {
      // Deduct the amount from the balance
      updateBalance(bill.amount);
      
      // Mark the bill as paid
      setIsPaid(true);

      // Store the payment status in localStorage
      localStorage.setItem(`bill_${user.uid}_${bill.id}_paid`, true);

      setTimeout(() => {
        navigate("/bills");
      }, 1000);
    } else {
      alert("Insufficient balance to pay this bill.");
    }
  };

  return (
    <section className="py-12 px-6 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Bill Details</h2>

        <div className="bg-white p-8 shadow-xl rounded-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="relative w-40 h-40 rounded-lg flex items-center justify-center p-2 ml-20">
            <img
              src={bill.icon}
              alt={bill.organization}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute mt-25 ml-60">
            <img className="w-8 h-8 md:w-10 md:h-10  md:mr-[700px] md:mt-[60px]" src={bill.icon1} alt="" />
          </div>
          <div className="w-1/3 text-left space-y-4">
            <h3 className="text-2xl font-semibold">
              <span className="font-bold text-blue-700">Organization: </span>
              {bill.organization}
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              <span className="font-bold text-blue-700">Bill Type: </span>
              {bill.bill_type} Bill
            </p>
            <p className="text-xl font-semibold text-gray-700">
              <span className="font-bold text-blue-700">Amount: </span>${bill.amount}
            </p>
            <p className="font-semibold text-xl">
              <span className="font-bold text-blue-700">Due Date: </span>
              {new Date(bill.due_date).toLocaleDateString()}
            </p>

            {/* Pay Bill Button */}
            <button
              onClick={handlePayment}
              className={`px-4 py-2 ${isPaid ? 'bg-green-600 cursor-not-allowed' : 'bg-green-600'} text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out`}
              disabled={isPaid}
            >
              {isPaid ? 'Paid' : 'Pay Bill'}
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
