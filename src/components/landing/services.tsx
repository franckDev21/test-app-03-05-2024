/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Services() {
  return (
    <div className="pt-14 space-y-10">
      <h1 className="scroll-m-20 pb-4 text-center text-2xl font-extrabold tracking-tight lg:text-4xl">
        Here, the extraordinary becomes the norm
      </h1>

      <div className='grid grid-cols-3 gap-3'>
        <div className=" border p-2 rounded-lg cursor-pointer">
          <div className='bg-secondary rounded-lg p-4 space-y-4'>
            <Image className="h-[250px]" src='img-1-1.svg' width={400} height={400} alt="live" />
            <div>
              <h2 className='scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl'>Bring your ideas to life</h2>
              <p>As a team, turn your boldest ideas and visions into reality. Together, we go further, faster.</p>
            </div>
          </div>
        </div>

        <div className=" border p-2 rounded-lg cursor-pointer">
          <div className='bg-secondary rounded-lg p-4 space-y-4'>
            <Image className="h-[250px]" src='img-2-2.svg' width={400} height={400} alt="live" />
            <div>
              <h2 className='scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl'>Surround yourself with excellence </h2>
              <p>Work with teams who, like you, push the boundaries of what's possible.</p>
            </div>
          </div>
        </div>

        <div className=" border p-2 rounded-lg cursor-pointer">
          <div className='bg-secondary rounded-lg p-4 space-y-4'>
            <Image className="h-[250px]" src='img-1-2.svg' width={400} height={400} alt="live" />
            <div>
              <h2 className='scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl'>Inspire and be inspired </h2>
              <p>Together, let's do it! Let's create the world we've been dreaming of.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
