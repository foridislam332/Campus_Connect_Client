import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useForm } from 'react-hook-form';

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
    const { signIn, resetPassword } = useAuth();
    const [email, setEmail] = useState('');

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setEmail(data.email);
        signIn(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    };

    const handleReset = () => {
        if (!email) {
            return toast.error('Please Provide email', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }
        resetPassword(email)
            .then(() => {
                toast.success('Please Check your Email', {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    }

    const [type, setType] = useState('password');
    return (
        <section>
            <Breadcrumbs title='Login' />
            <div className="container py-20">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-10 shadow-2xl rounded-xl">
                    <h1 className="text-navy text-5xl font-bold mb-8 drop-shadow-lg">Login</h1>

                    <div className='flex items-center border border-navy rounded-lg gap-3 p-3'>
                        <label htmlFor="email"> <MdAlternateEmail className='text-green text-2xl' /></label>

                        <input className='w-full border-none outline-none' type="email" id='email' placeholder="Enter email" {...register("email", { required: true })} />
                    </div>
                    {errors.email && <span className='text-sm text-red ml-1'>Email is required</span>}

                    <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-5'>
                        <label htmlFor="password"> <MdLockOutline className='text-navy text-2xl' /></label>

                        <input type={type} className='w-full border-none outline-none dark:text-white dark:bg-dark' id='password' placeholder="password" {...register("password", { required: true })} />
                        <button className='dark:text-white' onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                            {
                                type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </button>
                    </div>
                    {errors.password && <span className='text-sm text-red ml-1'>Password is required</span>}

                    <p className='text-sm text-right  text-gray mt-2'>Forget password? <button className="text-blue-700 font-medium"
                        onClick={handleReset}
                    >Reset password</button></p>

                    <button className='btn_primary w-full mt-6 border' type='submit'>Login</button>

                    <div className='flex items-center gap-3 mx-5 my-5'>
                        <span className='border-t border-red w-full block'></span>
                        <span className='text-green'>OR</span>
                        <span className='border-t border-red w-full block'></span>
                    </div>

                    <SocialLogin />

                    <p className='mt-5 text-center text-gray'>New to Campus connect? <Link className='text-navy font-medium underline' to='/sign_up'>Sign Up</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;