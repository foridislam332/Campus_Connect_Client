import { useForm } from "react-hook-form";
import Breadcrumbs from "../components/Breadcrumbs";
import useAuth from "../hooks/useAuth";

const EditProfile = () => {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data }
        console.log(newData)
    };

    return (
        <div>
            <Breadcrumbs title='Edit Profile' />

            <div className="container py-20">
                <div className='p-8 max-w-sm mx-auto shadow-2xl'>
                    <div className='flex items-center justify-center'>
                        {
                            user?.photoURL ? <img
                                className="h-28 w-28 rounded-full object-cover shadow-lg group-hover:shadow-blue duration-300 mx-auto border border-red border-dashed p-2"
                                src={user?.photoURL}
                                alt="User avatar"
                            /> :
                                <p
                                    className="h-28 w-28 bg-blue text-navy border border-red border-dashed text-7xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                                >
                                    {user?.displayName?.slice(0, 1)}
                                </p>
                        }
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div className='flex flex-col gap-2'>
                            <div className='w-full mt-8'>
                                <label className="text-gray text-sm" htmlFor="name">Name: </label>
                                <input id='name' defaultValue={user?.displayName} {...register("displayName", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                                {errors.displayName && <span className='text-red'>This field is required</span>}
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="photoURL">Profile Image URL: </label>
                                <input id='photoURL' defaultValue={user?.photoURL} {...register("photoURL", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                                {errors.photoURL && <span className='text-red'>This field is required</span>}
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="university">University: </label>
                                <input id='university' defaultValue={'Tech Academy'} {...register("university", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                                {errors.university && <span className='text-red'>This field is required</span>}
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="address">Address: </label>
                                <input id='address' defaultValue={'Chandra, Kaliakori, Gazipur'} {...register("address", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                                {errors.address && <span className='text-red'>This field is required</span>}
                            </div>

                            <div className='w-full mt-2'>
                                <button className='overflow-hidden btn_primary w-full' >Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;