import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const { _id, collegeImage, collegeName, admissionProcess, admissionDate, events, researchWorks, sports } = college;

    return (
        <div className="bg-white p-4 border border-red rounded-lg shadow-lg hover:shadow-2xl duration-300">
            <img src={collegeImage} alt={collegeName} className="w-full rounded-lg" />

            <h2 className="text-red text-2xl font-semibold mb-2 mt-4 drop-shadow-lg line-clamp-1">{collegeName}</h2>

            <p className="mb-2 line-clamp-2 text-sm drop-shadow-lg"><span className="font-semibold text-navy underline">Admission Date:</span> {admissionDate}</p>

            <div className="mb-2 flex items-start gap-1 text-sm">
                <p className="font-semibold text-navy underline drop-shadow-lg">Events: </p>
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="drop-shadow-lg">
                            {event.eventName}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="font-semibold text-navy underline">Research History:</span> {researchWorks}</p>

            <p className="mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="font-semibold text-navy underline">Sports:</span> {sports[0].sportName}</p>

            <Link to={`/college_details/${_id}`} className="btn_primary w-full block text-center mt-4">View Details</Link>
        </div>
    );
};

export default CollegeCard;