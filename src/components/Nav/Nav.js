import logo from '../../quiz-logo.png'
import { Navbar } from 'flowbite-react';
import React from 'react';
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            <Navbar
                fluid={true}
                rounded={true}
                
            >
                <Link to="/" className='flex border pr-2 rounded-md border-b-orange-400'>
                    <img
                        src={logo}
                        className="mr-3 h-12"
                        alt="PH Quiz Logo"
                    />
                    <span className="self-center whitespace-nowrap text-orange-500 text-3xl font-extrabold dark:text-white">
                        PH QUIZ
                    </span>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/home"
                        active='true'
                        className={({ isActive }) => isActive ? "bg-blue-600 text-gray-50 px-2 py-1 rounded-md" : undefined}

                    >
                        <p className='text-lg font-semibold'>Home</p>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "bg-blue-600 text-gray-50 px-2 py-1 rounded-md" : undefined}>
                        <p className='text-lg font-semibold'>About</p>
                    </NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? "bg-blue-600 text-gray-50 px-2 py-1 rounded-md" : undefined}>
                        <p className='text-lg font-semibold'>Statistics</p>
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "bg-blue-600 text-gray-50 px-2 py-1 rounded-md" : undefined}>
                        <p className='text-lg font-semibold'>Blogs</p>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-blue-600 text-gray-50 px-2 py-1 rounded-md" : undefined}>
                        <p className='text-lg font-semibold'>Contact</p>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;