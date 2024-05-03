import UserProfilCard from '@/components/user/user-profil-card'
import UserProfilCardSkeleton from '@/components/user/user-profil-card-skeleton'
import { NextPage } from 'next'
import React, { Suspense } from 'react'

const page: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Suspense fallback={<UserProfilCardSkeleton />}>
        <UserProfilCard />
      </Suspense>
    </div>
  )
}

export default page