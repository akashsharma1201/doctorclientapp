import React from 'react'
import Slider from 'react-slick';
import "./AboutSlider.css";

const AboutSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows :false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='about-slider'>
            <Slider {...settings}>
                <div className='slider'>
                    <div className='image-wrapper'>
                        <img src='https://disin-react.hibootstrap.com/images/clients/client1.png' alt='slider'/>
                    </div>
                    <h4>Adision Smith</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
                <div  className='slider'>
                    <div className='image-wrapper'>
                        <img src='https://disin-react.hibootstrap.com/images/clients/client2.png' alt='slider'/>
                    </div>
                    <h4>John cena</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
                <div  className='slider'>
                    <div className='image-wrapper'>
                        <img src='https://disin-react.hibootstrap.com/images/clients/client3.png' alt='slider'/>
                    </div>
                    <h4>Mac Smith</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
                <div  className='slider'>
                    <div className='image-wrapper'>
                        <img src='https://disin-react.hibootstrap.com/images/clients/client4.png' alt='slider'/>
                    </div>
                    <h4>Shane Watson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
                
            </Slider>
        </div>
    );
}

export default AboutSlider