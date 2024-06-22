import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../url';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


import toast, { Toaster } from "react-hot-toast";
function Login() {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const navigate=useNavigate()
  const{setuser}=useContext(UserContext)

  const{user}=useContext(UserContext)
  useEffect(()=>{
    toast.success("Double click to Login")
  },[])
  const handlelogin=async(e)=>{
    e.preventDefault()
   
    try {
      const res=await axios.post(url+'/api/auth/login',{email,password},{withCredentials:true})

      // console.log("Login Successfull");
      setuser(res.data)
    
      toast.success(user.username+" Login ")
     
      navigate('/')
     


      
    } catch (error) {
      toast.error("OOps")
      console.log(error);
      // toast.error("Error Occured")
      
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" >
          <input
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            placeholder="Enter email...."
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          <input
            type="password"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            placeholder="Password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={handlelogin}
          >
            Sign in
          </button>
        </form>
        <div className="text-sm text-center mt-4">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default Login;
