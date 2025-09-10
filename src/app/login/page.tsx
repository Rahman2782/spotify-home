'use client'
import React from 'react'
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

interface Props {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}

function page({ providers }: Props) {
  return (
    <div className='flex flex-col items-center justify-center bg-[#131419] h-screen'>
      <Image
        src="/spotifyicon.svg"
        alt="Spotify Icon"
        width={120}
        height={120}
        className="my-10"
      />
      {providers && //ternary operator needed with TS
        Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              className='rounded-full text-white bg-green-600 hover:bg-green-500 cursor-pointer'
              onClick={() => signIn(provider.id, {callbackUrl: '/'})} //after logging in, send user to home page
            >
              <p className='text-white text-bold text-md py-3 px-6'>
                Login with {provider.name}
              </p>
            </button>
          </div>
        ))}
    </div>
  );
}

export default page;

//this will run on the server BEFORE the page gets delivered 
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    }
  }
}

//SSR to get the providers for login