import React from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import "./VideoSection.css";

const VideoSection = () => {
    return (
        <>
            <div className='video-section mt-5'>
                <div className='container-fluid'>
                    {/* <iframe /> */}

                    <div className='row'>
                        <div className='col-lg-8 mx-auto'>
                            <div className='button-wrapper mt-5'>
                                <button type="button" class="btn btn-primary my-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <BsFillPlayFill />
                                </button>
                            </div>
                        </div>

                        {/* -------------nav tab content------------ */}
                        <div className='col-lg-6 offset-xl-1 mt-5'>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="hospital-introduction" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <h3>
                                        Hospital Introduction
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                                <div class="tab-pane fade" id="pharmacy" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <h3>
                                        About Our Pharmacy
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                                </div>
                                <div class="tab-pane fade" id="research-and-lab" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <h3>
                                        Our reasearch center and lab
                                    </h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master</p>
                                </div>
                                <div class="tab-pane fade" id="icc-and-icu" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <h3>
                                        CCU & ICU
                                    </h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
                                </div>
                                <div class="tab-pane fade" id="doctors" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <h3>
                                        Our Doctors
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* -------------nav tab ------------ */}
            <div className='nav-tab-box mb-5'>
                <ul class="nav nav-pills " id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#hospital-introduction" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Hospital Introduction</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pharmacy" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pharmacy</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#research-and-lab" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Research & Lab</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#icc-and-icu" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">CCI & ICU</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#doctors" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Doctors</button>
                    </li>
                </ul>

            </div>



            {/* -------------modal bootstrap------------ */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe className='img-fluid' src="https://www.youtube.com/embed/dhKCa7ACEwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default VideoSection