import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Bus from "@/models/bus"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaBus } from "react-icons/fa"

interface CardBusProps {
  className ?: string
  bus: Bus
}

export function CardBus({ bus, className = '' }: CardBusProps) {
  return (
    <Card className=" relative">
      <span className={`px-3 py-1 absolute top-2 right-4
       rounded ${bus.status ? 'bg-green-100 text-green-600':'bg-red-100 text-red-400'}`}>
        {bus.status ? 'Active':'Arrêt'}
      </span>
      <CardHeader>
        <CardTitle>
          <div className="flex space-x-4">
          <span className='w-[35px] h-[35px] flex-none rounded-full bg-gray-200 flex justify-center items-center'>
            <FaBus className=' text-xl text-gray-500' />
          </span>
          <div className='flex flex-col space-y-1'>
            <span className='uppercase text-sm'>{bus.name}</span>
            <span className=' text-xs'>{bus.typeOil}</span>
          </div>
        </div>
        </CardTitle>
        <CardDescription className=" flex items-center space-x-1">
          <span className=' px-2 text-xs py-0.5 rounded-md bg-violet-600 text-white'>{bus.trajet.start}</span>
          <FaArrowRightLong className=' text-gray-500' />
          <span className=' px-2 text-xs py-0.5 rounded-md bg-violet-600/35 '>{bus.trajet.end}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start">
        <div className="flex flex-col space-y-2">
          <span>Date de depart</span> 
          <span className='text-gray-500'>{bus.startDate}</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span>Heure</span> 
          <span className='text-gray-500'>{bus.time}</span>
        </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Voir les details du bus</Button>
      </CardFooter>
    </Card>
  )
}
