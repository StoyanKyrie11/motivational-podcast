import HrisiImage from '@public/HRISI-111.webp';
import Image from 'next/image';

function Hero() {
    return (
        <div className='grid grid-cols-1 justify-items-center overflow-hidden pb-2'>
            <Image src={ HrisiImage } sizes={ '3000px' } width={ 3000 } height={ 1300 } alt="Motivational Podcast" placeholder='blur' className="w-[80vw] object-contain ring-1 ring-purple-600 dark:ring-red-300 rounded-md mt-5" priority />
        </div>
    );
}

export default Hero;
