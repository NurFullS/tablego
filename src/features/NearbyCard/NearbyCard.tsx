'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './NearbyCard.css'

const cards = [1, 2, 3, 4]

const NearbyCard = () => {
    return (
        <div className="overflow-hidden ">
            <div className='flex justify-between gap-4 px-4 mt-3'>
                <h1 className='text-2xl font-medium'>Места рядом</h1>
                <p className='text-md text-[#BE8A60]'>Смотреть все</p>
            </div>
            <motion.div
                className="flex gap-2 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -600, right: 0 }}
            >
                {cards.map((item, index) => (
                    <div key={index}>

                        <div className="min-w-[250px] relative">

                            <div className='flex items-center gap-1 absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded-lg'>
                                <img src="/location.svg" alt="location" className="w-4 h-4" />
                                <h3 className='location-caffe text-sm'>
                                    Кыргызстан, Талас
                                </h3>
                            </div>

                            <img
                                src="/Frame 58.png"
                                alt="poster"
                                className="rounded-xl w-full h-[160px] object-cover"
                            />

                            <img
                                src="/favorite.svg"
                                alt="favorite"
                                className="absolute top-2 right-2 p-2 bg-[#BE8A60] rounded-full shadow-md"
                            />
                        </div>
                        <div className='ml-5'>
                            <div className='flex gap-[44px]'>
                                <h1 className='text-xl text-[#252627]'>Nur Cafe</h1>
                                <p className='text-[#252627]'>1.26km</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="/Vector.svg" alt="otzyv" />
                                <p className='text-[#BE8A60]'>4.9</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default NearbyCard