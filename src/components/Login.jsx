import React from 'react'

function Login() {
  return (
    <>
      <div className="flex flex-wrap h-screen bg-gray-900 text-white">
        <div className="   w-full flex justify-center items-center mt-20 lg:mt-0">
          <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4">Log in</h2>
            <p className="text-gray-400">Welcome Back! Please enter your details.</p>
            <div className="mt-6">
              <label className="font-medium block">Email</label>
              <input type="email" placeholder="Enter your email"
                className="p-2 mt-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
            <div className="mt-4">
              <label className="font-medium block">Password</label>
              <input type="password" placeholder="Enter your password"
                className="p-2 mt-2 border border-gray-600 rounded-md w-full bg-gray-700 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
            </div>
            <a href="/Dashboard">
            <button className="p-3 mt-6 rounded-md bg-amber-500 text-white w-full hover:bg-amber-600 transition-transform transform hover:scale-105 duration-200">
              Login
            </button>
            </a>
            <a href="/SignIn">
            <div className="text-center mt-4 text-gray-400"> Don’t have an account?
                <span className="text-amber-500 cursor-pointer hover:underline"> Sign up</span>
              </div>
            </a>
              
            

          </div>
        </div>


      </div>
    </>
  );
}

export default Login;
