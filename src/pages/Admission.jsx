import AdmissionCard from "../components/AdmissionCard";
import Breadcrumbs from "../components/Breadcrumbs";
import useColleges from "../hooks/useColleges";

const Admission = () => {
    const [collegesData] = useColleges();

    return (
        <section>
            <Breadcrumbs title='Admission' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Admission</h1>
                    <p className="text-gray">Our Admission section offers a comprehensive guide to the application process for colleges and universities.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        collegesData.map((college) => <AdmissionCard key={college._id} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Admission;