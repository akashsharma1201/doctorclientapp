import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import doctorAppLogo from "../assests/doctorAppLogo.png";
import "./Navrbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    const LogOutHandler = () => {

        localStorage.clear()
        navigate("/login")
    }


    return (
        <div className='my-navbar'>
            <NavLink to="#" className="d-flex align-items-center">
                <img src={doctorAppLogo} width="50px" />
                <h5>Hospital</h5>
            </NavLink>
            <button className='toggle' onClick={() => { setToggle(!toggle) }}><GiHamburgerMenu />
            </button>
            <div className={toggle ? "menu-toggle" : "menu"}>
                <button className='cross' onClick={() => { setToggle(!toggle) }}>
                    <RxCross2 />
                </button>
                <ul>
                    <li className='mx-1'><NavLink to="/">Home</NavLink></li>
                    <li className='mx-1'><NavLink to="/about">About</NavLink></li>
                    <li className='mx-1'><NavLink to="/services">Service</NavLink></li>
                    <li className='mx-1'><NavLink to="/appointment">Appointment</NavLink></li>
                    <li className='mx-1'><NavLink to="/blog">Blog</NavLink></li>
                    {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
                    <button className='btn btn-danger ms-lg-5' onClick={ LogOutHandler }><span>Log out</span></button>
                </ul>
               
            </div>
        </div>
    )
}

export default Navbar