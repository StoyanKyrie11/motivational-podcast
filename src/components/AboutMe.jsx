
"use client";

import { myData } from 'data/staticData.js';

const AboutMe = () => {
    return (
        <div id="about-me-section" className='grid grid-cols-1 grid-rows-1 text-center'>
            <h1 className="text-3xl self-center italic font-semibold pb-3">{ myData.title }</h1>
            <article className='leading-[2rem] font-medium pb-5'>
                { myData.body }
            </article>
        </div>
    );
};

export default AboutMe;
