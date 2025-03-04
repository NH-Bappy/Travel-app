import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flex items-center justify-center w-full flex-col pb-[100px]'>
      <div className=" max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-[#292C27] pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">

        <div className="z-20 flex flex-1 flex-col w-full items-start justify-center gap-12">
        <h2 className='text-[40px] font-semibold leading-[120%] lg:text-[64px] lg:font-semibold lg:leading-[120%] xl:max-[320px]: font-sans'>get for free now!</h2>
        <p className='text-base text[#EEEEEE] font-sans'>Available on ioS and Android</p>
        <div className="w-full flex flex-col gap-3 whitespace-nowrap lg:flex-row">
          <Button
          type='button'
          title='App Store'
          icon='/apple.svg'
          className='border-white bg-white px-8 py-3 text-[#30AF5B]'
          full
          />

          <Button
          type='button'
          title='Plat Store'
          icon='/android.svg'
          className='border-gray-20 bg-[#292C27] px-8 py-5 text-white'
          full
          />
        </div>
        </div>
        {/* right */}
        <div className="flex flex-1 items-center justify-end">
          <Image 
          src="/phones.png"
          alt='phone'
          width={550}
          height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp