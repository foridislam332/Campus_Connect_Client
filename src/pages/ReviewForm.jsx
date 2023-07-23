import Breadcrumbs from "../components/Breadcrumbs";
import { useForm } from 'react-hook-form';

// Rating star
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";

const ReviewForm = () => {
    const [rating, setRating] = useState(0)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data, rating }
        console.log(newData)
    };

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    }
    return (
        <section>
            <Breadcrumbs title='Admission Form' />
            <div className="container py-20">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-10 shadow-2xl rounded-xl">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Review</h1>

                    <div className='flex items-center justify-center gap-1 mt-1 bg-white shadow-lg py-8'>
                        <span className="text-3xl -mb-1">{rating}</span>
                        <Rating
                            className='max-w-[200px]'
                            value={rating}
                            onChange={setRating}
                            itemStyles={myStyles} />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='w-full mt-8'>
                            <textarea rows={5} id='review' placeholder='Write your review' {...register("review", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                            {errors.review && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <button className='overflow-hidden btn_primary w-full' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ReviewForm;