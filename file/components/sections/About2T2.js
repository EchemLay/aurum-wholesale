import Link from "next/link"
const About2T2 = () => {
  return (
    <>
    <section className="about-section-four">
      <div className="auto-container">
        <div className="row"> 
          
          <div className="content-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft">
            <div className="inner-column">
              <div className="sec-title"> <span className="sub-title">We are Commited</span>
                <h2 className="scrub-each-word text-split">Connect Your Business to world</h2>
              </div>
              <div className="count-box">
                <h1 className="count">05</h1>
                <h6 className="title">Years <br/> Experience in <br/> Transport</h6>
              </div>
              <ul className="list-style-three">
                <li><i className="fa fa-angle-double-right"></i> Freight Forwarding</li>
                <li><i className="fa fa-angle-double-right"></i> Supply Chain Management</li>
                <li><i className="fa fa-angle-double-right"></i> Reverse Logistics</li>
                <li><i className="fa fa-angle-double-right"></i> Warehousing and Distribution</li>
              </ul>
            </div>
          </div>
          
          <div className="image-column col-lg-7 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <figure className="image"><img src="images/resource/about4-1.jpg" alt="Image"/></figure>
              
              <div className="features-box">
                <div className="row g-0"> 
                  
                  <div className="feature-block-four col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box"> <i className="icon-two flaticon-logistics-1"></i>
                      <div className="icon-box"><i className="icon flaticon-logistics-1"></i></div>
                      <h5 className="title"><a href="page-about">Real Time Tracking</a></h5>
                      <div className="text">With over four decades of experience providing solutions</div>
                    </div>
                  </div>
                  
                  <div className="feature-block-four col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box"> <i className="icon-two flaticon-boxes"></i>
                      <div className="icon-box"><i className="icon flaticon-boxes"></i></div>
                      <h5 className="title"><a href="page-about">Reliable Service</a> </h5>
                      <div className="text">With over four decades of experience providing solutions</div>
                    </div>
                  </div>
                  
                  <div className="feature-block-four col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box"> <i className="icon-two flaticon-container"></i>
                      <div className="icon-box"><i className="icon flaticon-container"></i></div>
                      <h5 className="title"><a href="page-about">Warehouse Facility</a></h5>
                      <div className="text">With over four decades of experience providing solutions</div>
                    </div>
                  </div>
                  
                  <div className="feature-info-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-lines-4"></div>
                      <Link href="tel:+1-848-667-2155" className="info-btn-two"> <i className="icon fal fa-messages"></i> <small>Call for inquiry</small> <strong>+36 55 540 069</strong> </Link> </div>
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
export default About2T2
