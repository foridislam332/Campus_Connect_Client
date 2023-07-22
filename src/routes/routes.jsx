import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Colleges from '../pages/Colleges';
import MyCollege from '../pages/MyCollege';
import Admission from '../pages/Admission';

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
                path: 'my_college',
                element: <MyCollege />
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
        ]
    }
])

export default routes;