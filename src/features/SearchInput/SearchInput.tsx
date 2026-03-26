'use client'
import React, { useState } from 'react'

const SearchInput = () => {

    const [searchInput, setSearchInput] = useState('')

    const searchBtn = () => {
        
    }

    return (
        <div className='flex items-center justify-around max-w-md mx-auto'>
            <div className='flex gap-[5px] bg-[#EDEDED] rounded-[10px] outline-none px-3 py-3 w-[325px] h-[50px]'>
                <img src="/search-normal.svg" alt="" />
                <input
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder='Поиск кафе'
                    className='outline-none text-lg'
                />
            </div>

            <button onClick={searchBtn} className='bg-[#BE8A60] outline-none w-[50px] h-[50px] flex items-center justify-center rounded-[10px]'>
                <img src="/setting-4.svg" alt="filter" className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchInput