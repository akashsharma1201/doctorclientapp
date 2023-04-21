import React from 'react';
import "./NewsLetter.css";


const NewsLetter = () => {
    return (
        <div className='news-letter-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className=' newsletter-bar'>
                            <div className='col-md-6'>
                                <div className='news-letter-info'>
                                    <h2>Join Our Newsletter</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <form>
                                    <div className='news-letter-field'>
                                        <input type='text' placeholder='Enter Your Email' />
                                        <button className='' type='submit'>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter