import HrisiImage from '@public/HRISI-111.webp';
import Image from 'next/image';

function Hero() {
    return (
        <div className='position-relative'>
            <Image src={ HrisiImage } width={ 2500 } height={ 1240 } alt="My Motivational Podcast" className="object-cover" priority={ true } />
        </div>
    );
}

export default Hero;
