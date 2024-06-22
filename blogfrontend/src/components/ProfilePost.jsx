import React from 'react'

function ProfilePost() {
  return (
   
    <div className='bg-white shadow-md rounded-lg overflow-hidden w-full md:flex mb-8 m-4'>
    {/* Image */}
    <div className='md:w-1/3'>
      <img src='https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max' alt='Post' className='w-full h-auto object-cover md:h-[200px]' />
    </div>

    {/* Content */}
    <div className='p-4 md:w-2/3'>
      {/* Title */}
      <h1 className='text-xl font-bold mb-2 md:text-2xl'>10 Uses Of Artificial Intelligence in Day to Day Life</h1>

      {/* Meta */}
      <div className='flex flex-col md:flex-row items-center justify-between mb-2 text-sm text-gray-500'>
        <div className='flex items-center mb-2 md:mb-0'>
          <span className='mr-2'>@rakshit</span>
          <span className='mr-2'>•</span>
          <span>16/03/2003</span>
        </div>
        <div className='flex items-center'>
          <span className='mr-2'>4:46</span>
        </div>
      </div>

      {/* Description */}
      <p className='text-sm md:text-base mb-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      
    </div>
  </div>

  )
}

export default ProfilePost