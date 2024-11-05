import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

const landingDesignImage = () => {
  return (
    <div className=" min-h-screen">
      <ContainerScroll
        titleComponent={
          <div className="">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Collaborative Team</h1>
            <p className='text-base md:text-lg text-white text-center mb-4 '>Discover the Talented Professionals who will guide your musical Journey</p>
          </div>
        }
      >
        <div className="h-full w-full bg-transparent flex items-center justify-center text-white text-4xl font-bold">
          <Image
          src="/gmail.webp"  
          width={1100}
          height={500}
          style={{objectFit: "contain"}}
          alt="Picture of the author"      />
            
          
        </div>
      </ContainerScroll>
    </div>
  )
}

export default landingDesignImage
