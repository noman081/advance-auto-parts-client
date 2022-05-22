import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-accent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost bg-none text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl text-white lg:ml-3">Manufacture</Link>
            </div>
            <div className="navbar-end hidden lg:flex mr-3">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><Link to='/purchase'>Purchase</Link></li>
                    <li><Link to='/order'>Order</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;