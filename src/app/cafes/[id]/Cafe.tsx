'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Cafe = () => {

    const router = useRouter()

    return (
        <div className='p-10'>
            <header>
                <div>
                    <button onClick={() => router.push(`/`)}>
                        <img src="/slide.svg" alt="slide" />
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Cafe