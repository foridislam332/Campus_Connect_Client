import CollegeCard from "../components/CollegeCard";
import useColleges from "../hooks/useColleges";

const TopColleges = () => {
    const [collegesData] = useColleges();

    return (
        <section className="py-20 bg-[#f4f6f9]">
            <div className="container">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Top Colleges</h1>
                    <p className="text-gray">Explore our list of top colleges known for their exceptional educational standards</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        collegesData.map((college, index) => <CollegeCard key={index} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TopColleges;