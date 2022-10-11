import logo from '../../quiz-logo.png'
import { Navbar } from 'flowbite-react';
import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

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
                    <Link
                        to="/home"
                        active='true'
                    >
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/statistics">
                        Statistics
                    </Link>
                    <Link to="/blogs">
                        Blogs
                    </Link>
                    <Link to="/contact">
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;