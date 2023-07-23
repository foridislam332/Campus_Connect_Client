import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Colleges from '../pages/Colleges';
import MyCollege from '../pages/MyCollege';
import Admission from '../pages/Admission';
import AdmissionForm from '../pages/AdmissionForm';
import ReviewForm from '../pages/ReviewForm';
import CollegeDetails from '../pages/CollegeDetails';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ViewProfile from '../pages/ViewProfile';
import EditProfile from '../pages/EditProfile';
import PrivateRoute from './PrivateRoute';
import PageNotFound from '../pages/PageNotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'admission_form/:id',
                element: <AdmissionForm />,
                loader: ({ params }) => fetch(`https://campus-connect-server-delta.vercel.app/colleges/${params.id}`)
            },
            {
                path: 'my_college',
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'college_details/:id',
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://campus-connect-server-delta.vercel.app/colleges/${params.id}`)
            },
            {
                path: 'review_form',
                element: <PrivateRoute><ReviewForm /></PrivateRoute>
            },
            {
                path: 'view_profile',
                element: <ViewProfile />
            },
            {
                path: 'edit_profile',
                element: <EditProfile />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign_up',
                element: <SignUp />
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])

export default routes;