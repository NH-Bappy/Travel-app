import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterColumn from './FooterColumn'
import { link } from 'fs'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center mb-24'>
      <div className="px-6 lg:px-20 3xl:px-0 max-container w-full flex flex-col gap-14">
      <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
      <Link href="/" className='mb-10'>
      <Image
      src="/hilink-logo.svg"
      alt='logo'
      width={74}
      height={24}
      />
      </Link>
      <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
        {FOOTER_LINKS.map((columns) => (
          <FooterColumn title={columns.title}>
            <ul className='text-sm flex flex-col gap-4 text-[#7B7B7B] font-sans'>
            {columns.links.map((link) => (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
            </ul>
          </FooterColumn>
        ))}

        <div className="flex flex-col gap-5">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <Link href="/" key={link.label} className='flex gap-4 md:flex-col lg:flex-row '>
                  <p className="whitespace-nowrap font-sans">
                    {link.label} :
                  </p>
                  <p className='whitespace-nowrap text-sm font-medium text[#021639] font-sans'>
                    {link.value}
                  </p>
              </Link>
            ))}
          </FooterColumn>
        </div>
            {/* social */}

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                  <ul className='text-sm flex gap-4 text-[#7B7B7B]'>
                      {SOCIALS.links.map((link) => (
                        <Link href='/' key={link}>
                            <Image src={link} alt='logo' width={24} height={24}/>
                        </Link>
                      ))}
                  </ul>
              </FooterColumn>
            </div>
      </div>
      </div>

      <div className='border bg-[#A2A2A2]'/>
      <p className='text-sm w-full text-center font-sans text-[#7B7B7B]'>
        2025 Hilink | All right reserved
      </p>
      </div>
    </footer>
  )
}

export default Footer