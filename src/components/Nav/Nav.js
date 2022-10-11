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
                <Link to="/">
                    <img
                        src={logo}
                        className="mr-3 h-12"
                        alt="PH Quiz Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        PH QUIZ
                    </span>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/home"
                        active='true'
                        className={({ isActive }) => isActive ? "bg-blue-400 px-2 py-1 rounded-md" : undefined}

                    >
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "bg-blue-400 px-2 py-1 rounded-md" : undefined}>
                        About
                    </NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? "bg-blue-400 px-2 py-1 rounded-md" : undefined}>
                        Statistics
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "bg-blue-400 px-2 py-1 rounded-md" : undefined}>
                        Blogs
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-blue-400 px-2 py-1 rounded-md" : undefined}>
                        Contact
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;