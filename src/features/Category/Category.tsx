'use client'
import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  'На природе',
  'Комфортный',
  'Для работы',
  'Тусовочный',
]

const Category = () => {
  return (
    <div className="overflow-hidden px-4 mt-5">
      <motion.div
        className="flex gap-3 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -150, right: 0 }}
        whileTap={{ scale: 0.98 }}
      >
        {categories.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#BE8A60] px-4 py-3 rounded-[7px] text-white whitespace-nowrap"
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

export default Category