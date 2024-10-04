import { useState } from 'react'
const Faq1 = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
    return (
        <>
        <section className="faq-section pt-0">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/4.jpg)' }}></div>
            <div className="auto-container">
            <div className="row g-0">
                <div className="faq-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                <div className="inner-column">
                    <div className="sec-title">
                    <div className="sub-title-outer"> <span className="sub-title">Faq's</span>
                        <h2 className="scrub-each-word text-split">Asked Question</h2>
                    </div>
                    </div>
                    <ul className="accordion-box">
                    <li className="accordion block">
                        <div  className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                        <h4 className="count">01.</h4>
                        You offers cost effecient ? <i className="icon fa fa-angle-down"></i>
                        </div>
                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">With over four decades of experience providing solutions Everything you  need to start selling</div>
                        </div>
                        </div>
                    </li>
                    
                    <li className="accordion block">
                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                        <h4 className="count">02.</h4>
                        How can i contact ? <i className="icon fa fa-angle-down"></i>
                        </div>
                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">With over four decades of experience providing solutions Everything you  need to start selling</div>
                        </div>
                        </div>
                    </li>
                    
                    <li className="accordion block">
                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                        <h4 className="count">03.</h4>
                        Can reduce pricing ? <i className="icon fa fa-angle-down"></i>
                        </div>
                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">With over four decades of experience providing solutions Everything you  need to start selling</div>
                        </div>
                        </div>
                    </li>
                    
                    <li className="accordion block">
                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                        <h4 className="count">04.</h4>
                        Streamlined and sustainable ? <i className="icon fa fa-angle-down"></i>
                        </div>
                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">With over four decades of experience providing solutions Everything you  need to start selling</div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="form-column col-lg-6">
                <div className="inner-column"> 
                    <div className="contact-form wow fadeInLeft">
                    <div className="icon-lines-2"></div>
                    <h3 className="title">Request A Quote</h3>
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
                            <button type="submit" className="theme-btn btn-style-one hover-light" name="submit-form"><span className="btn-title">Submit request <i className="icon fa fa-arrow-right"></i></span></button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};
export default Faq1
