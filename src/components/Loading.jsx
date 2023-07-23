import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
    return (
        <div className='py-28'>
            <Player
                autoplay
                loop
                src="https://lottie.host/b1d7ec82-5a3d-43b5-bf9b-ff25f98a8ebe/znEEydAR7X.json"
                style={{ width: '250px' }}
            >
            </Player>
        </div>
    );
};

export default Loading;