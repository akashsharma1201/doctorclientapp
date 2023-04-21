import React from 'react';
import { sericeSectionData } from './data';
import { BsCheckLg } from 'react-icons/bs';
import "./ServicesSection.css";

const ServicesSectiom = () => {
    return (
        <div className='service-section py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h5>Speciality</h5>
                        <h2>Our Expertise</h2>
                    </div>
                    {
                        sericeSectionData.map((item, index) => {
                            return (
                                <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
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
    )
}

export default ServicesSectiom