'use client'

import Category from '@/features/Category/Category'
import Footer from '@/features/footer/Footer'
import Header from '@/features/Header/Header'
import NearbyCard from '@/features/NearbyCard/NearbyCard'
import SearchInput from '@/features/SearchInput/SearchInput'
import SpecialCard from '@/features/SpecialCard/SpecialCard'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Header />
        <SearchInput />
        <Category />
        <NearbyCard />
        <SpecialCard />
        <Footer />
    </div>
  )
}

export default HomePage