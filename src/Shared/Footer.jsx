import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-20 bg-[#41246D]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray pb-20">
                    <div className="md:col-span-2">
                        <h1 className="text-white text-5xl font-bold mb-8">Campus Connect</h1>
                        <p className="text-light-gray">Campus Connect is a cutting-edge college booking platform designed to simplify the process of finding the best college for students. With its user-friendly interface and comprehensive database, Campus Connect revolutionizes the college search experience.</p>
                    </div>

                    <div>
                        <h1 className="text-white text-2xl font-semibold mb-6">Quick Links</h1>
                        <ul className='flex flex-col gap-2 text-light-gray'>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/colleges'>
                                    Colleges
                                </Link>
                            </li>
                            <li>
                                <Link to='/admission'>
                                    Admission
                                </Link>
                            </li>
                            <li>
                                <Link to='/my_college'>
                                    My College
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-white text-2xl font-semibold mb-6">College Hours</h1>

                        <p className="text-light-gray text-sm mb-3">9 AM - 4 PM , Monday - Saturday</p>
                        <p className="text-light-gray">Aut, quae convallis minim cum ornare! Pede dictum convallis.</p>

                        <button className="btn_white mt-5">Join Us Now</button>
                    </div>
                </div>

                <div className="md:flex items-center justify-between py-6 text-center md:text-left">
                    <p className="text-light-gray mb-8 md:mb-0">Copyright © 2023 Campus Connect. All rights reserved.</p>

                    <ul className='md:flex items-center gap-2 text-light-gray'>
                        <li>
                            <Link to='/'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Terms & Condition
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;