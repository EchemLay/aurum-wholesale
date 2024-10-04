const Process3 = () => {
  return (
    <>

  <section className="work-section">
    <div className="anim-icons">
      <span className="icon icon-container-4"></span>
    </div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="sec-title text-center">
          <span className="sub-title">Processing</span>
          <h2>3 Easy steps To Deliver</h2>
        </div>
    
        <div className="row">
          {/* Work Block */}
          <div className="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
            <div className="inner-box">
              <div className="icon-box">
                <span className="count">01</span>
                <i className="icon flaticon-delivery-box-4"></i>
              </div>
              <h4 className="title">Request A Quote</h4>
              <div className="text">With over four decades of experience providing solutions</div>
            </div>
          </div>
    
    
          {/* Work Block */}
          <div className="work-block work-block-reverse col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-box">
              <h4 className="title">Order Placment</h4>
              <div className="text">With over four decades of experience providing solutions</div>
              <div className="icon-box">
                <span className="count">02</span>
                <i className="icon flaticon-stock-1"></i>
              </div>
            </div>
          </div>
    
          {/* Work Block */}
          <div className="work-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="icon-box">
                <span className="count">03</span>
                <i className="icon flaticon-delivery-box-3"></i>
              </div>
              <h4 className="title">Happy Shipping</h4>
              <div className="text">With over four decades of experience providing solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default Process3
