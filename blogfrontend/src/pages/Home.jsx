import React, { useState, useEffect, useContext } from 'react';
import HomePost from '../components/HomePost';
import { url } from '../url';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Home() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  const fetchPosts = async () => {
    try {
      const res = await axios.get(url + '/api/posts/');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(url + '/api/posts/?search=' + searchQuery);
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location]);

  return (
    <div className='px-8 md:px-[200px]'>
      <div className='flex justify-center my-4'>
        <input
          type='text'
          placeholder='Search by title'
          className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-64'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className='ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {searchQuery ? (
        <div>
          {searchResults.length === 0 ? (
            <p className='text-center text-gray-500'>No posts available</p>
          ) : (
            searchResults.map((item, index) => (
              <Link to={user ? `/posts/post/${item._id}` : '/login'}>
                <HomePost key={index} post={item} />
              </Link>
            ))
          )}
        </div>
      ) : (
        <div>
          {posts.length === 0 ? (
            <p className='text-center text-gray-500'>No posts available</p>
          ) : (
            posts.map((item, index) => (
              <Link to={user ? `/posts/post/${item._id}` : '/login'}>
                <HomePost key={index} post={item} />
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
