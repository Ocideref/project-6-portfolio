'use client';
import Link from 'next/link'
import React from 'react'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsGithub, BsInstagram, BsPinterest, BsSpotify } from 'react-icons/bs';
import SvgLogo from '../Logo/logo';

export const Navbar = () => {
  return (
    <>
        <header className='w-11/12 mx-auto py-8 font-medium flex items-center justify-between'>
            <nav className='flex'>
                <SvgLogo className='w-8 mr-4'/>
                <h1 className='font-bold text-3xl'>Fango</h1>
            </nav>

            <nav className='flex items-center justify-between'>
                <Link className='mr-4' href="/">Home</Link>
                <Link className='mr-4' href="/about">About Me</Link>
                <Link className='mr-4' href="/projects">Projects</Link>
                <Link className='mr-4' href="/contact">Contact</Link>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
