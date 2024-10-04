import Link from "next/link";

const Services5 = () => {
  return (
    <>


    <section className="services-section-four">
      <div className="auto-container">
        <div className="row"> 
          {/* Service Block */}
          <div className="service-block-four col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service3-1.png" alt="Image"/></Link></figure>
              </div>
              <div className="content-box">
                <div className="content">
                  <h4 className="title"><Link href="page-service-details">Ship Fright</Link></h4>
                  <div className="text">With over four decades of experience providing solutions</div>
                  <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block-four col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service3-2.png" alt="Image"/></Link></figure>
              </div>
              <div className="content-box">
                <div className="content">
                  <h4 className="title"><Link href="page-service-details">Road Fright</Link></h4>
                  <div className="text">With over four decades of experience providing solutions</div>
                  <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Service Block */}
          <div className="service-block-four col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service3-3.png" alt="Image"/></Link></figure>
              </div>
              <div className="content-box">
                <div className="content">
                  <h4 className="title"><Link href="page-service-details">Air Fright</Link></h4>
                  <div className="text">With over four decades of experience providing solutions</div>
                  <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-box wow fadeInLeft">
          <div className="info-box">
            <div className="text">2.6k Companies & Individuals Trusted Us. for our service</div>
            <Link href="page-services" className="read-more">All Services <i className="icon fa fa-long-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};
export default Services5
