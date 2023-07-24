import Breadcrumbs from "../components/Breadcrumbs";
import { useForm } from 'react-hook-form';
import useAuth from "../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";

const AdmissionForm = () => {
    const { user } = useAuth();
    const [userData] = useUsers();
    const collegesData = useLoaderData();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData = { ...data, candidateEmail: user?.email, events: collegesData.events, sports: collegesData.sports, research: collegesData.research, researchWorks: collegesData.researchWorks }

        useAxios.post('/my_college', newData)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Admission successfully',
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })

        const updateUsesData = {
            name: userData.name, photo: userData.photo,
            university: data.collegeName,
            address: data.address
        }

        useAxios.patch(`/users/${userData?._id}`, updateUsesData)
            .then(data => {

            })
    };
    return (
        <section>
            <Breadcrumbs title='Admission Form' />
            <div className="container py-20">
                <h1 className="text-navy text-5xl font-bold drop-shadow-lg text-center mb-14">Admission Form</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto shadow-2xl p-8 rounded-lg">
                    <div className='flex flex-col lg:flex-row items-start gap-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateName">Candidate Name:</label>
                            <input id='candidateName' defaultValue={user?.displayName} {...register("candidateName", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.candidateName && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateEmail">Candidate Email:</label>
                            <input type='email' id='candidateEmail' value={user?.email} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        </div>


                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateNumber">Candidate Phone number:</label>

                            <input id='candidateNumber' placeholder='Enter Phone number' {...register("candidateNumber", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.candidateNumber && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="collegeName">College Name:</label>
                            <input id='collegeName' defaultValue={collegesData.collegeName} {...register("collegeName", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.collegeName && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="subject">Subject Name:</label>
                            <input id='subject' placeholder='Enter your Subject' {...register("subject", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.subject && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>

                    <div className='w-full mt-4'>
                        <label className='text-gray' htmlFor="collegeImage">Image URL:</label>
                        <input id='collegeImage' defaultValue={collegesData.collegeImage} {...register("collegeImage", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.collegeImage && <span className='text-red'>This field is required</span>}
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row items-end gap-4'>
                        <div className='w-full mt-4'>
                            <label className='text-gray' htmlFor="address">Address:</label>
                            <input id='address' placeholder='Write address' {...register("address", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.address && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="birthDay">Date of Birth:</label>
                            <input type="date" id='birthDay' placeholder='Date of Birth' {...register("birthDay", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.birthDay && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <button className='overflow-hidden btn_primary w-full border border-green' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdmissionForm;