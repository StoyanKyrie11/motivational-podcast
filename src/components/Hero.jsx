import HrisiImage from '@public/hrisi_cover_website_two.webp';
import Image from 'next/image';

function Hero() {
    return (
        <div className='grid grid-cols-1 justify-items-center overflow-hidden'>
            <Image src={ HrisiImage } sizes={ '1024px' } width={ 1024 } height={ 960 } alt="Motivational Podcast" placeholder='blur' className="object-contain ring-1 ring-purple-600 dark:ring-red-300 rounded-md mt-[0.125rem] mb-3 shadow-md shadow-pink-300" priority />
        </div>
    );
}

export default Hero;
