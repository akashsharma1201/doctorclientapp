import React from 'react';
import "./BlogSection.css";
import { blogSectionData } from './data';

const BlogSection = () => {
    return (
        <div className='blog-section py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 section-heading'>
                        <h2>Our Latest Blogs</h2>
                    </div>
                    {
                        blogSectionData.map((item, index) => {
                            return (
                                <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
                                    <div className='blog-card'>
                                        <div className='img-box'>
                                            <img src={item.image} className='img-fluid' alt='blog-card' />
                                        </div>
                                        <div className='blog-card-body'>
                                            <div className='blog-text'>
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className='card-footer'>
                                                <span>Read More</span>
                                                <span>Jan 03, 2022</span>
                                            </div>
                                        </div>
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

export default BlogSection