'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">MSU HSPC</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link href="/registration" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Registration
            </Link>
            <Link href="/schedule" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Schedule
            </Link>
            <Link href="/results" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Results
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white dark:bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
          <Link href="/registration" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Registration
          </Link>
          <Link href="/schedule" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Schedule
          </Link>
          <Link href="/results" className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
}