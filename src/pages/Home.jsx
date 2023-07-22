import HeroBanner from '../sections/HeroBanner';
import BestCategories from '../sections/BestCategories';
import TopColleges from '../sections/TopColleges';
import CollegeGallery from '../sections/CollegeGallery';
import Reviews from '../sections/Reviews';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <BestCategories />
            <TopColleges />
            <CollegeGallery />
            <Reviews />
        </>
    );
};

export default Home;