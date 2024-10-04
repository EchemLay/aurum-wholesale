import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ReactSlider from 'react-slider';

const Video2 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="contact-section p-0">
      <div className="icon-plane-7 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/8.jpg)' }}></div>
          <div className="row"> 
          <div className="form-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column"> 
                <div className="contact-form wow fadeInLeft">
                  <div className="icon-lines-2"></div>
                  <h3 className="title ">Request A Quote</h3>
                  <form method="post" action="get" id="contact-form">
                    <div className="row">
                      <div className="form-group col-lg-12 col-md-12">
                        <input type="text" name="name" placeholder="Full Name" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="tel" name="phone" placeholder="Phone" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="email" name="email" placeholder="Email" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="text" name="departure" placeholder="Departure" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="text" name="deliver" placeholder="Deliver" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="text" name="height" placeholder="Height" required/>
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input type="text" name="weight" placeholder="Weight" required/>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <div className="range-slider-one">
                          <label className="mb-30">Dist (Miles):</label>
                          <ReactSlider
                            className="horizontal-slider form-group mb-4"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[0, 35, 100]}
                            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <span {...props}>{state.valueNow}</span>}
                            pearling
                            minDistance={1}
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-12">
                        <button type="submit" className="theme-btn btn-style-one dark-bg" name="submit-form"><span className="btn-title">Submit request <i className="icon fa fa-arrow-right"></i></span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="video-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="icon-text"></div>
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
export default Video2
