'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Brand Section */}
          <div className="text-2xl font-bold">
            <Link href="/">FOODIES</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          
          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto right-0 sm:right-auto bg-gray-500 sm:bg-transparent p-4 sm:p-0`}
          >
            <li>
              <Link href="/" className="hover:text-gray-200 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200 block">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
