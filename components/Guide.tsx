import Image from 'next/image'


const Guide = () => {
  return (
    <section className='flex items-center justify-center flex-col font-sans'>
      <div className="px-6 lg:px-20 3xl:px-0 max-container w-full pb-24">
        <Image
        src='/camp.svg' 
        alt='camp.svg'
        width={50}
        height={50}
        />
        <p className='capitalize text-lg -mt-1 mb-3 text-red-800'>We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 capitalize">
          <h2 className='text-4xl font-semibold leading-[120%] lg:text-6xl lg:font-semibold lg:leading-[120%] xl:max-w-[390px]'>guide you to easy path</h2>
          <p className="text-base text-[#7B7B7B] lg:max-w-[520px] font-sans">With the Hilink app, getting lost is a thing 
           the past! Our offline maps ensure seamless navigation, even without an internet connection. Invite your friends and family to explore the wilderness, trek through valleys, and conquer mountain peaks with confidence and ease</p>
          </div>
      </div>

      <div className="flex items-center justify-center max-container relative w-full">
        <Image
        src="/boat.png"
        alt='boat'
        width={1440}
        height={580}
        className='w-full object-cover object-center 2xl:rounded-[40px]'
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
          src="/meter.svg"
          alt='meter.svg'
          width={16}
          height={158}
          className='h-full w-auto'
          />
          <div className="flexBetween flex-col">
          <div className="flex flex-col w-full">
            <div className="flexBetween w-full">
              <p className='text-base text-[#A2A2A2]'>Destination</p>
              <p className='text-base font-semibold text-green-500'>48 min</p>
            </div>
            <p className='text-xl font-semibold mt-2'>Aguas Calientes</p>
          </div>

          <div className="flex flex-col w-full">
              <p className='text-base text-[#A2A2A2]'>Start track</p>
            <h4 className='text-xl font-semibold mt-2 whitespace-nowrap '>wonorejo pasuruan</h4>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Guide