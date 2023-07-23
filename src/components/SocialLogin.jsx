import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

import { FaFacebook } from 'react-icons/fa';

// image
import googleImg from '../assets/images/google.png';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn, facebookSignIn } = useAuth();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const user = { name: loggedUser.displayName, email: loggedUser.email, university: 'N/A', photo: loggedUser.photoURL, address: 'N/A' };

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            })
    }

    const signInWithFacebook = () => {
        facebookSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const user = { name: loggedUser.displayName, email: loggedUser.email, university: 'N/A', photo: loggedUser.photoURL, address: 'N/A' };

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            })
    }
    return (
        <div className='flex items-center justify-center gap-6'>
            <button onClick={signInWithGoogle} className=''>
                <img className='w-12' src={googleImg} alt="google" />
            </button>

            <button onClick={signInWithFacebook} className=''>
                <FaFacebook className='text-5xl text-blue-500' />
            </button>
        </div>
    );
};

export default SocialLogin;