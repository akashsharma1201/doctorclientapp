import React from 'react';
import "./AboutSectionforPage.css"
import { BsCheckLg } from 'react-icons/bs';

const AboutSectionForPage = () => {
    return (
        <div className='about-section-page py-5'>
            <div className='container'>
                <div className='row py-5'>
                    <div className="col-lg-6">
                        <div className='image-wrapper'>
                            <img className='img-fluid' src='https://disin-react.hibootstrap.com/images/about1.jpg' alt='about' />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='text-area ps-0 ps-md-5'>
                            <h3 className='mt-4'>About Our Hospital</h3>
                            <h5 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</h5>
                            <ul>
                                <li><BsCheckLg /> <span>Browse Our Website</span></li>
                                <li><BsCheckLg /><span>Choose Service</span></li>
                                <li><BsCheckLg /><span>Send Messege</span></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionForPage