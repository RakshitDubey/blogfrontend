import React from 'react';
import ProfilePost from '../components/ProfilePost';

function Profile() {
  return (
    <div className="px-4 md:px-8 mt-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3 w-full">
          <h1 className="text-xl font-bold mb-4">Your Posts</h1>
          <ProfilePost />
          <ProfilePost />
        </div>
        <div className="md:w-1/3 w-full mt-8 md:mt-0">
          <div className="bg-gray-100 rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              placeholder="Your User name"
              className="outline-none px-4 py-2 mb-2 bg-white rounded-md"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="outline-none px-4 py-2 mb-2 bg-white rounded-md"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none px-4 py-2 mb-4 bg-white rounded-md"
            />
            <div className="flex items-center space-x-4">
              <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out">
                Update
              </button>
              <button className="text-white font-semibold bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition duration-300 ease-in-out">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
