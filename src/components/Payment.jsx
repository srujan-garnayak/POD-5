import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiCheckedShield } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Payment = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (


        <div className='w-full h-full bg-gray-800 text-gray-50'>
            

            <div className="flex flex-col lg:flex-row min-h-screen">
                <Navbar/>

                
                <div className="flex-1 p-4 md:p-8 lg:ml-0">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-1 mt-8 lg:mt-0">Payment Transfer</h1>
                    <p className="text-gray-400 text-sm mb-6">Please provide any specific details or notes related to the payment transfer</p>

                    
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-lg font-semibold">Transfer details</h1>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>

                        <div className='flex flex-col lg:flex-row'>
                            
                            <div className='my-2 w-full lg:w-1/2 pr-0 lg:pr-4'>
                                <div className='my-2'>
                                    Sender's Details
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Enter the bank account details of the sender</p>
                                
                                <label className="block text-sm font-medium mb-2">Sender's IFSC Code</label>
                                <input
                                    type="text"
                                    className="w-full md:w-3/4 px-3 py-2 border rounded-md text-sm bg-transparent"
                                    placeholder="IFSC Code"
                                />
                                
                                <div className='my-2'>
                                    <label className="block text-sm font-medium mb-2">Sender's Bank Account Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the account number"
                                        className="w-full md:w-3/4 px-3 py-2 border rounded-md text-sm bg-transparent"
                                    />
                                </div>
                                
                                <div className="flex flex-col sm:flex-row my-2 gap-4 sm:gap-10">
                                    <div className="w-full sm:w-auto">
                                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                        <input
                                            type="date"
                                            placeholder="Enter the expiry date"
                                            className="w-full px-3 py-2 border rounded-md text-sm bg-transparent"
                                        />
                                    </div>
                                    <div className="w-full sm:w-auto">
                                        <label className="block text-sm font-medium mb-2">CVV</label>
                                        <input
                                            type="password"
                                            placeholder="Enter the CVV number"
                                            className="w-full md:w-3/4 px-3 py-2 border rounded-md text-sm bg-transparent"
                                        />
                                    </div>
                                </div>
                                
                                <div className='my-2'>
                                    <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the name"
                                        className="w-full md:w-3/4 px-3 py-2 border rounded-md text-sm bg-transparent"
                                    />
                                </div>
                            </div>

                           
                            <div className="hidden lg:block h-auto w-px bg-gray-700"></div>

                            
                            <div className="lg:hidden h-px w-full my-6 bg-gray-700"></div>

                            
                            <div className="w-full lg:w-1/2 pl-0 lg:pl-4 my-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-md font-semibold">Recipient's details</h2>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Enter the bank account details of the recipient</p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Recipient's IFSC Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-md text-sm bg-transparent"
                                            placeholder="IFSC Code"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Recipient's Bank Account Number</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the account number"
                                            className="w-full px-3 py-2 border rounded-md text-sm bg-transparent"
                                        />
                                    </div>

                                    <div className='my-2'>
                                        <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the name"
                                            className="w-full px-3 py-2 border rounded-md text-sm bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg my-6 font-medium mb-2">Amount</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md text-sm bg-transparent"
                                defaultValue="40000"
                            />
                        </div>

                        <div className='my-6'>
                            <label className="block text-sm font-medium mb-2">Transfer Note (Optional)</label>
                            <p className="text-xs text-gray-400 mb-2">Please provide any additional information or note to the recipient</p>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md text-sm h-24 bg-transparent"
                                defaultValue="Dear John,

I hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it."
                            ></textarea>
                        </div>
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium">
                        Transfer Money
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;