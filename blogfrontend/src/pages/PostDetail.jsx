import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../url';
import { IF } from '../url';
import { UserContext } from '../context/UserContext';


function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const dayOfWeek = days[dateTime.getDay()];
  const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${dayOfWeek} ${time}`;
}

function PostDetail() {
  const navigate=useNavigate()
  const postID = useParams().id;
  const [post, setPost] = useState([]);
  const{user}=useContext(UserContext)
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${url}/api/posts/${postID}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postID]);

  const handledelete=async()=>{
    try {
      const res=await axios.delete(url+'/api/posts/'+postID,{withCredentials:true})
      navigate('/')
      
    } catch (error) {
      
    }

  }
  const handleedit=()=>{
    navigate('/edit/'+postID)
  }

  return (
    <div className="px-4 md:px-8 mt-8 m-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {post.title}
          </h1>
          {user?._id===post?.userId&&
          <div className="flex items-center space-x-2">
      
            <button className="text-gray-600 hover:text-gray-900" onClick={handleedit}>
              <FiEdit2 />
            </button>
            <button className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={handledelete}>
              <MdDelete />
            </button>
          </div>
}
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p className="text-gray-600">{user?user.username:""}</p>
          <div className="flex space-x-2">
            <p className="text-gray-600">{formatDateTime(post.createdAt)}</p>
          </div>
        </div>
        <img
          src={IF+post.photo}
          alt="Post"
          className="mt-4 rounded-lg w-full h-auto"
        />
        <p className="text-gray-700 mt-4">
          {post.description}
        </p>
      </div>
    </div>
  );
}

export default PostDetail;
