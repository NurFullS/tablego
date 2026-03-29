'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { fetchMe } from '@/store/userSlice'

export default function AuthInit() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMe())
  }, [dispatch])

  return null
}