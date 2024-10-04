import Link from "next/link";
import React, { useState } from 'react';
const Tab2 = () => {
  
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
    <section className="contact-section-two pull-up">
      <div className="auto-container">
        <div className="contact-block-two">
          <div className="contact-tabs tabs-box">
            <ul className="tab-buttons clearfix">
              <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1"><span className="title">Our Missions</span></li>
              <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2"><span className="title">Our Visions</span></li>
            </ul>

            <div className="tabs-content">
              <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
                <div className="row">
                  {/* Form Column */}
                  <div className="form-column col-lg-8">
                    <div className="inner-column"> 
                      {/* Contact Form */}
                      <div className="contact-form wow fadeInLeft">
                        <form method="post" action="get" id="contact-form">
                          <div className="row">
                            <div className="form-group-title col-lg-12">Personal Datad</div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="text" name="name" placeholder="Full Name" required/>
                            </div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="tel" name="phone" placeholder="Phone" required/>
                            </div>
                            <div className="form-group-title col-lg-12">Shipment Data</div>
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
                            <div className="form-group col-lg-12">
                              <div className="custom-checkboxes">
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Express
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Regular
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Insurance
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Fragile
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-lg-12">
                              <button type="submit" className="theme-btn btn-style-one dark-bg hover-light" name="submit-form"><span className="btn-title">Submit request <i className="icon fa fa-arrow-right"></i></span></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*End Contact Fo--> */}
                  {/* Call To Action Column */}
                  <div className="call-to-action col-lg-4">
                    <div className="inner-column">
                      <h5>Take your career to next level</h5>
                      <span className="text">We pride ourselves on providing the best transport & shipping services available allover the world.</span>
                      <Link href="page-contact" className="theme-btn btn-style-one white-bg"><span className="btn-title"><i className="fa fa-long-arrow-right me-2"></i> Apply Now</span></Link>
                    </div>
                  </div>
                  {/*End Call To Action Column */}
                </div>
              </div>

              <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
                <div className="row">
                  {/* Form Column */}
                  <div className="form-column col-lg-8">
                    <div className="inner-column"> 
                      {/* Contact Form */}
                      <div className="contact-form wow fadeInLeft">
                        <form method="post" action="get" id="contact-form">
                          <div className="row">
                            <div className="form-group-title col-lg-12">Personal Data</div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="text" name="name" placeholder="Full Name" required/>
                            </div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="form-group col-lg-4 col-md-4">
                              <input type="tel" name="phone" placeholder="Phone" required/>
                            </div>
                            <div className="form-group-title col-lg-12">Shipment Data</div>
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
                            <div className="form-group col-lg-12">
                              <div className="custom-checkboxes">
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Express
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Regular
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Insurance
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label className="custom-checkbox"> Fragile
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-lg-12">
                              <button type="submit" className="theme-btn btn-style-one dark-bg hover-light" name="submit-form"><span className="btn-title">Submit request <i className="icon fa fa-arrow-right"></i></span></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/*End Contact Fo--> */}
                  {/* Call To Action Column */}
                  <div className="call-to-action col-lg-4">
                    <div className="inner-column">
                      <h5>Take your career to next level up</h5>
                      <span className="text">We pride ourselves on providing the best transport & shipping services available allover the world.</span>
                      <Link href="page-contact" className="theme-btn btn-style-one white-bg"><span className="btn-title"><i className="fa fa-long-arrow-right me-2"></i> Apply Now</span></Link>
                    </div>
                  </div>
                  {/*End Call To Action Column */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Tab2
