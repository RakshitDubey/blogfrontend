

import React from 'react'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './context/UserContext'
import Myblogs from './pages/Myblogs'
import Logout from './pages/Logout'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <div>
      <UserContextProvider>   
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>

        <Route exact path='/register' element={<Register/>}/>
        <Route path='/posts/post/:id' element={<PostDetail/>}/>
        <Route path='/write' element={<ProtectedRoute>
          <CreatePost/>
        </ProtectedRoute>}/>
        <Route path='/edit/:id' element={<ProtectedRoute>
          <EditPost/>
        </ProtectedRoute>}/>
        <Route path='/profile/:id' element={
          <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
        }/>
        <Route path='/myblogs' element={<ProtectedRoute>
          <Myblogs/>
        </ProtectedRoute>}/>
        <Route path='/logout' element={<Logout/>}/>
              



      </Routes>
      <Footer/>
      </UserContextProvider>
   

    </div>
  )
}

export default App