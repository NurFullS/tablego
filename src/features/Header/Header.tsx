'use client'

import React, { useEffect, useState } from 'react'
import './header.css'
import api from '@/api/api'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchMe } from '@/store/userSlice'

const Header = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { data, loading, isAuth } = useSelector((state: any) => state.user)

  // useEffect(() => {
  //   dispatch(fetchMe() as any)
  // }, [dispatch])

  const routLogin = () => {
    router.push('/auth/login')
  }

  return (
    <header className="w-full px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">

        <h1 className="title" onClick={() => router.push('/')}>
          TableGO
        </h1>

        <div className='flex items-center gap-2'>
          <img src="/lamp.svg" alt="theme toggle" className="w-8 h-8" />

          {isAuth && data?.username ? (
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <h1 className='header-user'>
                {data.username.slice(0, 1)}
              </h1>
            </button>
          ) : (
            <button onClick={routLogin} className='bg-[#BE8A60] py-2 text-[#ffffff] font-title px-4 rounded-[10px]'>Войти</button>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header