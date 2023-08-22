import { useTheme } from 'next-themes';

import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";

const themeMode = {
    'light': 'light',
    'dark': 'dark'
};

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    const handleLightMode = () => {
        setTheme(themeMode.light);
    };

    const handleDarkMode = () => {
        setTheme(themeMode.dark);
    };

    return (
        <>
            {/* Extract the utility classes into reusable tailwind layer directives */}
            {theme === themeMode.dark ? (
                <li aria-label="theme-mode" className='hover:text-blue-400 transition-shadow justify-self-center sm:justify-self-end sm:self-center'>
                    <BsSun size={25} cursor="pointer" onClick={handleLightMode} className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"' />
                </li>
            ) : (
                <li aria-label="theme-mode" className='hover:text-emerald-600 transition-shadow justify-self-center sm:justify-self-end sm:self-center'>
                    <FiMoon size={25} cursor="pointer" className="h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" onClick={handleDarkMode} />
                </li>
            )}
        </>
    );
};

export default ThemeChanger;
