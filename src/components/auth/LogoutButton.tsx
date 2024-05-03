'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { logout } from '@/services/auth2'
import { ResponseStatus } from '@/types/auth'
import { useRouter } from 'next/navigation'

interface LogoutButtonProps {
  className ?: string
  label ?: string
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className = '', label = 'Se déconnecter' }) => {

  const router = useRouter()

  const logoutUser = async () => {
    toast.promise<ResponseStatus>(
      logout(),
      {
        loading: 'Loading',
        success: (data) => {
          router.push('/auth/login')
          return `Successfully  ${data.message}`
        },
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    )
  }
  
  return (
    <Button className={`${className}`} size='lg' onClick={logoutUser}>{label}</Button>
  )
}

export default LogoutButton