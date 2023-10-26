'use client';
import Link from 'next/link'
import React from 'react'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsGithub, BsInstagram, BsPinterest, BsSpotify } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <>
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <h1>Fango</h1>
            </nav>

            <nav className='flex items-center justify-between'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/projects">Contact</Link>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon
                        href="#"
                        icon={BsInstagram}
                    />
                    <Footer.Icon
                        href="#"
                        icon={BsGithub}
                    />
                    <Footer.Icon
                        href="#"
                        icon={BsDribbble}
                    />
                    <Footer.Icon
                        href="#"
                        icon={BsPinterest}
                    />
                    <Footer.Icon
                        href="#"
                        icon={BsSpotify}
                    />
                 </div>
            </nav>
        </header>
    </>
  )
}
