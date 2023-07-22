import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, toggle, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-red font-semibold "
                    : "font-semibold text-navy hover:text-red duration-300"
            }
            onClick={toggle}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;