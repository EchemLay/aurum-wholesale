import Link from "next/link";
const WhyChose = () => {
  return (
    <>

  <section className="why-choose-us">
    <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/13.jpg)'}} ></div>
    <div className="auto-container">
      <div className="row"> 
        {/* Content Column */}
        <div className="content-column col-lg-5 col-lg-7 col-md-10 wow fadeInLeft">
          <div className="inner-column">
            <div className="sec-title light">
              <span className="sub-title">Why Choose Us</span>
              <h2 className="scrub-each-word text-split">Fast & Secure logistic service</h2>
              <div className="text">Occur that.With over four decades of experience providing <br/>solutions to large-scale enterprises  who fail their duty through weakness will which is the same as saying through.</div>
            </div>
            <div className="info-content-column">
              {/* Count Box */}
              <div className="count-box">
                <h1 className="count">05</h1>
                <h6 className="title">Years <br/> Experience</h6>
              </div>
              <div className="features-box">
                <div className="feature-block-two">
                  <div className="inner-box"> <i className="icon flaticon-logistics-1"></i>
                    <h6 className="title">Affordable Price <br/>upto 2 years</h6>
                  </div>
                </div>
                <div className="feature-block-two">
                  <div className="inner-box"> <i className="icon flaticon-container"></i>
                    <h6 className="title">We specialise in the <br/>transportation</h6>
                  </div>
                </div>
              </div>
            </div>
            <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">Contact Us <i className="fa fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default WhyChose
