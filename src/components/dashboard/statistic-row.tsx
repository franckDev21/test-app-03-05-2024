/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaMoneyBillAlt, FaAddressCard, FaUserFriends } from "react-icons/fa";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

export default function StatisticRow() {
  return (
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className=' px-6 py-4 rounded-lg shadow-sm xl:border text-white bg-gradient-to-r to-violet-700 from-purple-500 flex flex-col'>
        <div className='text-sm pb-2 font-[600] flex items-center space-x-2'>
          <FaMoneyBillAlt className='text-lg' />
          <span>Revenu</span>
        </div>
        <span className='text-2xl font-extrabold'>XAF 782081</span>
        <span className='text-xs'>+20.1% du mois dernier</span>
      </div>

      <div className=' px-6 py-4 rounded-lg shadow-sm xl:border text-white bg-gradient-to-r to-green-600 from-green-500 flex flex-col'>
        <div className='text-sm pb-2 font-[600] flex items-center space-x-2'>
          <BsFillTicketPerforatedFill className='text-lg' />
          <span>Total ticket vendus</span>
        </div>
        <span className='text-2xl font-extrabold'>112</span>
        <span className='text-xs'>+180.1% du mois dernier</span>
      </div>

      <div className=' px-6 py-4 rounded-lg shadow-sm xl:border text-gray-700 bg-gradient-to-r from-white to-gray-50 bg-primary flex flex-col'>
        <div className='text-sm pb-2 font-[600] flex items-center space-x-2'>
          <FaAddressCard className='text-lg' />
          <span>Reservation</span>
        </div>
        <span className='text-2xl font-extrabold'>46</span>
        <span className='text-xs text-red-500'>+19.1% du mois dernier</span>
      </div>

      <div className=' px-6 py-4 rounded-lg shadow-sm xl:border text-gray-700 bg-gradient-to-r from-white to-gray-50 bg-primary flex flex-col'>
        <div className='text-sm pb-2 font-[600] flex items-center space-x-2'>
          <FaUserFriends className='text-lg' />
          <span>Total transportés</span>
        </div>
        <span className='text-2xl font-extrabold'>5</span>
        <span className='text-xs text-green-500'>+201.1% de l'année dernière</span>
      </div>
    </div>
  )
}
