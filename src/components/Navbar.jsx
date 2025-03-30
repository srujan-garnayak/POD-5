import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <button 
        onClick={toggleMenu} 
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      
      <div 
        className={`
          fixed md:sticky top-0 left-0 z-40
          w-64 p-4 min-h-screen bg-gray-900 text-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-hidden
        `}
      >
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <GiCheckedShield className='size-10 pt-2' />
          </div>
          <h1 className="text-2xl font-bold text-orange-600">ShieldBank</h1>
        </div>

        <div className="flex items-center space-x-2 mx-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            GK
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-sm font-semibold mr-2">Great Khali</span>
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
            <p className="text-xs text-gray-500">khali@gmail.com</p>
          </div>
        </div>

        <nav className="space-y-2 my-4">
          <div className="relative">
            <input
              type="text"
              placeholder='Search'
              className='border-2 mx-1 px-4 py-2 rounded-lg border-gray-400 w-full pr-10'
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-200 absolute right-5 top-1/2 -translate-y-1/2 hover:text-blue-500"
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

          <a href="/Dashboard">
          <div className='flex items-center p-3 rounded-lg cursor-pointer'>
            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-full flex gap-3'>
              <FaHome className='size-6' />
              <div>Home</div>
            </div>
          </div>
          </a>

          <a href="/Transactions">
          <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-full flex gap-3'>
              <AiOutlineTransaction className='size-6' />
              <div>Transaction History</div>
            </div>
          </div>
          </a>

          <a href="/Payment">
          <div className='flex items-center p-3 -my-3 rounded-lg cursor-pointer'>
            <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-full flex gap-3'>
              <FaMoneyBillTransfer className='size-6' />
              <div>Payment Transfer</div>
            </div>
          </div>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;