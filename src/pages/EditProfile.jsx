import { useForm } from "react-hook-form";
import Breadcrumbs from "../components/Breadcrumbs";
import useUsers from "../hooks/useUsers";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const [userData] = useUsers();
    const navigate = useNavigate();
    const from = '/view_profile';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        useAxios.patch(`/users/${userData?._id}`, data)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Profile Update successfully',
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate(from, { replace: true })
                }
            })
    };

    return (
        <div>
            <Breadcrumbs title='Edit Profile' />

            <div className="container py-20">
                <div className='p-8 max-w-sm mx-auto shadow-2xl'>
                    <div className='flex items-center justify-center'>
                        {
                            userData?.photo ? <img
                                className="h-28 w-28 rounded-full object-cover shadow-lg group-hover:shadow-blue duration-300 mx-auto border border-red border-dashed p-2"
                                src={userData?.photo}
                                alt="User avatar"
                            /> :
                                <p
                                    className="h-28 w-28 bg-blue text-navy border border-red border-dashed text-7xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                                >
                                    {userData?.name?.slice(0, 1)}
                                </p>
                        }
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div className='flex flex-col gap-2'>
                            <div className='w-full mt-8'>
                                <label className="text-gray text-sm" htmlFor="name">Name: </label>
                                <input id='name' defaultValue={userData?.name} {...register("name")} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="photo">Profile Image URL: </label>
                                <input id='photo' defaultValue={userData?.photo} {...register("photo")} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="university">University: </label>
                                <input id='university' defaultValue={userData?.university} {...register("university")} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                            </div>

                            <div className='w-full'>
                                <label className="text-gray text-sm" htmlFor="address">Address: </label>
                                <input id='address' defaultValue={userData?.address} {...register("address")} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
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