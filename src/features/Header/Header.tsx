import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="w-full px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        
        <h1 className="title">
          TableGO
        </h1>
        
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <img src="/lamp.svg" alt="theme toggle" className="w-5 h-5" />
        </button>

      </div>
    </header>
  )
}

export default Header