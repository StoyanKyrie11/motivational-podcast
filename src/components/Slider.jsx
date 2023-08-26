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

    const moveToNext = (slideIndex) => {
        setCurrIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={ { backgroundImage: `url(${slides[ currIndex ].url})` } }
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */ }
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={ prevSlide } size={ 30 } className='bg-slate-300 rounded-full p-1 text-blue-600' />
            </div>
            {/* Right Arrow */ }
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={ nextSlide } size={ 30 } className='bg-slate-300 rounded-full p-1 text-blue-600' />
            </div>
            <div className='flex top-4 justify-center py-2'>
                { slides.map((slide, slideIndex) => (
                    <div
                        key={ slideIndex }
                        onClick={ () => nextSlide(slideIndex) }
                        className='text-2xl cursor-pointer hover:text-orange-500 hover:dark:text-indigo-700'
                    >
                        <RxDotFilled className='text-pink-500' />
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Slider;
