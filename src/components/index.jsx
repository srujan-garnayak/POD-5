import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";


function Dashboard() {
  const [Collapsed1, setCollapsed1] = useState(0)
  const [Collapsed2, setCollapsed2] = useState(0)
  const [Collapsed3, setCollapsed3] = useState(0)

  return (
    <>
      <div className='flex p-4 bg-gray-300'>
        <div className="flex">


          <div className="w-64 p-4 bg-gray-900 text-white shadow-lg rounded-lg rounded-tr-none rounded-br-none">
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
                <div className='bg-orange-50 text-orange-600 w-48 p-2 rounded-md flex gap-3'><FaHome className='size-6' /><div>
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
                <div className='text-gray-200 hover:text-orange-600 hover:bg-orange-50 p-1.5 rounded-md w-48 flex gap-3'>
                  <FaMoneyBillTransfer className='size-6.5' />
                  <div>Payment Transfer</div>
                </div>
              </div>

            </nav>
          </div>

        </div>

        {/* Main content */}
        <div className="rounded-lg rounded-tl-none rounded-bl-none flex-1 bg-gray-800 p-6 text-gray-200">
          <div className="flex flex-col h-full">
            {/* Top section - Welcome and Cards */}
            <div className="mb-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-orange-400">Welcome back, Adrian</h1>
                  <p className="text-gray-400">Your financial overview</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Your Balance</p>
                  <p className="text-2xl font-bold text-orange-400">$2,698.12</p>
                </div>
              </div>

              {/* Card div */}
              <div className="max-w-[700px] overflow-x-auto pb-4 pt-2 [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_60%,rgba(0,0,0,0)_100%)]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="flex gap-4 w-max">
                  {/* Card 1 */}
                  <div
                    className="bg-gradient-to-r from-orange-600 to-orange-800 w-64 h-40 rounded-md shadow-lg p-4 cursor-pointer"
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">Visa</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Current Balance</p>
                        <p className="text-xl font-bold">$1,254.37</p>
                      </div>
                      <p className="text-sm">09/28</p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    className="bg-gradient-to-r from-orange-700 to-red-700 w-64 h-40 rounded-xl shadow-lg p-4 cursor-pointer -ml-20"
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">Mastercard</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-80">Current Balance</p>
                        <p className="text-xl font-bold">$842.75</p>
                      </div>
                      <p className="text-sm">11/26</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 w-64 h-40 rounded-xl shadow-lg p-4 cursor-pointer -ml-20"
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">Amex</p>

                      </div>
                      <div>
                        <p className="text-sm opacity-80">Current Balance</p>
                        <p className="text-xl font-bold">$601.00</p>
                      </div>
                      <p className="text-sm">04/27</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div
                    className="bg-gradient-to-r from-orange-700 to-red-700 w-64 h-40 rounded-xl shadow-lg p-4 cursor-pointer -ml-20"
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">Mastercard</p>

                      </div>
                      <div>
                        <p className="text-sm opacity-80">Current Balance</p>
                        <p className="text-xl font-bold">$842.75</p>
                      </div>
                      <p className="text-sm">11/26</p>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div
                    className="bg-gradient-to-r from-orange-700 to-red-700 w-64 h-40 rounded-xl shadow-lg p-4 cursor-pointer -ml-20"
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">Mastercard</p>

                      </div>
                      <div>
                        <p className="text-sm opacity-80">Current Balance</p>
                        <p className="text-xl font-bold">$842.75</p>
                      </div>
                      <p className="text-sm">11/26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Layout */}
            <div className="flex gap-6 flex-1">
              {/* Middle section - Categories */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-orange-400 mb-4">Spending Categories</h2>
                <div className="space-y-4">
                  {/* Category 1 - Subscriptions */}
<div className="bg-gray-700 rounded-lg shadow p-4 mb-4">
  <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed2(!Collapsed2)}>
    <div>
      <h3 className="font-medium text-gray-200">Subscriptions</h3>
      <p className="text-sm text-gray-400">$420 of $500</p>
    </div>
    <div className="flex items-center">
      <div className="mr-2 text-sm font-medium">84%</div>
    </div>
  </div>

  {/* Progress bar */}
  <div className="w-full bg-gray-600 rounded-full h-2 mt-2 mb-2">
    <div
      className="bg-orange-500 h-2 rounded-full"
      style={{ width: '84%' }}
    ></div>
  </div>

  {/* Collapsible content */}
  <div className={`overflow-hidden transition-all duration-300 ${Collapsed2 ? 'h-0' : 'h-auto'}`}>
    {!Collapsed2 && (
      <>
        <div>Expanded transactions</div>
        <div className="mt-4 border-t border-gray-600 pt-2">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Transactions</h4>
          <div className="space-y-2">
            {/* transactions*/}
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="text-gray-200">Netflix</p>
                <p className="text-gray-400 text-xs">2025-03-15</p>
              </div>
              <p className="font-medium text-gray-200">$15.99</p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</div>

                  {/* Category 2 */}
                  <div className="bg-gray-700 rounded-lg shadow p-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed1(!Collapsed1)}>
                      <div>
                        <h3 className="font-medium text-gray-200">Food & Drinks</h3>
                        <p className="text-sm text-gray-400">$380 of $600</p>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium">63%</div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2 mb-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full w-63/100"
                      // style={{ width: '63%' }}
                      ></div>
                    </div>

                    {/* Collapsible content */}
                    <div className={`overflow-hidden transition-all duration-300 ${Collapsed1 ? 'h-0' : 'h-auto'}`}>
                      {!Collapsed1 && (
                        <>
                          <div>Expanded transactions</div>
                          <div className="mt-4 border-t border-gray-600 pt-2">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Transactions</h4>
                            <div className="space-y-2">
                              {/* Transaction 1 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Grocery Store</p>
                                  <p className="text-gray-400 text-xs">2025-03-18</p>
                                </div>
                                <p className="font-medium text-gray-200">$87.32</p>
                              </div>

                              {/* Transaction 2 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Restaurant</p>
                                  <p className="text-gray-400 text-xs">2025-03-16</p>
                                </div>
                                <p className="font-medium text-gray-200">$54.75</p>
                              </div>

                              {/* Transaction 3 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Coffee Shop</p>
                                  <p className="text-gray-400 text-xs">2025-03-12</p>
                                </div>
                                <p className="font-medium text-gray-200">$12.50</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Category 3 - Collapsed */}
                  <div className="bg-gray-700 rounded-lg shadow p-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed3(!Collapsed3)}>
                      <div>
                        <h3 className="font-medium text-gray-200">Shopping</h3>
                        <p className="text-sm text-gray-400">
                          $250 of $400
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium">
                          62%
                        </div>
                        {/* <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg> */}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2 mb-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full w-250/400"
                       
                      ></div>
                    </div>
                    {/* Collapsible content */}
                    <div className={`overflow-hidden transition-all duration-300 ${Collapsed3 ? 'h-0' : 'h-auto'}`}>
                      {!Collapsed3 && (
                        <>
                          <div>Expanded transactions</div>
                          <div className="mt-4 border-t border-gray-600 pt-2">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Transactions</h4>
                            <div className="space-y-2">
                              {/* Transaction 1 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Amazon</p>
                                  <p className="text-gray-400 text-xs">2025-03-18</p>
                                </div>
                                <p className="font-medium text-gray-200">$150.00</p>
                              </div>

                              {/* Transaction 2 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Zara </p>
                                  <p className="text-gray-400 text-xs">2025-03-16</p>
                                </div>
                                <p className="font-medium text-gray-200">$75.00</p>
                              </div>

                              {/* Transaction 3 */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <p className="text-gray-200">Home Goods</p>
                                  <p className="text-gray-400 text-xs">2025-03-12</p>
                                </div>
                                <p className="font-medium text-gray-200">$25.00</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right section - Selected Card Details */}
              <div className="w-80 bg-gray-700 rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-orange-400 mb-4">Card Details</h2>

                {/* Selected Card Display */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 w-full h-48 rounded-xl shadow-lg p-4 mb-4">
                  <div className="flex flex-col justify-between h-full text-white">
                    <div className="flex justify-between">
                      <p className="font-medium">Visa</p>
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Current Balance</p>
                      <p className="text-xl font-bold">$1,254.37</p>
                    </div>
                    <p className="text-sm">09/28</p>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Card Holder</p>
                    <p className="font-medium text-gray-200">Adrian Hajdin</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Balance</p>
                    <p className="font-medium text-gray-200">$1,254.37</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Expiry Date</p>
                    <p className="font-medium text-gray-200">09/28</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last Used</p>
                    <p className="font-medium text-gray-200">Yesterday at Starbucks</p>
                  </div>
                  <div className="pt-4">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg w-full transition duration-150 ease-in-out">
                      Add New Bank
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>




    </>
  )
}

export default Dashboard