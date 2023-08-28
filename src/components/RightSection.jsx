
const RightSection = ({ imageSrc, altText, content }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start py-10 px-6 md:py-16 md:px-12 lg:px-24 xl:px-32">
            <div className="md:w-1/2 md:ml-6 order-2 md:order-1">
                <img src={ imageSrc } alt={ altText } className="rounded-lg shadow-md max-w-full h-auto" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 order-1 md:order-2">
                <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    { content }
                </p>
            </div>
        </div>
    );
};

export default RightSection;
