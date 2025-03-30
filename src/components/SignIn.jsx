import { SignalIcon } from 'lucide-react';
import React from 'react'

function SignIn(){
    return(
      <>

    <div className="flex flex-wrap h-screen bg-gray-900 text-white">
    <div className=" w-screen mt-1 px-4 overflow-hidden">
        <div className="mx-auto lg:w-7/10 w-full h-96 p-2 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Sign up</h2>
        <p className="text-gray-400">Welcome! Please enter your details</p>

        <div className="flex mt-5 space-x-4">
            <div className="w-1/2">
            <label className="font-medium mt-2 block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
            <div className="w-1/2">
            <label className="font-medium mt-2 block">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
        </div>

        <label className="font-medium mt-2 block">Address</label>
        <input type="text" placeholder="Enter your address" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />

        <div className="flex space-x-4">
            <div className="w-1/2">
            <label className="font-medium mt-2 block">State</label>
            <input type="text" placeholder="ex:" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
            <div className="w-1/2">
            <label className="font-medium mt-2 block">Pincode</label>
            <input type="number" placeholder="Enter pincode" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
        </div>

        <div className="flex space-x-4">
            <div className="w-1/2">
            <label className="font-medium mt-2 block">Date of Birth</label>
            <input type="date" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
            <div className="w-1/2">
            <label className="font-medium mt-2 block">SSN</label>
            <input type="text" placeholder="Enter SSN" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
        </div>

        <label className="font-medium mt-2 block">Email</label>
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />

        <label className="font-medium mt-2 block">Password</label>
        <input type="password" placeholder="Enter your password" className="p-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />

        <a href="/Dashboard"><button className="p-2.5 mt-4 mb-16 rounded-md bg-amber-500 text-white w-full hover:bg-amber-600 transition duration-200">Sign up</button>
        </a>
        
        </div>
    </div>

    
    </div>
    </>
    )
  }
export default SignIn