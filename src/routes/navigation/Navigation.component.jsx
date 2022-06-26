import './navigation.styles.scss';

import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/User.context';
import { useContext } from 'react';

function Navigation() {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = (event) => {
        event.preventDefault();
        setUser(null);
    };

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {!user ? (
                        <Link className='nav-link' to='/auth'>Sign In</Link>
                    ) : (
                        <a className='nav-link' href='#' onClick={handleLogout}>
                            Sign Out
                        </a>
                    )}
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}

export default Navigation;
