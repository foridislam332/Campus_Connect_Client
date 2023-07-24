import Breadcrumbs from '../components/Breadcrumbs';
import AllCollegeCard from '../components/AllCollegeCard';
import { useLoaderData } from 'react-router-dom';

const SearchResult = () => {
    const collegeData = useLoaderData();

    return (
        <section>
            <Breadcrumbs title='Search Result' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    {
                        collegeData.length > 0 ? <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Search Found: <span className='text-red'>0{collegeData?.length}</span></h1> : <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">No Data Found</h1>
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        collegeData.map((college) => <AllCollegeCard key={college._id} college={college} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default SearchResult;