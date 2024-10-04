import Link from "next/link"
const Services2 = () => {
  return (
    <>
    <section className="services-section-two">
      <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/10.png)' }}></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title-outer"> <span className="sub-title">SPECIALISE IN THE TRANSPORTATION</span>
            <h2 className="scrub-each-word text-split">Specialist Wholesale Services</h2>
          </div>
        </div>
        <div className="row"> 
          <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-1.jpg" alt="Image"/> <img src="images/resource/service2-1.jpg" alt="Image"/></Link> </figure>
                <i className="icon flaticon-air-freight"></i>
              </div>
              <div className="content-box"> <span className="count">01 Service</span>
                <h4 className="title"><Link href="page-service-details">Wholesale Distribution</Link></h4>
              </div>
              <Link href="page-service-details" className="read-more">Read More</Link>
            </div>
          </div>
          
          <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-2.jpg" alt="Image"/> <img src="images/resource/service2-2.jpg" alt="Image"/></Link> </figure>
                <i className="icon flaticon-air-freight"></i>
              </div>
              <div className="content-box"> <span className="count">02 Service</span>
                <h4 className="title"><Link href="page-service-details">Dropshipping Services</Link></h4>
              </div>
              <Link href="page-service-details" className="read-more">Read More</Link>
            </div>
          </div>
          
          <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-3.jpg" alt="Image"/> <img src="images/resource/service2-3.jpg" alt="Image"/></Link> </figure>
                <i className="icon flaticon-air-freight"></i>
              </div>
              <div className="content-box"> <span className="count">03 Service</span>
                <h4 className="title"><Link href="page-service-details">Logistics and Shipping</Link></h4>
              </div>
              <Link href="page-service-details" className="read-more">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Services2
