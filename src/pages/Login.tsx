'use client'

import React, { useState } from 'react'
import './Login.css'
import api from '@/api/api'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Login = () => {

    const [inputEmailData, setInputEmailData] = useState('')
    const [inputPasswordData, setInputPasswordData] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        try {
            const res = await api.post('/auth/login', {
                email: inputEmailData,
                password: inputPasswordData
            })

            toast.success('Успешный вход!')
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='p-10'>
            <Toaster />
            <img src="/slide.svg" alt="slide" />
            <div className="flex flex-col mt-30 justify-center items-center gap-6">
                <h1 className='login-text'>Вход в TableGO</h1>
                <div className='gap-8 flex flex-col'>
                    <div className='flex flex-col gap-10'>
                        <input
                            className='login-input'
                            type="email"
                            placeholder='Email'
                            onChange={(e) => setInputEmailData(e.target.value)}
                            value={inputEmailData}
                        />
                        <input
                            className='login-input'
                            type="password"
                            placeholder='Пароль'
                            onChange={(e) => setInputPasswordData(e.target.value)}
                            value={inputPasswordData}
                        />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <input className='w-5 h-5' type="checkbox" />
                        <p>Я даю согласию на использование моих данных.</p>
                    </div>
                    <button onClick={handleLogin} className='login-button'>Войти</button>
                </div>
                <div className='flex text-lg font-medium'>
                    <p>Нет аккаунта? <span onClick={() => router.push('/auth/register')} className='text-[#BE8A60] cursor-pointer'>Зарегистрироваться.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login