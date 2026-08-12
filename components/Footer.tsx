import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterColumn from './FooterColumn'

const Footer = () => {
  return (
    <footer id='contact' className='flex items-center justify-center mb-16 border-t border-gray-100 dark:border-gray-800/80 pt-14 pb-8 bg-gray-50/80 dark:bg-zinc-950/90 text-gray-700 dark:text-gray-300 transition-colors duration-300'>
      <div className="py-6 px-6 lg:px-20 3xl:px-0 max-container w-full flex flex-col gap-12">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className='mb-10 p-2 rounded-2xl bg-white/90 dark:bg-white inline-block shadow-xs border border-gray-100 dark:border-gray-800'>
            <Image
              src="/hilink-logo.svg"
              alt='logo'
              width={85}
              height={28}
              className='hover:opacity-90 transition-opacity'
            />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className='text-sm flex flex-col gap-3 text-gray-600 dark:text-gray-400 font-sans'>
                  {columns.links.map((linkObj, idx) => {
                    const name = typeof linkObj === 'string' ? linkObj : linkObj.name;
                    const href = typeof linkObj === 'string' ? '/' : linkObj.href;
                    return (
                      <Link
                        href={href}
                        key={idx}
                        className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div key={link.label} className='flex gap-2 text-sm font-sans'>
                    <span className="whitespace-nowrap font-medium text-gray-800 dark:text-gray-300">
                      {link.label}:
                    </span>
                    <span className='whitespace-nowrap text-emerald-700 dark:text-emerald-400 font-semibold'>
                      {link.value}
                    </span>
                  </div>
                ))}
              </FooterColumn>
            </div>

            {/* social */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className='text-sm flex gap-3'>
                  {SOCIALS.links.map((link, idx) => (
                    <Link
                      href='/'
                      key={idx}
                      className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xs hover:shadow-md hover:bg-emerald-50 dark:hover:bg-zinc-800 transition-all"
                    >
                      <Image src={link} alt='social icon' width={18} height={18} className="dark:invert opacity-90 hover:opacity-100" />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 dark:border-gray-800/80'/>
        <p className='text-xs w-full text-center font-sans text-gray-500 dark:text-gray-400'>
          © 2026 Hilink Travel & Camping | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
