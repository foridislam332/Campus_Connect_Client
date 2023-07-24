import { useState } from "react";
import { Link } from "react-router-dom";

import { BiSearchAlt } from 'react-icons/bi';


const SearchCollege = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='flex items-center justify-between rounded-3xl w-full md:w-52 rounded-tl-3xl bg-white py-2 pl-3 pr-1 border border-navy relative'>
            {/* search area */}
            <input
                className='border-none outline-none bg-transparent text-navy'
                type="text"
                placeholder='Search college'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to={`/search_result/${searchTerm}`}
                className='w-8 h-8 flex items-center justify-center bg-navy hover:bg-red border border-navy hover:border-red text-white rounded-full duration-300 absolute right-1'
            >
                <BiSearchAlt />
            </Link>
        </div>
    );
};

export default SearchCollege;