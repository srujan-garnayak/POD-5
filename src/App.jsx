import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import Login from './components/Login';
import TransactionHistory from './components/Transactions';
import { LogIn } from 'lucide-react';
import BankingLandingPage from './components/BankingLandingPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<BankingLandingPage/>} />
            
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Payment' element={<Payment />} />
          <Route path='/Transactions' element={<TransactionHistory />} />
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Login' element={<Login/>}/>
          
        </Routes>
    </Router >
    
  );
}

export default App;