import Link from "next/link"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video1 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section pull-up">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
                <div className="icon-plane-3 bounce-x"></div>
                <div className="auto-container">
                <div className="row"> 
                    <div className="content-column col-lg-6 wow fadeInLeft">
                    <div className="inner-column">
                        <div className="sec-title light">
                        <h2 className="scrub-each-word text-split">We offers cost effecient Transport shipping</h2>
                        <div className="text">With over four decades of experience providing solutions to large-scale enterprises  who fail their duty through weakness will which is the same as saying through.</div>
                        </div>
                        <div className="features-box">
                        <div className="row">
                            <div className="feature-block-two col-sm-6">
                            <div className="inner-box"> <i className="icon flaticon-logistics-1"></i>
                                <h6 className="title">Efficient logistics <br/> solutions</h6>
                            </div>
                            </div>
                            <div className="feature-block-two col-sm-6">
                            <div className="inner-box"> <i className="icon flaticon-container"></i>
                                <h6 className="title">Add value to your <br/> business</h6>
                            </div>
                            </div>
                        </div>
                        </div>
                        <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">Request a quote <i className="fa fa-long-arrow-right"></i></span></Link>
                    </div>
                    </div>
                    <div className="video-column col-lg-6">
                    <div className="inner-column">
                        <div className="icon-text"></div>
                        <div className="shape"></div>
                        <div className="video-box">
                            <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video1
