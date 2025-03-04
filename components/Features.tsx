import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import FeatureItems from './FeatureItems'
import { features } from 'process'

const Features = () => {
  return (
    <section className="flex-col flex items-center justify-center overflow-hidden bg-[url('/feature-bg.png')] bg-center bg-cover bg-no-repeat py-24">
      <div className="max-container px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end ">
        {/* left */}
        <div className="flex flex-1 lg:min-h-[900px]">
        <Image
        src="/phone.png"
        alt='phone.png'
        width={440}
        height={1000}
        className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20'
        />
        </div>
        {/* right */}
        <div className="z-20 flex flex-col w-full lg:w-[60%]">
        <div className="relative">
          <Image
          src="/camp.svg" 
          alt='camp.svg'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-28px] w-12 lg:w-[59px]'
          />
          <h2 className='capitalize text-[40px] font-semibold leading-[120%] lg:text-[64px] lg:font-semibold lg:leading-[120%]'>our Features</h2>
        </div>
        <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
          {FEATURES.map((feature) => (
            <FeatureItems
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description ={feature.description}
            />
          ))}
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Features