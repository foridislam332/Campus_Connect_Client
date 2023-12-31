import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BiUserPin } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUpUser, profileUpdate } = useAuth();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password.length < 6) {
            return toast.warning('password should be 6 characters', {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        };
        if (data.password !== data.confirm) {
            return toast.warning("password didn't match", {
                position: "top-right",
                autoClose: 4000,
                theme: "light",
            });
        };

        signUpUser(data.email, data.password)
            .then((result) => {
                profileUpdate(result.user, data.name, data.photo)
                    .then(() => {
                        const user = { name: data.name, email: data.email, university: 'N/A', photo: data.photo, address: 'N/A' };

                        useAxios.post('/users', user)
                            .then(data => {
                                if (data.data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Sign Up successfully',
                                        showConfirmButton: false,
                                        timer: 2500
                                    });
                                    navigate(from, { replace: true })
                                }
                            })
                    }).catch((error) => {
                        toast.error(error.message, {
                            position: "top-right",
                            autoClose: 4000,
                            theme: "light",
                        });
                    });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            });
    };
    return (
        <section>
            <Breadcrumbs title='Sign Up' />
            <div className="container py-20">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-10 shadow-2xl rounded-xl">
                    <h1 className="text-navy text-5xl font-bold mb-10 drop-shadow-lg">Sign Up</h1>

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3'>
                        <label htmlFor="name"> <BiUserPin className='text-navy text-2xl' /></label>
                        <input className='w-full border-none outline-none' id='name' placeholder="Enter full name" {...register("name", { required: true })} />
                    </div>
                    {errors.name && <span className='text-sm text-red ml-1'>Name is required</span>}

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="email"> <MdAlternateEmail className='text-navy text-2xl' /></label>
                        <input type='email' className='w-full border-none outline-none' id='email' placeholder="Enter your email" {...register("email", { required: true })} />
                    </div>
                    {errors.email && <span className='text-sm text-red ml-1'>Email is required</span>}

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="password"> <MdLockOutline className='text-navy text-2xl' /></label>
                        <input type='password' className='w-full border-none outline-none' id='password' placeholder="password" {...register("password", { required: true })} />
                    </div>
                    {errors.password && <span className='text-sm text-red ml-1'>Password is required</span>}

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="confirm"> <BsShieldCheck className='text-navy text-2xl' /></label>
                        <input type='password' className='w-full border-none outline-none' id='confirm' placeholder="Confirm password" {...register("confirm", { required: true })} />
                    </div>
                    {errors.password && <span className='text-sm text-red ml-1'>Confirm password is required</span>}

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3 mt-3'>
                        <label htmlFor="photo"> <HiOutlinePhotograph className='text-navy text-2xl' /></label>
                        <input className='w-full border-none outline-none' id='photo' placeholder="Photo URL" {...register("photo")} />
                    </div>

                    <button className='btn_primary w-full mt-7 border' type='submit'>Sign Up</button>

                    <div className='flex items-center gap-3 mx-5 my-5'>
                        <span className='border-t border-red w-full block'></span>
                        <span className='text-navy'>OR</span>
                        <span className='border-t border-red w-full block'></span>
                    </div>

                    <SocialLogin />

                    <p className='mt-5 text-center text-gray'>Already have an account? <Link className='text-navy font-medium underline' to='/login'>Login</Link></p>
                </form>
            </div>
        </section>
    );
};

export default SignUp;