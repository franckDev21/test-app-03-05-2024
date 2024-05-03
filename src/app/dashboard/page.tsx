/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import React from 'react'
import StatisticRow from "@/components/dashboard/statistic-row"
import { DashboardTable } from '@/components/dashboard/dashboard-table'

import SideBar from './sidebar'
import TabHeader from '@/components/dashboard/tab-header'
import StatisticTable from '@/components/dashboard/statistic-table'
import CartListBus from '@/components/dashboard/card-list-bus'

const page: NextPage = () => {
  return (
    <div className='pt-5 container mx-auto'>
      {/* statistic  */}
      <StatisticRow />
      <div className='grid lg:grid-cols-4 gap-4 pt-10'>
        <div className='flex-grow lg:col-span-3'>
          <div className=' space-y-2'>
            {/* statistic table */}
            <StatisticTable />

            {/* table */}
            <div className='pt-5'>
              <TabHeader />
              <DashboardTable className='hidden md:block' />
              <CartListBus className='md:hidden' />
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default page