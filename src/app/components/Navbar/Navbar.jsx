'use client';
import Link from 'next/link'
import React from 'react'
import './Navbar.css'

import { Footer, Avatar } from 'flowbite-react';

import { BsLinkedin, BsGithub, BsPinterest, BsSpotify } from 'react-icons/bs';
import SvgLogo from '../Logo/logo';

export const Navbar = () => {
  return (
    <>
        <header className='w-11/12 mx-auto py-8 font-medium flex items-center justify-between'>
            <nav>
                <Link className='logo flex mr-4' href="/">
                    <SvgLogo className='w-8 mr-4'/>
                    <h1 className='font-bold text-3xl'>Fango</h1>
                </Link>
            </nav>

            <nav className='flex items-center justify-between'>
                <Link className='mr-4 page-link flex items-center justify-between' href="/about">
                    <Avatar
                        alt="avatar of Federrico"
                        img="../../assets/images/fede-avatar.png"
                        rounded
                        className='mr-3'
                    />
                    About Me
                </Link>
                <Link className='mr-4 page-link' href="/projects">Projects</Link>
                <Link className='mr-4 page-link' href="/contact">Contact</Link>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon
                        href="https://github.com/Ocideref"
                        icon={BsGithub}
                        className='github-icon'
                    />
                    <Footer.Icon
                        href="https://www.linkedin.com/in/federico-an%C3%ADbal-gonz%C3%A1lez-fern%C3%A1ndez-b6a270108/"
                        icon={BsLinkedin}
                        className='linkedin-icon'
                    />
                    <Footer.Icon
                        href="https://pin.it/53WC7ta"
                        icon={BsPinterest}
                        className='pinterest-icon'
                    />
                    <Footer.Icon
                        href="https://open.spotify.com/user/12134402748?si=8a128208d6254f45"
                        icon={BsSpotify}
                        className='spotify-icon'
                    />
                 </div>
            </nav>
        </header>
    </>
  )
}
