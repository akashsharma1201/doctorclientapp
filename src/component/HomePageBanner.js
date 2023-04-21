import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HomePageBanner.css"
import { Link } from 'react-router-dom';

const HomePageBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            <div className='single-slide single-slide-1'>
                {/* <img src='https://disin-react.hibootstrap.com/images/home-two/home-2-slider1.jpg' className='img-fluid' /> */}
                <div className='col-md-6'>
                    <h1>We have Fantastic Doctors and Dentist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .</p>

                    <div className='buttons'>
                        <Link to="/appointment"><button>Get Appointment</button></Link>
                        <Link to="/about"><button>Learn More</button></Link>
                    </div>
                </div>
            </div>
            <div className='single-slide single-slide-2'>
                {/* <img src='https://disin-react.hibootstrap.com/images/home-two/home-2-slider2.jpg' className='img-fluid' /> */}
                <div className='col-md-6'>
                    <h1>We have Fantastic Doctors and Dentist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .</p>
                    <div className='buttons'>
                        <Link to="/appointment"><button>Get Appointment</button></Link>
                        <Link to="/about"><button>Learn More</button></Link>
                    </div>
                </div>
            </div>
        </Slider>

    )
}

export default HomePageBanner