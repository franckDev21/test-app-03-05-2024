'use client'

import { link } from 'fs'
import React, { useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'

interface TabHeaderProps {
  className ?: string
  onClick ?: (value: string) => void
}

export type TableHeaderLink = {
  id: number
  value: string
  active: boolean
}

const tabLinks : TableHeaderLink[] = [
  {
    id: 1,
    value: 'Depart imminents',
    active: true,
  },
  {
    id: 2,
    value: 'Arrivé imminents',
    active: false,
  },
  {
    id: 3,
    value: 'Réservation',
    active: false,
  },
  {
    id: 4,
    value: 'Ticket',
    active: false,
  }
]

export default function TabHeader({
  className = '',
  onClick = () => {}
}: TabHeaderProps) {
  const [links,setLinks] = useState<TableHeaderLink[]>(tabLinks)

  const handleClick = (id: number) => {
    onClick(links.find(link => id === link.id)!.value)
    setLinks(links.map(link => {
      return {...link, active: link.id === id}
    }))
  }
  return (
    <div className={`flex x:items-center flex-wrap space-y-4 xl:space-y-4 flex-col xl:flex-row justify-between ${className}`}>
      <div className='space-y-4'>
        {links.map(link => (
          <span 
            key={link.id} 
            onClick={() => handleClick(link.id)} 
            className={`px-4 inline-block py-1 cursor-pointer ${link.active ? 'bg-violet-600 text-white':'text-gray-700 bg-white'} rounded-md  text-sm font-semibold`}>
            {link.value}
          </span>)
        )}      
      </div>
      <div className=' sm:space-x-4 items-center flex'>
        <label htmlFor="search" className=' relative flex items-center justify-between'>
          <IoSearch className=' text-gray-600 absolute left-4' />
          <input id="search" placeholder='Recherche' type="text" className='border rounded-md pl-10 pr-4 py-2' />
        </label>
        <BsArrowsFullscreen className=' hidden md:inline-block cursor-pointer text-xl text-violet-600' />
      </div>
    </div>
  )
}
