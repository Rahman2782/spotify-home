import React from 'react'
import Image from 'next/image';
import spotifyIcon from '/spotifyIcon.svg'

function page() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#131419] h-screen'>
        <button className='rounded-full text-white bg-green-600 hover:bg-green-500 cursor-pointer'>
            <p className='text-white text-bold text-md py-3 px-6'>Login with Spotify</p>
        </button>
    </div>
  )
}

export default page

