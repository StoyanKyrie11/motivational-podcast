
const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col">
            <div className="relative mx-auto my-5 animate-spin w-[18rem] h-[18rem] border-[1rem] border-current border-t-transparent text-pink-600 rounded-full" role="status" aria-label="loading">
            </div>
            <span className="relative mx-auto">Loading...Please, wait!</span>
        </div>
    );
};

export default LoadingSkeleton;
