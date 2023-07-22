import HeroBanner from '../sections/HeroBanner';
import BestCategories from '../sections/BestCategories';
import TopColleges from '../sections/TopColleges';
import CollegeGallery from '../sections/CollegeGallery';
import Reviews from '../sections/Reviews';
import ResearchPapers from '../sections/ResearchPapers';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <BestCategories />
            <TopColleges />
            <CollegeGallery />
            <ResearchPapers />
            <Reviews />
        </>
    );
};

export default Home;