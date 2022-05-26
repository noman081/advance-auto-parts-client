import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    /*    if (loading) {
           return <Loading />
       } */
    const logOut = () => {
        signOut(auth);
        navigate('/');
        localStorage.removeItem('accessToken');
    }
    return (
        <div className="navbar bg-accent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost bg-none text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/parts'>Parts</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl text-white lg:ml-3">Manufacture</Link>
            </div>
            <div className='navbar-end'>
                <label htmlFor='dashboard-drawer' className="btn btn-ghost bg-none text-white lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-end hidden lg:flex mr-10">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/parts'>Parts</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {
                        user ?
                            <li><button onClick={logOut} className='btn btn-link'>Sign Out</button></li>
                            :
                            <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;