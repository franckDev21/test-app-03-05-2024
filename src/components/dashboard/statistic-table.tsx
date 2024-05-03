import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiRefreshCcw } from 'react-icons/fi'
import { IoMdRefresh } from 'react-icons/io'
import { MdTimer } from "react-icons/md"

export default function StatisticTable() {
  return (
    <>
      <h2 className='font-bold'>Les voyages</h2>
      <div className='gap-3 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>

        <div className='bg-white border rounded-lg p-4 flex items-center justify-between'>
          <div className='space-y-1 flex flex-col'>
            <span className=' text-2xl font-bold'>05</span>
            <span className=' text-sm text-gray-500'>Terminer</span>
          </div>
          <FaRegCheckCircle className='text-2xl text-green-600' />
        </div>

        <div className='bg-white border rounded-lg p-4 flex items-center justify-between'>
          <div className='space-y-1 flex flex-col'>
            <span className=' text-2xl font-bold'>05</span>
            <span className=' text-sm text-gray-500'>En cours</span>
          </div>
          <FiRefreshCcw className='text-2xl text-orange-600' />
        </div>

        <div className='bg-white border rounded-lg p-4 flex items-center justify-between'>
          <div className='space-y-1 flex flex-col'>
            <span className=' text-2xl font-bold'>05</span>
            <span className=' text-sm text-gray-500'>En embarcation</span>
          </div>
          <IoMdRefresh className='text-3xl text-violet-600' />
        </div>

        <div className='bg-white border rounded-lg p-4 flex items-center justify-between'>
          <div className='space-y-1 flex flex-col'>
            <span className=' text-2xl font-bold'>05</span>
            <span className=' text-sm text-gray-500'>Restant</span>
          </div>
          <MdTimer className='text-2xl text-red-500' />
        </div>
      </div>
    </>
  )
}
