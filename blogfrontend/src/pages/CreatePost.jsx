import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { url } from '../url';
import { useNavigate } from 'react-router-dom';
function CreatePost() {

  const[title,settitle]=useState()
  const[description,setdesc]=useState()
  const[file,setfile]=useState(null)
  const{user}=useContext(UserContext)
  const navigate=useNavigate()
  const handlecreate=async(e)=>{
    e.preventDefault()

    const post={
      title, 
      description,
      username:user.username,
      userId:user._id


    }
    if(file){
      const data=new FormData()
      const filename=Date.now()+file.name
      data.append("img",filename)
      data.append("file",file)
      post.photo=filename
      try{
        const imageupload=await axios.post(url+'/api/upload',data)
        console.log(imageupload.data);
      }
      catch(error){
        console.log(error);
      }
    }
    try {
      const res=await axios.post(url+'/api/posts/create',post,{withCredentials:true})
      navigate('/')
      console.log(res.data);

    } catch (error) {
      
    }


  }
  return (
    <div className="px-4 md:px-8 mt-8">
      <h1 className="font-bold text-2xl md:text-3xl mt-8 mb-4">Create a Post</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            id="title"
            placeholder="Enter Post title"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter Post description"
            value={description}
            onChange={(e)=>setdesc(e.target.value)}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 cursor-pointer">
            Upload Image
          </label>
          <input type="file" id="fileUpload" className="hidden" onChange={(e)=>setfile(e.target.files[0])}/>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition duration-300 ease-in-out m-3"
          onClick={handlecreate}
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
