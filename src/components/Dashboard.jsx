import { useState, useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiCheckedShield } from "react-icons/gi";
import Navbar from './Navbar';
import CardBalanceChart from './chart';
import BankAccountsDisplay from './chart';

function Dashboard() {
  const [collapsed1, setCollapsed1] = useState(true)
  const [collapsed2, setCollapsed2] = useState(true)
  const [collapsed3, setCollapsed3] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  
  
  const card1 = {
    type: "Visa",
    balance: 1254.37,
    expiryDate: "09/28",
    gradient: darkMode ? "from-orange-600 to-red-600" : "from-orange-400 to-orange-600",
    lastUsed: "Yesterday at Starbucks"
  };
  
  const card2 = {
    type: "Mastercard",
    balance: 842.75,
    expiryDate: "11/26",
    gradient: darkMode ? "from-orange-500 to-red-500" : "from-orange-500 to-red-500",
    lastUsed: "Today at Grocery Store"
  };
  
  const card3 = {
    type: "Amex",
    balance: 601.00,
    expiryDate: "04/27",
    gradient: darkMode ? "from-orange-500 to-amber-600" : "from-yellow-500 to-orange-500",
    lastUsed: "3 days ago at Amazon"
  };
  
  const card4 = {
    type: "RuPay",
    balance: 30000.75,
    expiryDate: "11/28",
    gradient: darkMode ? "from-orange-600 to-red-700" : "from-orange-400 to-red-500",
    lastUsed: "Last week at Gas Station"
  };
  
  const card5 = {
    type: "UnionPay",
    balance: 70562.50,
    expiryDate: "07/25",
    gradient: darkMode ? "from-amber-500 to-orange-600" : "from-yellow-400 to-orange-500",
    lastUsed: "2 days ago at Restaurant"
  };

  const cards=[
    {
      type: "Visa",
      balance: 1254.37,
      expiryDate: "09/28",
      gradient: darkMode ? "from-orange-600 to-red-600" : "from-orange-400 to-orange-600",
      lastUsed: "Yesterday at Starbucks"
    },
    {
      type: "Mastercard",
      balance: 842.75,
      expiryDate: "11/26",
      gradient: darkMode ? "from-orange-500 to-red-500" : "from-orange-500 to-red-500",
      lastUsed: "Today at Grocery Store"
    },
    {
      type: "Amex",
      balance: 601.00,
      expiryDate: "04/27",
      gradient: darkMode ? "from-orange-500 to-amber-600" : "from-yellow-500 to-orange-500",
      lastUsed: "3 days ago at Amazon"
    },
    {
      type: "RuPay",
      balance: 30000.75,
      expiryDate: "11/28",
      gradient: darkMode ? "from-orange-600 to-red-700" : "from-orange-400 to-red-500",
      lastUsed: "Last week at Gas Station"
    },
    {
      type: "UnionPay",
      balance: 70562.50,
      expiryDate: "07/25",
      gradient: darkMode ? "from-amber-500 to-orange-600" : "from-yellow-400 to-orange-500",
      lastUsed: "2 days ago at Restaurant"
    }
  ]
  const totalBalance = card1.balance + card2.balance + card3.balance + card4.balance + card5.balance;
  
  
  const getSelectedCard = () => {
    if (selectedCardIndex === 0) return card1;
    if (selectedCardIndex === 1) return card2;
    if (selectedCardIndex === 2) return card3;
    if (selectedCardIndex === 3) return card4;
    if (selectedCardIndex === 4) return card5;
    return card1;
  };
  
  const selectedCard = getSelectedCard();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar darkMode={darkMode} />
      <div className={`flex-1 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} p-4 md:p-6 transition-colors duration-200`}>
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="mb-4 sm:mb-0">
                <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                  Welcome back, Khali
                </h1>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Your financial overview</p>
              </div>
              <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-orange-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>
                <div>
                  <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Your Balance</p>
                  <p className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                    ${totalBalance.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[700px] overflow-x-auto pb-4 pt-2" style={{
              scrollbarWidth: "none", msOverflowStyle: "none",
              maskImage: darkMode ? 'linear-gradient(to right,rgba(0,0,0,1) 60%,rgba(0,0,0,0) 100%)' : 'linear-gradient(to right,rgba(0,0,0,1) 60%,rgba(0,0,0,0) 100%)'
            }}>
              <div className="max-w-[700px] overflow-x-auto pb-4 pt-2" style={{
                scrollbarWidth: "none", msOverflowStyle: "none",
                maskImage: darkMode ? 'linear-gradient(to right,rgba(0,0,0,1) 60%,rgba(0,0,0,0) 100%)' : 'none'
              }}>
                <div className="flex gap-4 w-max px-4">
                 
                  <div
                    className={`bg-gradient-to-r ${card1.gradient} w-56 sm:w-64 h-36 sm:h-40 rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-120 hover:scale-105 hover:z-10`}
                    onClick={() => setSelectedCardIndex(0)}
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">{card1.type}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                        <p className="text-lg sm:text-xl font-bold">${card1.balance}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{card1.expiryDate}</p>
                    </div>
                  </div>
                  <div
                    className={`bg-gradient-to-r ${card2.gradient} w-56 sm:w-64 h-36 sm:h-40 rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-120 hover:scale-105 hover:z-10 -ml-12 sm:-ml-16 md:-ml-20`}
                    onClick={() => setSelectedCardIndex(1)}
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">{card2.type}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                        <p className="text-lg sm:text-xl font-bold">${card2.balance}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{card2.expiryDate}</p>
                    </div>
                  </div>
                  
                  
                  <div
                    className={`bg-gradient-to-r ${card3.gradient} w-56 sm:w-64 h-36 sm:h-40 rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-120 hover:scale-105 hover:z-10 -ml-12 sm:-ml-16 md:-ml-20`}
                    onClick={() => setSelectedCardIndex(2)}
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">{card3.type}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                        <p className="text-lg sm:text-xl font-bold">${card3.balance}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{card3.expiryDate}</p>
                    </div>
                  </div>
                  
                 
                  <div
                    className={`bg-gradient-to-r ${card4.gradient} w-56 sm:w-64 h-36 sm:h-40 rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-120 hover:scale-105 hover:z-10 -ml-12 sm:-ml-16 md:-ml-20`}
                    onClick={() => setSelectedCardIndex(3)}
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">{card4.type}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                        <p className="text-lg sm:text-xl font-bold">${card4.balance}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{card4.expiryDate}</p>
                    </div>
                  </div>
                  
                  
                  <div
                    className={`bg-gradient-to-r ${card5.gradient} w-56 sm:w-64 h-36 sm:h-40 rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-120 hover:scale-105 hover:z-10 -ml-12 sm:-ml-16 md:-ml-20`}
                    onClick={() => setSelectedCardIndex(4)}
                  >
                    <div className="flex flex-col justify-between h-full text-white">
                      <div className="flex justify-between">
                        <p className="font-medium">{card5.type}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm opacity-80">Current Balance</p>
                        <p className="text-lg sm:text-xl font-bold">${card5.balance}</p>
                      </div>
                      <p className="text-xs sm:text-sm">{card5.expiryDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <BankAccountsDisplay />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h2 className={`text-lg md:text-xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                Spending Categories
              </h2>
              
              <div className={`${darkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-100'} border rounded-lg shadow p-4 mb-4 transition-colors duration-200`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed2(!collapsed2)}>
                  <div>
                    <h3 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Subscriptions</h3>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>$420 of $500</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`mr-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>84%</div>
                  </div>
                </div>

                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mt-2 mb-2`}>
                  <div
                    className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-orange-400 to-orange-600'} h-2 rounded-full`}
                    style={{ width: '84%' }}
                  ></div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${collapsed2 ? 'h-0' : 'h-auto'}`}>
                  {!collapsed2 && (
                    <>
                      <div className={darkMode ? 'text-gray-300' : ''}>Expanded transactions</div>
                      <div className={`mt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-2`}>
                        <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Recent Transactions
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Netflix</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-15</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$15.99</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

             
              <div className={`${darkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-100'} border rounded-lg shadow p-4 transition-colors duration-200`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed1(!collapsed1)}>
                  <div>
                    <h3 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Food & Drinks</h3>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>$380 of $600</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`mr-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>63%</div>
                  </div>
                </div>

                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mt-2 mb-2`}>
                  <div
                    className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-orange-400 to-orange-600'} h-2 rounded-full`}
                    style={{ width: '63%' }}
                  ></div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${collapsed1 ? 'h-0' : 'h-auto'}`}>
                  {!collapsed1 && (
                    <>
                      <div className={darkMode ? 'text-gray-300' : ''}>Expanded transactions</div>
                      <div className={`mt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-2`}>
                        <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Recent Transactions
                        </h4>
                        <div className="space-y-2">
                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Grocery Store</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-18</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$87.32</p>
                          </div>

                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Restaurant</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-16</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$54.75</p>
                          </div>

                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Coffee Shop</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-12</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$12.50</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              
              <div className={`${darkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-100'} border rounded-lg shadow p-4 transition-colors duration-200`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setCollapsed3(!collapsed3)}>
                  <div>
                    <h3 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Shopping</h3>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>$250 of $400</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`mr-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>62%</div>
                  </div>
                </div>

                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mt-2 mb-2`}>
                  <div
                    className={`${darkMode ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 'bg-gradient-to-r from-orange-400 to-orange-600'} h-2 rounded-full`}
                    style={{ width: '62%' }}
                  ></div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${collapsed3 ? 'h-0' : 'h-auto'}`}>
                  {!collapsed3 && (
                    <>
                      <div className={darkMode ? 'text-gray-300' : ''}>Expanded transactions</div>
                      <div className={`mt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t pt-2`}>
                        <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Recent Transactions
                        </h4>
                        <div className="space-y-2">
                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Amazon</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-18</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$150.00</p>
                          </div>

                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Zara</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-16</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$75.00</p>
                          </div>

                          
                          <div className="flex justify-between items-center text-sm">
                            <div>
                              <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Home Goods</p>
                              <p className={darkMode ? 'text-gray-400 text-xs' : 'text-gray-600 text-xs'}>2025-03-12</p>
                            </div>
                            <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>$25.00</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            
            <div className={`${darkMode ? 'bg-gray-700 border-gray-700' : 'bg-gray-50 border-gray-100'} border rounded-lg -mt-48 shadow p-4 md:p-6 transition-colors duration-200`}>
              <h2 className={`text-lg md:text-xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Card Details</h2>

              <div className={`bg-gradient-to-r ${selectedCard.gradient} w-full h-40 md:h-48 rounded-xl shadow-lg p-4 mb-4 transition-all duration-300`}>
                <div className="flex flex-col justify-between h-full text-white">
                  <p className="font-medium">{selectedCard.type}</p>
                  <div>
                    <p className="text-xs md:text-sm opacity-80">Current Balance</p>
                    <p className="text-lg md:text-xl font-bold">${selectedCard.balance}</p>
                  </div>
                  <p className="text-xs md:text-sm">{selectedCard.expiryDate}</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className={darkMode ? 'text-gray-400 text-xs md:text-sm' : 'text-gray-600 text-xs md:text-sm'}>Card Holder</p>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>The Great Khali</p>
                </div>
                <div>
                  <p className={darkMode ? 'text-gray-400 text-xs md:text-sm' : 'text-gray-600 text-xs md:text-sm'}>Balance</p>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>${selectedCard.balance}</p>
                </div>
                <div>
                  <p className={darkMode ? 'text-gray-400 text-xs md:text-sm' : 'text-gray-600 text-xs md:text-sm'}>Expiry Date</p>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{selectedCard.expiryDate}</p>
                </div>
                <div>
                  <p className={darkMode ? 'text-gray-400 text-xs md:text-sm' : 'text-gray-600 text-xs md:text-sm'}>Last Used</p>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{selectedCard.lastUsed}</p>
                </div>
                <div className="pt-2 md:pt-4">
                  <button className={`${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} text-white font-medium py-2 px-4 rounded-lg w-full transition duration-150 ease-in-out`}>
                    Add New Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard