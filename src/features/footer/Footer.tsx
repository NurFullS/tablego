import React from 'react'

const Footer = () => {
  return (
    <div className='px-4'>
        <div className='bg-[#ffffff] shadow-2xl w-full p-5 rounded-[12px] flex justify-around'>
            <img src="/Icon.svg" alt="Home" />
            <img src="/favor.svg" alt="Favorite" />
            <img src="/archive-minus.svg" alt="Archive" />
            <img src="/user.svg" alt="User" />
        </div>
    </div>
  )
}

export default Footer