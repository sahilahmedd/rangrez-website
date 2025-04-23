// components/MobileSidebar.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' }
]

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden w-full">
        {/* Toggle button (Hamburger only, outside sidebar) */}
        {!isOpen && (
            <button
            onClick={() => setIsOpen(true)}
            className="text-white p-2 fixed top-4 left-4 z-50 bg-amber-700 rounded-md shadow-md"
            >
            <Menu size={24} />
            </button>
        )}

        {/* Sidebar */}
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-amber-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Header with Menu title and X button */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-amber-800">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={24} />
            </button>
            </div>

            {/* Nav items */}
            <div className="p-6">
            <ul className="space-y-4">
                {navItems.map((item, index) => (
                <li key={index}>
                    <Link
                    href={item.path}
                    className="block hover:text-amber-400 font-medium"
                    onClick={() => setIsOpen(false)}
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </div>

  )
}
