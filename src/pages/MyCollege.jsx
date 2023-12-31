import Breadcrumbs from "../components/Breadcrumbs";
import MyCollegeCard from "../components/MyCollegeCard";
import useMyCollege from "../hooks/useMyCollege";

const MyCollege = () => {
    const [myCollegeData] = useMyCollege();

    return (
        <section>
            <Breadcrumbs title='My College' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">My College</h1>
                    <p className="text-gray">Welcome to "My College," your gateway to an extraordinary academic journey.</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {
                        myCollegeData?.map((college) => <MyCollegeCard key={college._id} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyCollege;