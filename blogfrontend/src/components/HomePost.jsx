import React from 'react';
import { IF } from '../url';

function HomePost({post}) {
  const formattedDate = new Date(post.updatedAt);
  const formattedTime = formattedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDay = formattedDate.toLocaleDateString([], { weekday: 'long' });

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden w-full md:flex mb-8 m-4'>
      {/* Image */}
      <div className='md:w-1/3'>
        <img src={IF+post.photo} alt='Post' className='w-full h-auto object-cover md:h-[200px]' />
      </div>

      {/* Content */}
      <div className='p-4 md:w-2/3'>
        {/* Title */}
        <h1 className='text-xl font-bold mb-2 md:text-2xl'>{post.title}</h1>

        {/* Meta */}
        <div className='flex flex-col md:flex-row items-center justify-between mb-2 text-sm text-gray-500'>
          <div className='flex items-center mb-2 md:mb-0'>
            <span className='mr-2'>{post.username}</span>
            <span className='mr-2'>•</span>
            <span>{formattedDay}</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'> {formattedTime}</span>
          </div>
        </div>

        {/* Description */}
        <p className='text-sm md:text-base mb-4'>
         {post.description.slice(0,200)+"...ReadMore"}
        </p>

        
      </div>
    </div>
  );
}

export default HomePost;
