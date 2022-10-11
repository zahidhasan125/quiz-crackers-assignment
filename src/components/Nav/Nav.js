import logo from '../../quiz-logo.png'
import { Navbar } from 'flowbite-react';
import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-12"
                        alt="PH Quiz Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        PH QUIZ
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/home"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/statistics">
                        Statistics
                    </Navbar.Link>
                    <Navbar.Link href="/blogs">
                        Blogs
                    </Navbar.Link>
                    <Navbar.Link href="/contact">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;