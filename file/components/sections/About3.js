import Link from "next/link";

const About3 = () => {
  return (
    <>
    <section className="about-section-three">
      <div className="icon-plane-4 bounce-y"></div>
      <div className="icon-container-2"></div>
      <div className="icon-plane-6"></div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Who we are</span>
                <h2 className="scrub-each-word text-split">We Provide Full Range of Wholesale solutions worldwide</h2>
                <div className="text">Our commitment to quality and service ensures that we meet the diverse needs of our clients, helping them thrive in a competitive marketplace.</div>
              </div>
              <div className="row">
                <div className="about-block-two">
                  <div className="inner-box">
                    <i className="icon flaticon-air-freight"></i>
                    <div className="content">
                      <h4 className="title">Wholesale Distribution</h4>
                      <div className="text">We pride ourselves on providing personalized support and solutions for local businesses.</div>
                    </div>
                  </div>
                </div>
                <div className="about-block-two">
                  <div className="inner-box">
                    <i className="icon flaticon-order"></i>
                    <div className="content">
                      <h4 className="title">Worldwide Service</h4>
                      <div className="text">We offer complete solutions tailored to the unique requirements of businesses across the globe.</div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Contact Us</span></a>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <h2 className="float-text">We Deliver <span className="icon-angle bounce-x"></span></h2>
              <div className="image-box">
                <figure className="image overlay-anim"><img src="/images/resource/about3-1.jpg" alt="Image"/></figure>
                <figure className="image-2 overlay-anim"><img src="/images/resource/about3-2.jpg" alt="Image"/></figure>
                <i className="icon flaticon-airplane-1"></i>
                <div className="exp-box">
                  <div className="inner">
                    <i className="flaticon-air-freight"></i>
                    <h6 className="title">24/7 Delivery Service</h6>
                  </div>
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
export default About3
