"use client";

import microphone from '@public/microphone2.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeChanger from './ThemeChanger';

const Navbar = () => {

    const [ show, setShow ] = useState(true);

    const showHideNavbar = () => {
        if (window.scrollY > 400) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', showHideNavbar);

        return () => {
            window.removeEventListener('scroll', showHideNavbar);
        };
    }, []);

    return (
        <nav className={ `${show && 'w-full bg-navbar-color dark:bg-navbar-color sticky top-0 transition ease-out hover:ease-in duration-400'}` } >
            <ul className='grid grid-cols-5 gap-6 grid-rows-1 text-center justify-evenly p-4'>
                <li>
                    <Image src={ microphone } sizes={ '1000px' } width='auto' height={ 40 } alt="microphone" placeholder='blur' priority />
                </li>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-white dark:hover:text-blue-500 sm:self-center transition-colors hover:bg-gradient-to-r hover:from-violet-300 hover: to-yellow-400">
                    <Link href="#about-me-section" scroll={ true }>
                        За мен
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-white dark:hover:text-blue-500 sm:self-center transition-colors hover:bg-gradient-to-r hover:from-violet-300 hover: to-yellow-400">
                    <Link href="#contacts-section" scroll={ false }>
                        Контакти
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-white dark:hover:text-blue-400 sm:self-center transition-colors hover:bg-gradient-to-r hover:from-violet-300 hover: to-yellow-400">
                    <Link href="#faq-section" scroll={ false }>
                        FAQ
                    </Link>
                </li>

                <ThemeChanger />

            </ul>
            <hr className='border-black dark:border-white border-[1.25px]' />
        </nav >
    );
};

export default Navbar;;
