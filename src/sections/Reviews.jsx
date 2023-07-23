import useReviews from "../hooks/useReviews";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// import required modules
import { Autoplay } from 'swiper/modules';

const Reviews = () => {
    const [reviewsData] = useReviews();

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    }
    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Reviews</h1>
                    <p className="text-gray">Welcome to our Colleges Gallery, a curated collection of diverse educational institutions from around the world</p>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    breakpoints={{
                        // When window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // When window width is >= 480px
                        480: {
                            slidesPerView: 1,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // When window width is >= 1200px
                        1200: {
                            slidesPerView: 2
                        },
                    }}
                >
                    {
                        reviewsData.map((review, index) =>
                            <SwiperSlide key={index}>
                                <div className="p-8 border border-red rounded-md">
                                    <div className="flex items-center gap-6">
                                        <img className="w-20 rounded-full" src={review.userImage} alt="" />
                                        <div>
                                            <h2 className="font-medium tracking-wide">{review.username}</h2>
                                            <p className="text-gray text-sm italic">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-navy text-sm font-medium">College: {review.collegeName}</h4>

                                        <div className='flex items-center gap-1 mt-4'>
                                            <span>{review.rating}</span>
                                            <Rating className='max-w-[90px]' readOnly value={review.rating} itemStyles={myStyles} />
                                        </div>

                                        <p className="text-gray italic line-clamp-2 mt-1">{review.comment}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;