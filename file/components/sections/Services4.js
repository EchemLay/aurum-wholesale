import Link from "next/link";

const Services4 = () => {
  return (
    <>

    {/* Services Section Three */}
    <section className="services-section-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row g-0"> 
            {/* Service Block */}
            <div className="service-block-three col-lg-7">
              <div className="inner-box">

                <div className="row g-0">
                  <div className="icon-box col-lg-4">
                    <div className="inner">
                      <i className="icon flaticon-shipment"></i>
                      <h5 className="title">On-Time <br/>Deliveries</h5>
                    </div>
                  </div>
                  <div className="icon-box col-lg-4">
                    <div className="inner">
                      <i className="icon flaticon-logistics-delivery-4"></i>
                      <h5 className="title">Ship <br/>Transport</h5>
                    </div>
                  </div>
                  <div className="icon-box col-lg-4">
                    <div className="inner">
                      <i className="icon flaticon-logistics-1"></i>
                      <h5 className="title">Global <br/>Network</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter-block col-lg-4 offset-lg-1">
              <div className="inner-box">
                <div className="subscribe-form">
                  <h6 className="title">Track Your Shipment</h6>
                  <div className="text">Real-time progress as your shipment speed.</div>
                  <form method="post" action="#">
                    <div className="form-group">
                      <input type="text" name="number" className="number" placeholder="Tracking Number:" required=""/>
                      <button type="button" className="theme-btn btn-style-one"><span className="btn-title">Track Now!</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}


    </>
  );
};
export default Services4
