import bgImage from '../assets/images/banner.jpg'
const HeroBanner = () => {
    return (
        <section style={{ backgroundImage: `url(${bgImage})` }}
            className='bg-top bg-cover bg-no-repeat'>
            <div className='bg-navy bg-opacity-70'>
                <div className='pt-44 pb-28 md:pt-64 md:pb-36 text-center max-w-3xl mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-white mb-8 leading-10 md:leading-[60px]'>Campus Connect is A College Booking Platform</h1>

                    <p className='text-white mb-10'>Campus Connect is a cutting-edge college booking platform designed to simplify the process of finding the best college for students. </p>

                    <button className='btn_white'>Find College</button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;