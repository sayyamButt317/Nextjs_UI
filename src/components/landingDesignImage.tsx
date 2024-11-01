import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

const landingDesignImage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Collaborative Editin</h1>
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
