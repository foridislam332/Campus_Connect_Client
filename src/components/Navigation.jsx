import useAuth from '../hooks/useAuth';
import Profile from '../pages/Profile';
import ActiveLink from './ActiveLink';

const Navigation = () => {
    const { user } = useAuth();

    return (
        <ul className="flex items-center space-x-8">
            <li>
                <ActiveLink to='/'>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/colleges'>
                    Colleges
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/admission'>
                    Admission
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/my_college'>
                    My College
                </ActiveLink>
            </li>
            {
                user?.email ? <Profile /> : <li>
                    <ActiveLink to='/login'>
                        Login
                    </ActiveLink>
                </li>
            }
        </ul>
    );
};

export default Navigation;