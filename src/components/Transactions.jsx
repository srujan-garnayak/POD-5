import React from 'react';
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";
import Navbar from './Navbar';

const transactions1 = [
  { id: 1, name: "Spotify", amount: -15.0, status: "Processing", date: "Wed 1:00pm", category: "Subscriptions" },
  { id: 2, name: "Alexa Doe", amount: 88.0, status: "Success", date: "Wed 2:45am", category: "Deposit" },
  { id: 3, name: "JSM Pro", amount: -18.99, status: "Processing", date: "Mon 1:10pm", category: "Subscriptions" },
  { id: 4, name: "Fresh F&V", amount: -88.0, status: "Success", date: "Tue 12:15pm", category: "Groceries" },
  { id: 5, name: "Figma", amount: -18.99, status: "Processing", date: "Tue 6:10pm", category: "Income" },
  { id: 6, name: "Sam Sulek", amount: -40.2, status: "Declined", date: "Tue 5:40am", category: "Food and Dining" },
  { id: 7, name: "PayPal Refund", amount: 25.0, status: "Success", date: "Thu 9:00am", category: "Refund" }
];

const transactions2 = [
  { id: 8, name: "Apple Music", amount: -9.99, status: "Success", date: "Thu 10:30am", category: "Subscriptions" },
  { id: 9, name: "Netflix", amount: -19.99, status: "Processing", date: "Thu 3:15pm", category: "Subscriptions" },
  { id: 10, name: "Uber", amount: -25.5, status: "Declined", date: "Fri 8:00pm", category: "Transport" },
  { id: 11, name: "John Doe", amount: 150.0, status: "Success", date: "Sat 9:45am", category: "Deposit" },
  { id: 12, name: "Steam", amount: -59.99, status: "Success", date: "Sat 7:30pm", category: "Entertainment" },
  { id: 13, name: "DoorDash", amount: -32.4, status: "Processing", date: "Sun 6:20pm", category: "Food and Dining" },
  { id: 14, name: "Lyft", amount: -18.75, status: "Success", date: "Sun 9:10pm", category: "Transport" }
];

const transactions3 = [
  { id: 15, name: "Adobe CC", amount: -52.99, status: "Success", date: "Mon 11:00am", category: "Software" },
  { id: 16, name: "Best Buy", amount: -129.99, status: "Declined", date: "Mon 4:30pm", category: "Electronics" },
  { id: 17, name: "Gym Membership", amount: -39.99, status: "Processing", date: "Tue 7:00am", category: "Fitness" },
  { id: 18, name: "Venmo Transfer", amount: 200.0, status: "Success", date: "Tue 3:20pm", category: "Income" },
  { id: 19, name: "Amazon", amount: -80.75, status: "Success", date: "Wed 5:45pm", category: "Shopping" },
  { id: 20, name: "Grocery Mart", amount: -45.2, status: "Processing", date: "Thu 8:10am", category: "Groceries" },
  { id: 21, name: "Starbucks", amount: -5.95, status: "Success", date: "Fri 7:30am", category: "Food and Dining" }
];

const bank1 = {
  name: "Chase Growth Savings Account",
  balance: "$1254.37",
  cardtype: "VISA",
  cardnumber: "9999",
  transactions: transactions1,
}

const bank2 = {
  name: "Wells Fargo Checking",
  balance: "$842.75",
  cardtype: "MASTERCARD",
  cardnumber: "1234",
  transactions: transactions2,
}

const bank3 = {
  name: "Bank of America Business",
  balance: "$601",
  cardtype: "AMEX",
  cardnumber: "5678",
  transactions: transactions3,
}

const TransactionHistory = () => {
  const [selectedBank, setSelectedAccount] = useState(bank1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className='flex w-full'>
      <Navbar/>
      
      <div className="p-4 w-full md:p-6 bg-[#1e2a3a]  min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold text-orange-600 mb-2 md:mb-6 mt-8 md:mt-0">Transaction History</h1>
            <p className="text-gray-400 text-sm md:text-base mb-4">View your recent transactions and account activity.</p>
          </div>
          
          
          <select 
            className="p-2 bg-white text-black rounded-lg shadow-md font-bold w-full md:w-auto"
            value={selectedBank.name}
            onChange={(e) => { 
              const selected = [bank1, bank2, bank3].find(bank => bank.name === e.target.value);
              setSelectedAccount(selected);
            }}
          >
            <option value="Chase Growth Savings Account">Chase Growth Savings Account</option>
            <option value="Wells Fargo Checking">Wells Fargo Checking</option>
            <option value="Bank of America Business">Bank of America Business</option>
          </select>
        </div>
        
        
        <div className="bg-orange-500 text-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div className='flex flex-col gap-2 md:gap-4 mb-4 md:mb-0'>
            <h2 className="text-2xl md:text-4xl font-bold">{selectedBank.cardtype}</h2>
            <p className="text-sm font-bold">{selectedBank.name}</p>
            <p className="text-base md:text-lg"><span className='text-xl md:text-3xl'>•••• •••• ••••</span> <span>{selectedBank.cardnumber}</span></p>
          </div>
          <div className="bg-white text-[#dc7a22] px-3 py-2 md:px-4 md:py-2 rounded-lg text-base md:text-lg font-bold shadow pt-3 pb-3 md:pt-5 md:pb-5">
            Current Balance: {selectedBank.balance}
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-white">Transaction History</h2>
          <button className="flex items-center justify-center bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300 w-full md:w-auto">
            <FaFilter className="mr-2" /> Apply Filter
          </button>
        </div>
        
        
        <div className="bg-gray-700 shadow-md rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-700 text-gray-200 uppercase text-xs md:text-sm">
              <tr>
                <th className="p-2 md:p-4 border border-gray-300">Transaction</th>
                <th className="p-2 md:p-4 border border-gray-300">Amount</th>
                <th className="p-2 md:p-4 border border-gray-300">Status</th>
                <th className="p-2 md:p-4 border border-gray-300">Date</th>
                <th className="p-2 md:p-4 border border-gray-300">Category</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-xs md:text-sm">
              {selectedBank.transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className={`border-b hover:border-2 ${
                    tx.status === "Success"
                      ? "bg-green-200"
                      : tx.status === "Processing"
                      ? "bg-gray-200"
                      : "bg-red-200"
                  }`}
                >
                  <td className="p-2 md:p-4 border border-gray-300 font-medium">{tx.name}</td>
                  <td className={`p-2 md:p-4 border border-gray-300 ${tx.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                    {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="p-2 md:p-4 border border-gray-300">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        tx.status === "Success"
                          ? "bg-green-100 text-green-600"
                          : tx.status === "Processing"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="p-2 md:p-4 border border-gray-300">{tx.date}</td>
                  <td className="p-2 md:p-4 border border-gray-300">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg text-xs">
                      {tx.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 w-full md:w-auto">Previous</button>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                {num}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 w-full md:w-auto">Next</button>
        </div>
      </div>
      
    </div>
  );
};

export default TransactionHistory;