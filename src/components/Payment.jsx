import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Payment = () => {
    return (
        <div className='p-4 bg-gray-300'>
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full flex">

                {/* Navbar */}
                <div className="w-64 p-4 bg-gray-900 text-white shadow-lg rounded-l-lg mr-6">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-orange-500 rounded-full mr-3"></div>
                        <h1 className="text-xl font-bold text-orange-600">Horizon</h1>
                    </div>

                    <div className="flex items-center space-x-2 mx-2">

                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            AH
                        </div>
                        <div>
                            <div className="flex items-center ">
                                <span className="text-sm font-semibold mr-2">Adrian Hajdin</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    />
                                </svg>
                            </div>
                            <p className="text-xs text-gray-500">adrian@jsmastery.pro</p>
                        </div>
                    </div>

                    <nav className="space-y-2 my-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder='Search'
                                className='border-2 mx-3 px-3 py-2 rounded-lg border-gray-400 w-48 pr-10'
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-200 absolute right-10 top-1/2 -translate-y-1/2 hover:text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <div className='flex items-center p-3 rounded-lg cursor-pointer'>
                            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'><FaHome className='size-6' /><div>
                                Home
                            </div></div>
                        </div>
                        <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                            {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                                <BsBank2 className='size-5.5' />
                                <div>
                                    My Bank
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                            {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                                <AiOutlineTransaction className='size-6' />
                                <div>
                                    Transaction History
                                </div></div>
                        </div>
                        <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
                            {/* <div className="w-6 h-6 mr-3 bg-gray-200 rounded-full"></div> */}
                            <div className='bg-orange-50 text-orange-600 w-48 p-1.5 rounded-md flex gap-3'>
                                <FaMoneyBillTransfer className='size-6' />
                                <div>Payment Transfer</div>
                            </div>
                        </div>

                    </nav>
                </div>

                {/* Main part */}
                <div className="flex-1 p-8 text-gray-50">
                    <h1 className="text-3xl font-semibold mb-1">Payment Transfer</h1>
                    <p className="text-gray-400 text-sm mb-6">Please provide any specific details or notes related to the payment transfer</p>


                    {/* Transfer details section */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-lg font-semibold">Transfer details</h1>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>

                        <div className='flex '>
                            <div className='my-2 w-1/2'>
                                <div className='my-2' >
                                    Sender's Details
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Enter the bank account details of the sender</p>
                                <label className="block text-sm font-medium mb-2">Sender's IFSC Code</label>
                                <input
                                    type="text"
                                    className="w-3/4 px-3 py-2 border rounded-md text-sm "
                                    defaultValue="XXXX"
                                />
                                <div className='my-2'>
                                    <label className="block text-sm font-medium mb-2">Sender's Bank Account Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the account number"
                                        className="w-3/4 px-3 py-2 border rounded-md text-sm"
                                    />
                                </div>
                                <div className="flex my-2 gap-10">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                        <input
                                            type="date"
                                            placeholder="Enter the expiry date"
                                            className="w-full px-3 py-2 border  rounded-md text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">CVV</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the CVV number"
                                            className="w-3/4 px-3 py-2 border  rounded-md text-sm"
                                        />
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the name"
                                        className="w-3/4 px-3 py-2 border rounded-md text-sm"
                                    />
                                </div>
                            </div>

                            <div className="h-auto w-px bg-gray-700"></div>

                            <div className="mb-8 my-4 px-15">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-md font-semibold">Recipient's details</h2>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">Enter the bank account details of the recipient</p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Recipient's IFSC Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-md text-sm "
                                            defaultValue="XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Recipient's Bank Account Number</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the account number"
                                            className="w-full px-3 py-2 border rounded-md text-sm"
                                        />
                                    </div>

                                    <div className='my-2'>
                                        <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter the name"
                                            className="w-full px-3 py-2 border rounded-md text-sm"
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div >
                            <label className="block text-lg my-6 font-medium mb-2">Amount</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                                defaultValue="40000"
                            />
                        </div>

                        <div className='my-6'>
                            <label className="block text-sm font-medium mb-2">Transfer Note (Optional)</label>
                            <p className="text-xs text-gray-400 mb-2">Please provide any additional information or note to the recipient</p>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md text-sm h-24"
                                defaultValue="Dear John,

I hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it."
                            ></textarea>
                        </div>


                    </div>

                    {/* Bank account details section */}


                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium">
                        Transfer Money
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment
