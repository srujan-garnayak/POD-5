import React from 'react';
import { GiCheckedShield } from "react-icons/gi";

const BankingLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      <nav className="bg-gray-900 p-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <div className=" rounded-full w-10 h-10"><GiCheckedShield className='size-9 pt-2' /></div>
          <span className="ml-2 text-2xl font-bold text-orange-500">ShieldBank</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/Dashboard" className="hover:text-orange-500">Home</a>
          <a href="/Payment" className="hover:text-orange-500">Payment</a>
          <a href="/Transactions" className="hover:text-orange-500">Transaction History</a>
        </div>
        <a href="/Login"><button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Login
        </button>
        </a>
      </nav>

      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banking <span className="text-orange-500">Simplified</span> for Everyone
              </h1>
              <p className="text-gray-300 mb-8 text-lg">
                Experience seamless banking with Horizon. Track your spending, manage multiple cards, and take control of your finances.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold">
                  Get Started
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-gray-400">Total Balance</p>
                    <p className="text-3xl font-bold text-orange-500">$103,261.37</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-full">
                  <div className=" rounded-full w-10 h-10"><GiCheckedShield className='size-9 pt-2' /></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-600 p-4 rounded-lg">
                    <p className="text-sm text-orange-200">Visa</p>
                    <p className="font-bold">$1,254.37</p>
                    <p className="text-xs text-orange-200 mt-2">09/28</p>
                  </div>
                  <div className="bg-orange-500 p-4 rounded-lg">
                    <p className="text-sm text-orange-100">Mastercard</p>
                    <p className="font-bold">$842.75</p>
                    <p className="text-xs text-orange-100 mt-2">11/26</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-16 px-6 md:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-orange-500">Horizon</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Track All Your Cards</h3>
              <p className="text-gray-300">
                Keep all your credit and debit cards in one place. Monitor balances and due dates easily.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Spending Categories</h3>
              <p className="text-gray-300">
                Visualize your spending habits with automatic categorization and progress bars.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
              <p className="text-gray-300">
                Get instant notifications for all transactions and keep track of where your money goes.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your finances?</h2>
          <p className="text-xl mb-8">
            Join thousands of users who have simplified their banking experience with Horizon.
          </p>
          <a href="/SignIn"><button className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100">
            Create Free Account
          </button>
          </a>
        </div>
      </div>

      
      <footer className="bg-gray-900 py-12 px-6 md:px-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
              <div className=" rounded-full w-10 h-10"><GiCheckedShield className='size-9 pt-2' /></div>
                <span className="ml-2 text-xl font-bold text-orange-500">ShieldBank</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Your modern banking solution for a complex financial world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Products</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Accounts</a></li>
                  <li><a href="#" className="hover:text-orange-500">Credit Cards</a></li>
                  <li><a href="#" className="hover:text-orange-500">Loans</a></li>
                  <li><a href="#" className="hover:text-orange-500">Savings</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">About</a></li>
                  <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                  <li><a href="#" className="hover:text-orange-500">Press</a></li>
                  <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                  <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                  <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
                  <li><a href="#" className="hover:text-orange-500">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© 2025 ShieldBank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BankingLandingPage;