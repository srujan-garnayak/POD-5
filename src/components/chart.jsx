import React from 'react';

const BankAccountsDisplay = () => {
 
  const bankData = {
    totalAccounts: 5,
    totalBalance: 103261.37,
    usedPercentage: 70, 
  };

  return (
    <div className="w-full max-w-md bg-transparent rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-lg font-medium text-gray-800">{bankData.totalAccounts} Bank Accounts</span>
        </div>
      </div>

      <div className="flex items-center">
      
        <div className="relative w-20 h-20 mr-6">
          <svg className="w-full h-full" viewBox="0 0 100 100">
           
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#E6E8EB" 
              strokeWidth="12" 
            />
            
            
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#FFA500" 
              strokeWidth="12" 
              strokeDasharray="251.2" 
              strokeDashoffset={251.2 * (1 - bankData.usedPercentage / 100)} 
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Total Current Balance</p>
          <p className="text-2xl font-bold">${bankData.totalBalance.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BankAccountsDisplay;