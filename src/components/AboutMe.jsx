
"use client";

import { myData } from 'data/staticData.js';

const AboutMe = () => {
    return (
        <div className='flex flex-col flex-auto text-center gap-2 pb-5'>
            <h2 className="self-center py-3 italic font-semibold">{ myData.title }</h2>
            <article className='pb-5'>
                { myData.body }
            </article>
        </div>
    );
};

export default AboutMe;
