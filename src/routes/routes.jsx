import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Colleges from '../pages/Colleges';
import MyCollege from '../pages/MyCollege';
import Admission from '../pages/Admission';
import AdmissionForm from '../pages/AdmissionForm';
import ReviewForm from '../pages/ReviewForm';
import CollegeDetails from '../pages/CollegeDetails';

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
                element: <AdmissionForm />
            },
            {
                path: 'my_college',
                element: <MyCollege />
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'college_details/:id',
                element: <CollegeDetails />
            },
            {
                path: 'review_form/:id',
                element: <ReviewForm />
            },
        ]
    }
])

export default routes;