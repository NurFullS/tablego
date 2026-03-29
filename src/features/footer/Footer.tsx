'use client'

import React, { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {

  const router = useRouter()

  return (
    <div className='px-4 relative'>
      <div className='bg-[#ffffff] shadow-2xl w-full p-5 rounded-[12px] flex justify-around items-center'>
        <Link href='/'> <img src='/Icon.svg' alt='Home' /> </Link>
        <img src='/favor.svg' alt='Favorite' />
        <Plus className='text-[#FFFFFF] bg-[#BE8A60] rounded-2xl' size={30} />
        <img src='/archive-minus.svg' alt='Archive' />

        <Link href={'/profile'}><button
          type='button'
          aria-label='User profile'
          className='focus:outline-none'
        >
          <img src='/user.svg' alt='User' />
        </button></Link>
      </div>
    </div>
  )
}

export default Footer