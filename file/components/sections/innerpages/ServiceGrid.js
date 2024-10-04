import Link from 'next/link';

const ServiceGrid = () => {
  return (
    <>

  {/* Service section */}
  <section className="services-section pt-90">
    <div className="auto-container">
      <div className="row"> 
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-1.jpg" alt="Image"/> <img src="images/resource/service2-1.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">01 Service</span>
              <h4 className="title"><Link href="page-service-details">Air Freight</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-2.jpg" alt="Image"/> <img src="images/resource/service2-2.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">02 Service</span>
              <h4 className="title"><Link href="page-service-details">Sea Transport</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-3.jpg" alt="Image"/> <img src="images/resource/service2-3.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">03 Service</span>
              <h4 className="title"><Link href="page-service-details">Road Transport</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-1.jpg" alt="Image"/> <img src="images/resource/service2-1.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">01 Service</span>
              <h4 className="title"><Link href="page-service-details">Air Freight</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-3.jpg" alt="Image"/> <img src="images/resource/service2-3.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">03 Service</span>
              <h4 className="title"><Link href="page-service-details">Road Transport</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1000ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="images/resource/service2-2.jpg" alt="Image"/> <img src="images/resource/service2-2.jpg" alt="Image"/> </Link> </figure>
              <i className="icon flaticon-air-freight"></i>
            </div>
            <div className="content-box"> <span className="count">02 Service</span>
              <h4 className="title"><Link href="page-service-details">Sea Transport</Link></h4>
            </div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end service section fore */}


    </>
  );
};
export default ServiceGrid
