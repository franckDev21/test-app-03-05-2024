/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { FaArrowRightLong } from 'react-icons/fa6'
import { TbBus } from "react-icons/tb"
import { FaUserFriends } from "react-icons/fa"

interface SideBarProps {
  className?: string
}

export default function SideBar({ className }: SideBarProps) {
  return (
    <div className="space-y-4">
      <div className=" space-y-2">
        <h2 className="font-bold">Derniers commentaires</h2>
        <div className="px-4 py-5 rounded bg-white border text-gray-500">
          Aucun commentaire
        </div>
      </div>
      <div className=" space-y-8 rounded bg-white border py-4 px-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Bus en fin de trajet</h2>
          <span className="space-x-1 items-center inline-flex text-violet-600 cursor-pointer">
            <span>Voir tous</span>
            <FaArrowRightLong />
          </span>
        </div>

        <div className=" justify-between items-center space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 border rounded-full inline-flex bg-gray-100 items-center justify-center">
                <TbBus className=" text-gray-500" />
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-sm">Bus N'LJODEH45</span>
                <span className=" text-xs text-gray-400">8/10/2024</span>
              </div>
            </div>

            <div className="flex text-gray-400 items-center space-x-2">
              <FaUserFriends />
              <span>34</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 border rounded-full inline-flex bg-gray-100 items-center justify-center">
                <TbBus className=" text-gray-500" />
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-sm">Bus N'LJODEH45</span>
                <span className=" text-xs text-gray-400">8/10/2024</span>
              </div>
            </div>

            <div className="flex text-gray-400 items-center space-x-2">
              <FaUserFriends />
              <span>34</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 border rounded-full inline-flex bg-gray-100 items-center justify-center">
                <TbBus className=" text-gray-500" />
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-sm">Bus N'LJODEH45</span>
                <span className=" text-xs text-gray-400">8/10/2024</span>
              </div>
            </div>

            <div className="flex text-gray-400 items-center space-x-2">
              <FaUserFriends />
              <span>34</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 border rounded-full inline-flex bg-gray-100 items-center justify-center">
                <TbBus className=" text-gray-500" />
              </span>
              <div className="flex flex-col space-y-1">
                <span className="text-sm">Bus N'LJODEH45</span>
                <span className=" text-xs text-gray-400">8/10/2024</span>
              </div>
            </div>

            <div className="flex text-gray-400 items-center space-x-2">
              <FaUserFriends />
              <span>34</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
