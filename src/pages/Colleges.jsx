import AllCollegeCard from "../components/AllCollegeCard";
import Breadcrumbs from "../components/Breadcrumbs";
import useColleges from "../hooks/useColleges";

const Colleges = () => {
    const [collegesData] = useColleges();

    return (
        <section>
            <Breadcrumbs title='Colleges' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">All Colleges</h1>
                    <p className="text-gray">Explore our list of top colleges known for their exceptional educational standards</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        collegesData.map((college, index) => <AllCollegeCard key={index} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Colleges;