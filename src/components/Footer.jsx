const Footer = () => {
    return (
        <>
            <footer className="text-center text-gray-500 text-sm">
                <span className="text-navbar-bg-color font-bold text-lg mr-2">
                    The Motivational Podcast
                </span>
                <p className="text-light-mode-bg-color flex flex-col align-center justify-center">
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
