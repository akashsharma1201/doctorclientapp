import React, { useEffect, useRef } from 'react';
import { aboutSectionData } from './data';
import { GiNurseMale } from "react-icons/gi";
import { gsap } from 'gsap';
import "./AboutSection.css";


const AboutSection = () => {

    const welcomeLeft = useRef()
    console.log(welcomeLeft.current);

    useEffect(() => {
        gsap.from(welcomeLeft.current , {x:-100 ,opacity :1, duration : 1})
    }, [])
    return (
        <div className='about-section-page py-5'>
            <div className='container-fluid'>
                <div className='row py-5'>
                    <div className="col-lg-6" ref={welcomeLeft}>
                        <div className='welcome-left'>
                            <img className='img-fluid' src='https://disin-react.hibootstrap.com/images/about3.jpg' alt='about' />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='text-area ps-0 ps-md-5'>
                            <h5 className='mt-4'>About us</h5>
                            <h2 className='mb-4'>Welcome to Disin Hospital We have...</h2>

                            {
                                aboutSectionData.map((item, index) => {
                                    return (
                                        <div className=' text-lines' key={index}>
                                            <div >
                                                {/* {`<${item.icon}/>`} */}
                                                <div className='icon-box'><GiNurseMale /></div>
                                            </div>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <p className='text-start'>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection