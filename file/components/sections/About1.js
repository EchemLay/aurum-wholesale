
const About1 = () => {
  return (
    <>
    <section className="about-section">
      <div className="icon-container"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="icon-dots"></div>
          <div className="row"> 
            
            <div className="content-column col-lg-6 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title"> <span className="sub-title">Who we are</span>
                  <h2 className="scrub-each-word text-split">Delivering Excellence <br/>in Wholesaling</h2>
                </div>
                <div className="row">
                  <div className="list-box col-lg-7 col-md-7">
                    <ul className="list-style-two">
                      <li><i className="fa fa-circle-arrow-right"></i> Product Sourcing</li>
                      <li><i className="fa fa-circle-arrow-right"></i> Bulk Order Fulfillment</li>
                      <li><i className="fa fa-circle-arrow-right"></i> Custom Packaging</li>
                      <li><i className="fa fa-circle-arrow-right"></i> Flexible Shipping </li>
                    </ul>
                  </div>
                  {/* <div className="author-box col-lg-5 col-md-5">
                    <div className="inner-box">
                      <div className="author-img"><img src="images/resource/about1-thumb1.jpg" alt="Image"/></div>
                      <div className="author-info">
                        <h6 className="name">Transplix</h6>
                        <span className="designation"> Team </span> <img src="images/resource/sign.png" alt="Signature"/>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="text">We understand the unique demands of the wholesale industry. Our team is dedicated to ensuring smooth operations, timely deliveries, and exceptional customer service that help your business thrive.</div>
              </div>
            </div>
            
            <div className="image-column col-lg-6">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim"><img src="images/resource/about1-1.jpg" alt="Image"/></figure>
                  <figure className="image-2 overlay-anim"><img src="images/resource/about1-2.jpg" alt="Image"/></figure>
                  <div className="exp-box bounce-y">
                    <div className="inner">
                      <i className="icon flaticon-air-freight"></i>
                      <h6 className="title">24/7 Delivery Service</h6>
                    </div>
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
export default About1
