import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className='max-container px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>

      <div className="absolute top-120 right-0 h-screen w-screen bg-[url('/pattern-bg.png')] bg-center bg-cover md:-right-0 xl:top-30"/>
    {/* left */}
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <Image 
      src="/camp.svg"
      alt='camp.svg'
      width={50}
      height={50}
      className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
      />
      <h1 className='text-[52px] font-semibold leading-[120%] lg:text-[88px] lg:font-semibold lg:leading-[120%] lg:pt-4'>Putuk Truno Camp Area</h1>
      <p className='text-base mt-6 text-[#7B7B7B] xl:max-w-[520px]'>Camping isn’t just about pitching tents and building fires—it’s about freedom. It’s about feeling the earth beneath your feet, breathing in crisp morning air, and gazing at a sky so full of stars it makes you dream bigger. It’s about waking up to the sound of birds instead of alarms and realizing that the world is far more beautiful than we often remember</p>
      <div className="my-11 flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          {Array(5).fill(1).map((_,index) => (
            <Image
            src= "/star.svg"
            key={index}
            alt='star.svg'
            width={24}
            height={24}
            />
          ))}
        </div>
        <p className='text-base font-semibold lg:text-xl lg:font-semibold text-[#021639]'>
          198k
          <span className='text-base lg:text-lg ml-1 underline'>Ecellent Reviews</span>
        </p>
      </div>
      <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
          type='button'
          title='Download App'
          className='border-[#30AF5B] bg-[#30AF5B] px-8 py-5 text-white'
          />
          <Button
          type='button'
          title='How We Work'
          icon='/play.svg'
          className='border-[#30AF5B] bg-white px-8 py-3 text-gray-[#141414]'
          />
      </div>
    </div>
    {/* right */}
    <div className="w-1/2 relative flex flex-1 items-start">
      <div className="relative z-20 flex w-[268] flex-col gap-8 rounded-3xl bg-[#292C27] px-7 py-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
          <p className='text-base text-[#A2A2A2]'>Location</p>
          <Image 
          src="/close.svg"
          alt='close.svg'
          width={24}
          height={24}
          />
          </div>
          <p className='text-xl font-semibold text-white'>Aguas Calientes</p>
          </div>


          <div className="flex items-center justify-between">
          <div className="flex flex-col">
          <p className='text-base text-[#A2A2A2]'>Distance</p>
          <p className='text-xl font-semibold text-white'>173.28 mil</p>
          </div>

          <div className="flex flex-col">
          <p className='text-base text-[#A2A2A2]'>Elevation</p>
          <p className='text-xl font-semibold text-white'>2.040 km</p>
          </div>



          </div>
      </div>
    </div>
    </section>
  )
}

export default Hero