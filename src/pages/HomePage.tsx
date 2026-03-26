import Category from '@/features/Category/Category'
import Header from '@/features/Header/Header'
import NearbyCard from '@/features/NearbyCard/NearbyCard'
import SearchInput from '@/features/SearchInput/SearchInput'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Header />
        <SearchInput />
        <Category />
        <NearbyCard />
    </div>
  )
}

export default HomePage