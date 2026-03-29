'use client'

import React, { useState } from 'react'
import './Login.css'
import api from '@/api/api'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { CIS_CODES } from '@/components/Countries'

const Register = () => {

    const [inputEmailData, setInputEmailData] = useState('')
    const [country, setCountry] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [lastName, setLastName] = useState('')
    const [inputPasswordData, setInputPasswordData] = useState('')
    const router = useRouter()

    const handleRegister = async () => {
        try {
            await api.post('/auth/register', {
                email: inputEmailData,
                password: inputPasswordData,
                username,
                lastName,
                phone: country + phone
            })

            toast.success('Успешная регистрация!')
            router.replace('/auth/login')
        } catch (error) {
            console.error(error)
            toast.error('Ошибка регистрации')
        }
    }

    return (
        <div className='p-10'>
            <Toaster />
            <img src="/slide.svg" alt="slide" />
            <div className="flex flex-col mt-10 justify-center items-center gap-6">
                <h1 className='login-text'>Регистрация в TableGO</h1>
                <div className='gap-8 flex flex-col'>
                    <div className='flex flex-col gap-10'>
                        <input
                            className='login-input'
                            type="text"
                            placeholder='Имя'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <input
                            className='login-input'
                            type="text"
                            placeholder='Фамилия'
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
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
                        <div className='flex '>
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className='outline-none rounded px-2'
                            >
                                {CIS_CODES.map((c) => (
                                    <option key={`${c.code}-${c.name}`} value={c.code}>
                                        {c.flag} {c.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                className='login-input'
                                type="text"
                                placeholder='Номер телефона'
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <input className='w-5 h-5' type="checkbox" />
                        <p>Я даю согласие на использование моих данных.</p>
                    </div>
                    <button onClick={handleRegister} className='login-button'>Зарегистрироваться</button>
                </div>
                <div>
                    <p className='text-lg font-medium'>Уже есть аккаунт? <span onClick={() => router.push('/auth/login')} className='text-[#BE8A60] cursor-pointer'>Войти.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Register