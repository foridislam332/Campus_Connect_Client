import { Link } from "react-router-dom";

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const AllCollegeCard = ({ college }) => {
    const { collegeImage, collegeName, admissionProcess, research, admissionDate, rating } = college;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    }

    return (
        <div className="bg-white p-4 border border-red rounded-lg shadow-lg hover:shadow-2xl duration-300">
            <img src={collegeImage} alt={collegeName} className="w-full rounded-lg" />
            <div className='flex items-center gap-1 mt-1'>
                <span className="text-sm">{rating}</span>
                <Rating className='max-w-[80px]' readOnly value={rating} itemStyles={myStyles} />
            </div>

            <h2 className="text-red text-2xl font-semibold mb-2 mt-2 drop-shadow-lg line-clamp-1">{collegeName}</h2>

            <p className="mb-2 line-clamp-2 text-sm drop-shadow-lg"><span className="font-semibold text-navy underline">Admission Process:</span> {admissionProcess}</p>

            <p className="font-semibold mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="text-navy underline">Number of Research:</span> {research}</p>

            <p className="mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="font-semibold text-navy underline">Admission Date:</span> {admissionDate}</p>

            <Link to={`college_details/`} className="btn_primary w-full block text-center mt-4">View Details</Link>
        </div>
    );
};

export default AllCollegeCard;