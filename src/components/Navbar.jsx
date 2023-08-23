"use client";

import Link from 'next/link';

import ThemeChanger from './ThemeChanger';


const Navbar = () => {

    return (
        <nav className='bg-red-300 sticky'>
            <ul className='grid gap-6 sm:grid-cols-8 grid-rows-1 text-center justify-evenly p-4'>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-emerald-500 dark:hover:text-blue-400 sm:self-center">
                    <Link href="/">
                        За мен
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-emerald-500 dark:hover:text-blue-400 sm:self-center">
                    <Link href="#">
                        Тийзъри
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-emerald-500 dark:hover:text-blue-400 sm:self-center">
                    <Link href="#">
                        Патрньори
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-emerald-500 dark:hover:text-blue-400 sm:self-center">
                    <Link href="#">
                        Контакт
                    </Link>
                </li>
                <li className="text-black dark:text-white text-lg hover:text-opacity-75 hover:text-emerald-500 dark:hover:text-blue-400 sm:self-center">
                    <Link href="#">
                        ЧЗВ
                    </Link>
                </li>

                <button className='bg-pink-600 text-md border-2 border-black rounded-md justify-center hover:bg-opacity-20 focus:bg-cyan-600 sm:justify-self-end px-4' type='click'>Епизоди</button>
                <button className='bg-pink-600 border-2 border-black rounded-md justify-center sm:justify-self-start px-4 hover:bg-opacity-20 focus:bg-cyan-600 ' type="click">Абониране</button>

                <ThemeChanger />

            </ul>
            <hr className='border-black dark:border-white border-[1.25px]' />
        </nav>
    );
};

export default Navbar;
