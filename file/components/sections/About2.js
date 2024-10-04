import Link from "next/link";
const About2 = () => {
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
                    <h2 className="scrub-each-word text-split">We Provide Full Range of Wholesale worldwide</h2>
                    <div className="text">Occur that.With over four decades of experience providing solutions to large-scale enterprises  who fail their duty through weakness will which is the same as saying through.</div>
                  </div>
                  <div className="row"> 
                    <div className="image-box col-lg-4 col-md-4 col-sm-4">
                      <div className="inner">
                        <figure className="image overlay-anim"><img src="/images/resource/about2-1.jpg" alt="Image" /></figure>
                      </div>
                    </div>
                    <div className="blocks-column col-lg-8 col-md-8 col-sm-8">
                      <div className="inner-column"> 
                        <div className="about-block">
                          <div className="inner-box"> <i className="icon flaticon-container"></i>
                            <div className="content">
                              <h5 className="title">Supply Solution</h5>
                              <div className="text">With over four decades of experience providing solutions</div>
                            </div>
                          </div>
                        </div>
                        <div className="about-block">
                          <div className="inner-box"> <i className="icon flaticon-international-shipping-1"></i>
                            <div className="content">
                              <h5 className="title">Connect Business</h5>
                              <div className="text">With over four decades of experience providing solutions</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Request a Quote <i className="fa fa-long-arrow-right"></i></span></a>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2 className="float-text">We Deliver <span className="icon-angle bounce-x"></span></h2>
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="/images/resource/about3-1.jpg" alt="Image" /></figure>
                    <figure className="image-2 overlay-anim"><img src="/images/resource/about3-2.jpg" alt="Image" /></figure>
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
export default About2
