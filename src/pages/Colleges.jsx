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
                    <p className="text-gray">Our "All Colleges" section provides an extensive database of institutions offering a diverse range of programs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        collegesData.map((college) => <AllCollegeCard key={college._id} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Colleges;