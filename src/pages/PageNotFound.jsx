import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className='h-screen w-full flex flex-col items-center justify-center'>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_2ibpmsby.json"
                    className='md:w-[600px]'
                >
                </Player>
            </div>
            <Link className='btn_primary relative md:-top-20' to='/'>Back to Home</Link>
        </section>
    );
};

export default PageNotFound;