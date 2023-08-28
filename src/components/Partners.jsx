import { default as imageFive, default as imageOne, default as imageThree } from '@public/HRISI-111.webp';
import { default as imageFour, default as imageSix, default as imageTwo } from '@public/HRISI-222.webp';
import Slider from './Slider';

const partners = [
    // Add your partner data here
    { id: 1, name: 'Partner 1', logo: imageOne },
    { id: 2, name: 'Partner 2', logo: imageTwo },
    { id: 3, name: 'Partner 3', logo: imageThree },
    { id: 4, name: 'Partner 4', logo: imageFour },
    { id: 5, name: 'Partner 5', logo: imageFive },
    { id: 6, name: 'Partner 6', logo: imageSix },
    // Add more partners as needed
];

const Partners = () => {
    return (
        <section className='bg-blue-300 py-10 shadow-inner justify-center'>
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-2 text-center">My partners</h2>
                <h3 className='text-md font-medium text-center italic'>'What my partners have to say for me'</h3>
                <Slider />
            </div>
        </section>
    );
};

export default Partners;
