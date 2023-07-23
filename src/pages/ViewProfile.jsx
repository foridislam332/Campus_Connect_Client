import React from 'react';
import useAuth from '../hooks/useAuth';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";

const ViewProfile = () => {
    const { user } = useAuth();

    return (
        <section>
            <Breadcrumbs title='View Profile' />
            <div className="container py-20">
                <div className='p-8 max-w-sm mx-auto shadow-2xl relative'>
                    <Link to='/edit_profile' className='absolute top-3 right-3 bg-navy p-4 rounded-full z-40 m-1 hover:shadow-xl hover:shadow-blue transition-all duration-300 ease-in-out'>
                        <FaPencilAlt className='text-lg text-white' />
                    </Link>
                    <div className='flex items-center justify-center'>
                        {
                            user?.photoURL ? <img
                                className="h-28 w-28 rounded-full object-cover shadow-lg group-hover:shadow-blue duration-300 mx-auto border border-red border-dashed p-2"
                                src={user?.photoURL}
                                alt="User avatar"
                            /> :
                                <p
                                    className="h-28 w-28 bg-blue text-navy border border-red border-dashed text-7xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                                >
                                    {user?.displayName?.slice(0, 1)}
                                </p>
                        }
                    </div>

                    <div className='text-center mt-3'>
                        <h2 className='text-navy text-2xl font-medium'>{user?.displayName}</h2>
                        <p className='text-gray font-light italic'>{user?.email}</p>
                    </div>

                    <div className='mt-6 flex flex-col gap-3'>
                        <p><span className='text-navy font-medium'>University:</span> Tech Academy</p>
                        <p><span className='text-navy font-medium'>Address:</span> Chandra, Kaliakori, Gazipur</p>
                        <p><span className='text-navy font-medium'>Date of Birth:</span> 07/03/2010</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProfile;