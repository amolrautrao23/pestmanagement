import React from 'react'
import '../css/navbar.css'
import logo from "../img/logo.webp"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Enquiry from "./Enquiry";

const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar">
                    <h2> <img src={logo} className="logo" width="100" alt='logo' /></h2>
                    <ul id="list">
                        <li><NavLink onClick={() => setIsNavActive(false)} to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)} to="/about">
                            About us
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)}
                            to="/service"
                            role="button"
                            data-bs-toggle=""
                            aria-expanded="false">
                            Services
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)}
                            className="enquiry"
                            aria-current="page"
                            // to="/enquiry"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                        >
                            Enquiry
                        </NavLink ></li>
                        <li><NavLink onClick={() => setIsNavActive(false)} aria-current="page" to="/contact">
                            Contact Us
                        </NavLink></li>

                    </ul>
                    <ul id="hamBurger">
                        <p className='text-white' onClick={() => setIsNavActive(!isNavActive)}>{isNavActive ? <IoClose className='nav-icon' /> : <HiMenu className='nav-icon' />}</p>
                    </ul>
                    <ul className={isNavActive ? "responsive NavActive" : "responsive"} >
                        <li ></li>
                        <li><NavLink onClick={() => setIsNavActive(false)} to="/">
                            Home
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)} to="/about">
                            About us
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)}

                            to="/service"
                            role="button"
                            data-bs-toggle=""
                            aria-expanded="false">
                            Services
                        </NavLink></li>
                        <li><NavLink onClick={() => setIsNavActive(false)}
                            aria-current="page"
                            // to="/enquiry"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                        >
                            Enquiry
                        </NavLink ></li>
                        <li><NavLink onClick={() => setIsNavActive(false)} aria-current="page" to="/contact">
                            Contact Us
                        </NavLink></li>

                    </ul>
                </nav>

            </header>

            {/* enquiry Modal */}


            {/* enquiry popup   */}
     





        </>
    )
}

export default Navbar
