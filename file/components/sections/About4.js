import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const About4 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="about-section-five pt-0">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="content-column col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="sub-title-outer"> <span className="sub-title">We are commited</span>
                    <h2 className="scrub-each-word text-split">Specialist Logistics <br/>Services & fright</h2>
                  </div>
                </div>
                <div className="row"> 
                  {/* Experience Box */}
                  <div className="image-box col-lg-7 col-md-5 col-sm-6">
                    <div className="inner">
                      <figure className="image reveal visible overlay-anim"><img src="images/resource/about5-1.jpg" alt="Image"/></figure>
                    </div>
                  </div>
                  <div className="exp-column col-lg-5 col-md-6 col-sm-6">
                    <div className="inner">
                      <div className="video-box">
                        <figure className="image reveal visible overlay-anim"><img src="images/resource/about5-2.jpg" alt="Image"/></figure>
                        <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" aria-hidden="true"></i></a>
                      </div>
                      <div className="exp-box">
                        <div className="text">since</div>
                        <h6 className="title">2001</h6>
                      </div>
                    </div>
                    <div className="text-2">With over four decades of experience providing solutions to large-scale enterprises  who fail their</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blocks Column */}
            <div className="blocks-column col-lg-5 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
              <div className="inner-column"> 
                {/* About Block */}
                <div className="about-block-three">
                  <div className="inner-box"> <i className="icon flaticon-logistics-1"></i>
                    <div className="content">
                      <h5 className="title">Worldwide Service</h5>
                      <div className="text">With over four decades of experience providing solutions Everything you need to start selling</div>
                    </div>
                  </div>
                </div>
                {/* About Block */}
                <div className="about-block-three">
                  <div className="inner-box"> <i className="icon flaticon-boxes"></i>
                    <div className="content">
                      <h5 className="title">Reliable Service</h5>
                      <div className="text">With over four decades of experience providing solutions Everything you need to start selling</div>
                    </div>
                  </div>
                </div>
                {/* About Block */}
                <div className="about-block-three">
                  <div className="inner-box border-0 pb-0"> <i className="icon flaticon-container"></i>
                    <div className="content">
                      <h5 className="title">Warehouse Facility</h5>
                      <div className="text">With over four decades of experience providing solutions Everything you need to start selling</div>
                    </div>
                  </div>
                </div>
                <a href="tel:+1-848-667-2155" className="expert-info-box">
                  <figure className="image"><img src="images/resource/expert-info-1.png" alt="Image"/></figure>
                  <i className="icon fa fa-phone"></i>
                  <span className="info-btn">
                    <small>Talk with expert</small> +36 55 540 069
                  </span>
                </a>
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
export default About4
