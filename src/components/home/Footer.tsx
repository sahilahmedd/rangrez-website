/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MapPin, Phone } from 'lucide-react'
import { UrlObject } from 'url';

interface NavItem {
  label: string;
  path: string;
}

interface props {
  liItems: NavItem[]
  number: string
}


const Footer = ({ liItems,number }: props) => {
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
      <section className='w-[30%]'>
          <h3 className='text-white text-lg font-semibold'>Get in Touch</h3>
          <div className='text-white flex gap-4 mt-4'>
          <MapPin size={30}/>
          <p>Address: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, aperiam.</p>
          </div>
          <div className='text-white flex gap-4 mt-4'>
          <Phone size={20}/>
          <p><Link href={`tel:${number}`}>+91-{number}</Link></p>
          </div>
      </section>
    </div>
  )
}

export default Footer
