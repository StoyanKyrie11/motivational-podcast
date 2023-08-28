"use client";

import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider = () => {

    /* Insert the proper images here + Finish with the Form and distribute the 
    text in the About me section appropriately - 2 columns + an image on each side */
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [ currIndex, setCurrIndex ] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    };

    const moveToNext = slideIndex => {
        setCurrIndex(slideIndex);
    };

    const navHandler = slideIndex => {
        moveToNext(slideIndex);
    };

    return (
        <div className='max-w-[100vw] h-[80vh] w-[80vw] m-auto py-4 px-4 relative group'>
            <div
                style={ { backgroundImage: `url(${slides[ currIndex ].url})` } }
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>

            {/* Backwards */ }
            <div className='hidden group-hover:block transition duration-500 hover:scale-125 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={ prevSlide } size={ 30 } className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' />
            </div>

            {/* Forward */ }
            <div className='hidden group-hover:block transition duration-500 hover:scale-125 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={ nextSlide } size={ 30 } className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' />
            </div>

            <div className='flex top-3 justify-center py-2'>
                { slides.map((_, slideIndex) => (
                    <div
                        key={ slideIndex }
                        onClick={ navHandler }
                        className='text-xl cursor-pointer'
                    >
                        <RxDotFilled className={ `transition-all rounded-full  ${currIndex === slideIndex && "transform bg-slate-200 dark:bg-violet-400 transition duration-200 hover:scale-125"}` } />
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Slider;
