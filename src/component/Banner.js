import React from 'react'
import { Link } from 'react-router-dom';
import "./Banner.css";
import {MdArrowForwardIos, } from "react-icons/md"

const Banner = ({title}) => {
    // console.log(title);
    return (
        <div className='banner-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 mx-auto'>
                        <div className='banner-text'>
                            <h1> {title} </h1>
                            <h3><Link to="/">Home</Link> <MdArrowForwardIos /> {title} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner