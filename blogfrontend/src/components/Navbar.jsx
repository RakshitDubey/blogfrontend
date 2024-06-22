import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import { UserContext } from '../context/UserContext';
import { url } from '../url';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


function Navbar() {

    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[prompt,setprompt]=useState()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const{user}=useContext(UserContext)
  const{setuser}=useContext(UserContext)
  const handlelogout=async()=>{
    try {
      const res=await axios.get(url+'/api/auth/logout',{withCredentials:true})
      console.log(res);
      setuser(null)
      toast.success("Logout")
    } catch (error) {
      
    }

  }
  const{user}=useContext(UserContext)
    console.log(user);

    const navigate=useNavigate()
  return (
    <nav className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-8'>
        <h1 className='text-lg font-semibold'>
          <Link to='/'>RD</Link>
        </h1>
        <div className='hidden md:flex items-center space-x-4'>
          
          <div className='space-x-4'>
           {user?
           <Link to='/write'>WritePost</Link>
           :<Link to='/login'>Login</Link>
           }            
            
                     
           {user?
           <Link to='/myblogs'>MyBlogs</Link>
           :null
           }            
            
           {user?
           <button onClick={handlelogout}>Logout</button>
           :null
           }            
            
          </div>
        </div>
        <div className='md:hidden'>
          {isMenuOpen ? (
            <IoCloseOutline
              onClick={toggleMenu}
              className='text-2xl cursor-pointer'
            />
          ) : (
            <IoMenuOutline
              onClick={toggleMenu}
              className='text-2xl cursor-pointer'
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden flex flex-col items-center py-4'>
  {user?
           <Link to='/write'>WritePost</Link>
           :<Link to='/login'>Login</Link>
           }            
            
         
           {user?
           <Link to='/myblogs'>MyBlog</Link>
           :null
           }     
           {user?
           <button onClick={handlelogout}>Logout</button>
           :null
           }     
      
        </div>
      )}
      <Toaster/>
    </nav>
  );
}

export default Navbar;
