import { Link } from "react-router-dom";

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const MyCollegeCard = ({ college }) => {
    const { collegeImage, collegeName, events, research, researchWorks, rating, sports } = college;

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    }

    return (
        <div className="bg-white p-4 border border-red rounded-lg shadow-lg hover:shadow-2xl duration-300 flex flex-col lg:flex-row gap-4">
            <img src={collegeImage} alt={collegeName} className="full lg:w-[450px] rounded-lg object-cover" />

            <div>
                <div className='flex items-center gap-1 mt-1'>
                    <span className="text-sm">{rating}</span>
                    <Rating className='max-w-[80px]' readOnly value={rating} itemStyles={myStyles} />
                </div>

                <h2 className="text-red text-2xl font-semibold mb-2 mt-2 drop-shadow-lg line-clamp-1">{collegeName}</h2>

                <div className="mb-2 flex items-start gap-1 text-sm">
                    <p className="font-semibold text-navy underline drop-shadow-lg">Events: </p>
                    <ul>
                        {events.map((event, index) => (
                            <div key={index} className="drop-shadow-lg flex items-baseline gap-2 mt-4">
                                <p className="text-lg">0{index + 1}.</p>
                                <div>
                                    <h3 className="text-lg font-medium">{event.eventName}</h3>
                                    <p className="text-gray text-xs italic">{event.date}</p>
                                    <p className="text-sm italic mt-1">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="mb-2 flex items-start gap-1 text-sm">
                    <p className="font-semibold text-navy underline drop-shadow-lg">Sports: </p>
                    <ul>
                        {sports.map((sport, index) => (
                            <div key={index} className="drop-shadow-lg flex items-baseline gap-2 mt-4">
                                <p className="text-lg">0{index + 1}.</p>
                                <div>
                                    <p className="text-lg"><span className="font-medium">Sport Name: </span>{sport.sportName}</p>

                                    <p className="text-sm italic"><span className="font-medium">captain: </span>{sport.captain}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <p className="font-semibold mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="text-navy underline">Number of Research:</span> {research}</p>

                <p className="mb-2 text-sm line-clamp-2 drop-shadow-lg"><span className="font-semibold text-navy underline">Research History:</span> {researchWorks}</p>

                <Link to={`/review_form/${research}`} className="btn_primary w-full block text-center mt-4">Write a Review</Link>
            </div>
        </div>
    );
};

export default MyCollegeCard;