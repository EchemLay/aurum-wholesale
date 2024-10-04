import Link from "next/link"
const Features3 = () => {
  return (
    <>
      <section className="features-section-two">
        <div className="icon-dots-4"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="feature-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box mt-0">
                  <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/5.jpg)' }}></div>
                  <div className="icon-lines-3"></div>
                  <i className="icon flaticon-shipment"></i>
                  <h5 className="title"><Link href="page-about">On-Time <br/>Deliveries</Link></h5>
                  <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>

              <div className="feature-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner-box mt-0">
                  <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
                  <div className="icon-lines-3"></div>
                  <i className="icon flaticon-logistics-delivery-4"></i>
                  <h5 className="title"><Link href="page-about">Ship <br/>Transport</Link></h5>
                  <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>

              <div className="feature-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-box mt-0">
                  <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/5.jpg)' }}></div>
                  <div className="icon-lines-3"></div>
                  <i className="icon flaticon-airplane-1"></i>
                  <h5 className="title"><Link href="page-about">Global Network <br/>Coverage</Link></h5>
                  <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
      
              <div className="feature-block-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                <div className="inner-box mt-0">
                  <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
                  <div className="icon-lines-3"></div>
                  <i className="icon flaticon-order"></i>
                  <h5 className="title"><Link href="page-about">Warehousing and <br/>Distribution</Link></h5>
                  <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-box wow fadeInLeft">
            <img src="images/resource/feature2-1.jpg" alt="Image"/>
            <div className="info-box">
              <div className="text">2.6k Companies & Individuals Trusted Us. for our service</div>
              <Link href="page-services" className="read-more">All Services <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features3
