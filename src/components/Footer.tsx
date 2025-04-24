import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

interface NavItem {
  label: string;
  path: string;
}

interface props {
  liItems: NavItem[]
}


const Footer = ({ liItems }: props) => {
  return (
    <div className='flex w-full h-96 bg-sky-800 px-40 py-10'>
      <section className=' w-[30%]'>
          <Link href="/">
            <Image 
              width={100}
              height={100}
              src="/images/logo.png"
              alt='logo'
              className='rounded-lg'
            />
          </Link>
          <h3 className='font-semibold text-white mt-4'>Rangrez Community</h3>
      </section>
      <section className='w-[30%]'>
        <h2 className='text-white text-lg font-semibold'>Quick Links</h2>
        <ul className='text-white text-base' >
        {liItems.map((item: { path: string | UrlObject; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined }, index: React.Key | null | undefined) => (
            <li className="duration-200 ease-in-out hover:text-orange-400 mt-5" key={index}>
            <Link href={item.path}>{item.label}</Link>
            </li>
        ))}
        </ul>
      </section>
    </div>
  )
}

export default Footer
