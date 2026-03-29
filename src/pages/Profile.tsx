'use client'

import Header from '@/features/Header/Header'
import { fetchMe, logout } from '@/store/userSlice'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import './Profile.css'
import { CIS_CODES } from '@/components/Countries'
import api from '@/api/api'
import toast, { Toaster } from 'react-hot-toast'
import Footer from '@/features/footer/Footer'

const phoneLengths: Record<string, number> = {
    '+996': 9,
    '+7': 10,
    '+998': 9,
    '+992': 9,
    '+993': 8,
    '+994': 9,
    '+374': 8,
    '+375': 9,
    '+373': 8
}

const Profile = () => {
    const dispatch = useAppDispatch()
    const { data, loading } = useAppSelector(state => state.user)

    const [username, setUsername] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('+996')

    // useEffect(() => {
    //     dispatch(fetchMe())
    // }, [])

    useEffect(() => {
        if (data) {
            setUsername(data.username || '')
            setLastName(data.lastName || '')
            setEmail(data.email || '')

            if (data.phone) {
                const found = CIS_CODES.find(c =>
                    data.phone.startsWith(c.code)
                )

                if (found) {
                    setCountry(found.code)
                    setPhone(data.phone.replace(found.code, ''))
                } else {
                    setPhone(data.phone)
                }
            }
        }
    }, [data])

    const handlePhoneChange = (value: string) => {
        const digits = value.replace(/\D/g, '')
        const maxLength = phoneLengths[country] || 10

        if (digits.length <= maxLength) {
            setPhone(digits)
        }
    }

    const fullPhone = `${country}${phone}`

    if (loading) return <p>Загрузка...</p>

    const handleUpdateProfile = async () => {
        try {
            const res = await api.patch('/auth/me', {
                username: username,
                lastName: lastName,
                email: email,
                phone: fullPhone
            })
            toast.success('Профиль обновлен!')
        } catch (error) {
            console.error('Error updating profile:', error)
            toast.error('Ошибка обновления профиля')
        }
    }

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout')
            // dispatch(logout())
            toast.success('Вы вышли из аккаунта')
            setEmail('')
            setUsername('')
            setLastName('')
            setPhone('')
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    return (
        <div>
            <Header />
            <Toaster />

            <div className='p-5 flex justify-center items-center gap-5'>
                <h1 className='profile-user'>
                    {username.charAt(0).toUpperCase()}
                </h1>
            </div>

            <div className='flex flex-col gap-3 p-5'>
                <input
                    type="text"
                    placeholder="Имя"
                    value={username}
                    className='profile-input'
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Фамилия"
                    value={lastName}
                    className='profile-input'
                    onChange={(e) => setLastName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className='profile-input'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className='flex gap-2'>
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
                        type="text"
                        placeholder="Телефон"
                        value={phone}
                        className='profile-input flex-1'
                        onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                </div>

                <p className='text-sm text-gray-500'>
                    Полный номер: {fullPhone}
                </p>

                <div className='flex flex-col gap-5'>
                    <button onClick={handleUpdateProfile} className='bg-[#d4894b] text-white font-semibold p-5 rounded-[15px]'>
                        Сохранить
                    </button>
                    <button onClick={handleLogout} className='bg-[#d50e0e] text-white font-semibold w-fit p-3 rounded'>
                        Выйти
                    </button>
                </div>
            </div>
            <footer className=''>
                <Footer />
            </footer>
        </div>
    )
}

export default Profile