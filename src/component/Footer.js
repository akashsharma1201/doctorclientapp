import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdEmail, MdLocationOn ,MdPhoneAndroid } from "react-icons/md";
import "./Footer.css"


const Footer = () => {

    const [name ,setName ] = useState("")
    const [phone ,setPhone ] = useState("")
    const [message ,setMessage ] = useState("")
    return (
        <div className='footer-section'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-4 mt-lg-4'>
                        <h3>Contact Us</h3>
                        <div className=''>
                            <div className='icon-box'><MdEmail /></div>
                            <div>
                                <span>info@disin.com</span>
                                <span>hello@disin.com</span>
                            </div>
                        </div>
                        <div>
                            <div className='icon-box'><MdPhoneAndroid /></div>
                            <div>
                                <span>Call: +07 554 332 322</span>
                                <span>Call: +236 256 256 365</span>
                            </div>
                        </div>
                        <div>
                            <div className='icon-box'><MdLocationOn /></div>
                            <div>
                                <span>210-27 Quadra, Market Street, Victoria Canada</span>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 mt-lg-4'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="#">About us</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Our Expertise</Link></li>
                            <li><Link to="#">Faq</Link></li>
                            <li><Link to="#">Doctors</Link></li>
                            <li><Link to="#">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 mt-lg-4'>
                        <h3>Our Services</h3>
                        <ul>
                            <li><Link to="#">Dental Care</Link></li>
                            <li><Link to="#">Cardiology</Link></li>
                            <li><Link to="#">Hijama Therapy</Link></li>
                            <li><Link to="#">Massage Therapy</Link></li>
                            <li><Link to="#">Ambluance Sevices</Link></li>
                            <li><Link to="#">Medicine</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 mt-lg-4'>
                        <h3>Feedback</h3>
                        
                            <form>
                                <input type='text' value={name} placeholder='Name' onChange={(event)=>setName(event.target.value)}/>
                                <input type='text' value={phone} placeholder='Phone'  onChange={(event)=>setPhone(event.target.value)}/>
                                <textarea value={message} placeholder='Message' onChange={(event)=>setMessage(event.target.value)}></textarea>
                                <button>Submit</button>
                            </form>
                        
                    </div>
                </div>
            </div>
            <div className='container-fluid footer-bottom'>
                <div className='row justify-content-center py-3'>
                    <div className='col-md-6'><p>Copyright © 2023 Design & Developed by HiBootstrap</p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer