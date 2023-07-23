import { Link } from "react-router-dom";

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const AdmissionCard = ({ college }) => {
    const { _id, collegeImage, collegeName, location, admissionDate, rating } = college;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    }

    return (
        <div className="bg-white p-4 border border-red border-dashed rounded-lg shadow-lg hover:border-solid hover:shadow-2xl duration-300 flex gap-6">
            <img src={collegeImage} alt={collegeName} className="w-56 object-cover rounded-lg" />
            <div className="w-full">
                <div className='flex items-center gap-1'>
                    <span className="text-xs">{rating}</span>
                    <Rating className='max-w-[70px]' readOnly value={rating} itemStyles={myStyles} />
                </div>

                <h2 className="text-red text-2xl font-semibold drop-shadow-lg line-clamp-1">{collegeName}</h2>

                <p className="mb-2 text-sm drop-shadow-lg"><span className="font-semibold text-navy underline">Location:</span> {location}</p>

                <p className="mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="font-semibold text-navy underline">Admission Date:</span> {admissionDate}</p>

                <Link to={`/admission_form/${_id}`} className="btn_primary w-full block text-center mt-4">Admission Now</Link>
            </div>
        </div>
    );
};

export default AdmissionCard;