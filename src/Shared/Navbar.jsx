import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Drawer from '../components/Drawer';

// react-icons
import { HiBars3 } from "react-icons/hi2";

// logo
// import Logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed w-full h-20 flex items-center justify-center lg:py-0 z-50 transition-all duration-300 ease-in-out ${navState ? 'shadow-lg bg-white' : 'shadow-lg lg:shadow-none bg-white bg-opacity-50'}`}>
            <div className="container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 text-xl font-bold">
                        {/* <img src={Logo} alt="campus connect logo" /> */}
                        Campus Connect
                    </Link>

                    {/* toggle button */}
                    <button onClick={toggleNavbar} className='block lg:hidden text-black'>
                        <HiBars3 className='text-4xl' />
                    </button>

                    {/* Navigation links */}
                    <div className='hidden lg:flex items-center gap-16'>
                        <Navigation />
                    </div>

                    {/* Responsive menu button */}
                    <Drawer isOpen={isOpen} toggle={toggleNavbar} />
                </nav>
            </div >
        </header >
    );
};

export default Navbar;