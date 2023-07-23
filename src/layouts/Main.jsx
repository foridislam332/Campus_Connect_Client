import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../components/ScrollToTop';

const Main = () => {
    return (
        <>
            <ScrollToTop />

            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

            <ToastContainer />
        </>
    );
};

export default Main;