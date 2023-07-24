// react-icons
import { TfiClose } from "react-icons/tfi";

import ActiveLink from "./ActiveLink";
import SearchCollege from "../Shared/SearchCollege";

const Drawer = ({ isOpen, toggle }) => {
    return (
        <>
            <div style={isOpen ? { clipPath: 'circle(200% at 100% 0)' } : { clipPath: 'circle(0% at 100% 0)' }} className={`lg:hidden fixed bg-white origin-top-right text-white w-[250px] h-screen top-0 right-0 z-50 px-6 transition-all duration-300 ease-in`}>

                {/* close button */}
                <button onClick={toggle} className='absolute top-0 right-0 p-5'>
                    <TfiClose className="text-red text-bold" />
                </button>

                <ul className='pt-16 flex flex-col gap-3'>
                    <li>
                        <ActiveLink to='/'>
                            Home
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/colleges'>
                            Colleges
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/admission'>
                            Admission
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to='/my_college'>
                            My College
                        </ActiveLink>
                    </li>

                    <div className="w-full">
                        <SearchCollege />
                    </div>
                </ul>
            </div>
            {/* overlay */}
            <div onClick={toggle} className={`fixed w-full h-screen top-0 left-0 z-30 bg-[rgba(0,0,0,.5)] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        </>
    );
};

export default Drawer;