import { Link } from "react-router-dom";

import bgImage from '../assets/images/banner.jpg'

const Breadcrumbs = ({ title }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='bg-navy opacity-90 pb-10 pt-36 text-center'>
                <h1 className='text-red text-5xl tracking-wider font-semibold'>{title}</h1>
                <p className='text-white mt-5'><Link to='/'>Home</Link> / <span className='text-white'>{title}</span></p>
            </div>
        </div>
    );
};

export default Breadcrumbs;