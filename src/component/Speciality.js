import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import { SpecialitySectionData } from './data';
import { MdCall } from "react-icons/md";
import "./Speciality.css";

const Speciality = () => {

    return (
        <div className='speciality-page'>
            <div className='container-fluid py-5'>
                <div className='row ps-lg-5'>
                    <div className='col-lg-6  ps-lg-5'>
                        <div className='speciality-text-lines'>
                            <h5>Speciality</h5>
                            <h2>Our Expertise</h2>
                            <div className='row'>
                                {
                                    SpecialitySectionData.map((item, index) => {
                                        return (
                                            <div className='col-md-6  p-1' key={index}>
                                                <div className='mycard'>
                                                    <div className='icon-box'><BsCheckLg /></div>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='image-box ps-0 ps-md-5'>
                            <img src='https://disin-react.hibootstrap.com/images/about4.jpg' alt='image' className='img-fluid' />
                            <div >
                                <div className='phone-icon-box'>
                                    <MdCall />
                                </div>
                                <div>
                                    <h3>Emergency Call</h3>
                                    <p>+07 554 332 322</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speciality