const Footer = () => {
    return (
        <>
            <footer className="text-center text-gray-500 text-sm border-t-2">
                <span className="text-black dark:text-white font-bold text-lg mr-2">
                    The Motivational Podcast
                </span>
                <p className="text-white dark:text-black flex flex-col align-center justify-center">
                    &copy; { new Date().getFullYear() } All Rights Reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
