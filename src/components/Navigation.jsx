import ActiveLink from './ActiveLink';

const Navigation = () => {
    return (
        <ul className="flex space-x-8">
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
        </ul>
    );
};

export default Navigation;