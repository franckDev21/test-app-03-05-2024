/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <div className='container space-y-6 mx-auto py-20 justify-center text-center items-center flex flex-col'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Make your ideas, dreams and projects a reality
      </h1>
      <p className=' max-w-4xl text-gray-600 text-xl'>
      The platform serves as a virtual meeting place, encouraging creative expression, collaboration and the exchange of ideas within the HPI community.
      </p>
      <div className='flex items-center space-x-4'>
        <Button size='lg'>🚀 Try IdeaFusion ✨</Button>
        <Button size='lg' variant='secondary'>Contact us </Button>
      </div>
    </div>
  )
}
