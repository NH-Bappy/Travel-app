import React from 'react';
import CampSite from './CampSite';
import Image from 'next/image';

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen Pasuruan"
          peopleJoined="50k joined"
        />

        <CampSite
          backgroundImage="img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the wilderness"
          peopleJoined="100k joined"
        />

        <CampSite
          backgroundImage="img-3"
          title="Beach View Camp"
          subtitle="Escape the ordinary—wake up to waves"
          peopleJoined="150k joined"
        />
      </div>
      <div className="">
        <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className='text-2xl md:text-3xl 2xl:text-6xl leading-[120%] capitalize text-white'><strong>Travel unveils new horizons</strong> even when the mind feels trapped?
            </h2>
            <p className='text-sm xl:text-base mt-5 text-white'>
            Travel has a way of breathing life into weary souls, offering quiet moments of solace amid the chaos within. Each new horizon carries a promise—of change, of renewal, of something beyond the weight of the present. The world is vast, filled with unseen beauty and untold stories, reminding us that even in our darkest moments, there is still light waiting to be found
            </p>
            <Image
            src="/quote.svg"
            alt='quote.svg'
            width={186}
            height={219}
            className='absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0'
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Camp;