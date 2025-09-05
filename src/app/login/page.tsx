import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#131419] h-screen'>
      <Image
        src="/spotifyicon.svg"  //using relative path
        alt="Spotify Icon"
        width={120}
        height={120}
        className="my-10"
      />
        <button className='rounded-full text-white bg-green-600 hover:bg-green-500 cursor-pointer'>
            <p className='text-white text-bold text-md py-3 px-6'>Login with Spotify</p>
        </button>
    </div>
  )
}

export default page

