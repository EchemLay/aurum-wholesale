import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Video3 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="call-to-action-two">
      <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/12.jpg)' }}></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row"> 
            <div className="content-column col-lg-9 order-1 order-lg-0 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title light">
                  <span className="sub-title">Get in touch with us anytime</span>
                  <h2 className="scrub-each-word text-split">Looking for the Best <br/>Logistics Transport <span className="highlighted">Service?</span></h2>
                </div>
                <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">Get A Quote <i className="fa fa-long-arrow-right"></i></span></Link>
              </div>
            </div>
            
            <div className="video-column col-lg-3 order-0 order-lg-1">
              <div className="inner-column">
                <div className="video-box"><a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play ps-0" aria-hidden="true"></i><span className="ripple"></span></a>  </div>
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
export default Video3
