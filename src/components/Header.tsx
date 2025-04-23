/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import Button from './Button'
// import Image from 'next/image'

interface props {
    src: any,
    alt: string,
    number: string
}

const Header = ({ src, alt, number }: props) => {

    const liItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Gallery",
            path: "/gallery"
        },
        {
            label: "Contact Us",
            path: "/contact"
        }
    ]


  return (
    // <div>
    //   <header className='flex bg-amber-900 w-full px-10 py-9'>
    //     <section className='flex justify-start items-center gap-4 w-full'>
    //     {/* Logo section */}
    //         {/* <Image width={40} height={40} src={}/> */}
    //         <div>
    //             <img className='rounded' src={src} alt={alt} width={40}/>
    //         </div>

    //         <div>
    //             <nav className='ml-10'>
    //                 <ul className='flex justify-center items-center gap-4 text-white font-semibold w-full'>
    //                     {liItems.map((item, index)=>(
    //                         <li className='duration-200 ease-in-out hover:text-orange-400' key={index}><Link href={item.path}>{item.label}</Link></li>
    //                     ))}
    //                 </ul>
    //             </nav>
    //         </div>
    //     </section>
    //     <section className='flex items-center gap-2 px-4'>
    //         <Button customStyle='' label="Donate Now" />
    //         <p className='whitespace-nowrap text-white font-semibold w-full'>+91-{number}</p>
    //     </section>
    //   </header>
    // </div>
    <div>
        <header className="flex flex-col md:flex-row bg-amber-900 w-full px-6 py-4 md:py-6 md:px-10 items-center justify-between gap-4">
            {/* Left: Logo + Navigation */}
            <section className="flex flex-col md:flex-row justify-start items-center gap-4 w-full">
            {/* Logo */}
            <div>
                <img className="rounded" src={src} alt={alt} width={40} />
            </div>

            {/* Nav */}
            <nav className="mt-2 md:mt-0 md:ml-10">
                <ul className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-white font-semibold w-full text-sm md:text-base">
                {liItems.map((item, index) => (
                    <li className="duration-200 ease-in-out hover:text-orange-400" key={index}>
                    <Link href={item.path}>{item.label}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            </section>

            {/* Right: Donate button + number */}
            <section className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-sm md:text-base">
            <Button customStyle="" label="Donate Now" />
            <p className="whitespace-nowrap text-white font-semibold">+91-{number}</p>
            </section>
        </header>
    </div>

  )
}

export default Header
