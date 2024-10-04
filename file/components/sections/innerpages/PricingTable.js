import Link from 'next/link';

const PricingTable = () => {
  return (
    <>

    {/* Pricing Section */}
    <section className="pricing-section pt-120 pb-120">
      <div className="auto-container">
        <div className="row">
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href=""><img src="images/resource/pricing-1-1.jpg" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="">Business Supplies</Link></h3>
              <div className="price"><small>Bulk Orders available</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Industrial Equipment</li>
                <li><span className="icon icon-arrow"></span>Electronics & Technology</li>
                <li><span className="icon icon-arrow"></span>Office Supplies</li>
                <li><span className="icon icon-arrow"></span>Home Supplies</li>
                <li><span className="icon icon-arrow"></span>Cleaning supplies</li>
              </ul>
              <div className="btn-box">
                <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Connect With Us</span></Link>
              </div>
            </div>
          </div>
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href=""><img src="images/resource/pricing1-2.png" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="">Consumer Goods</Link></h3>
              <div className="price"><small>Diverse Selection</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Holiday decorations</li>
                <li><span className="icon icon-arrow"></span>Stylish home goods</li>
                <li><span className="icon icon-arrow"></span>Fitness products</li>
                <li><span className="icon icon-arrow"></span>Fashion accessories</li>
                <li><span className="icon icon-arrow"></span>Foods and beverages</li>
              </ul>
              <div className="btn-box">
                <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Connect With Us</span></Link>
              </div>
            </div>
          </div>
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href=""><img src="images/resource/pricing1-3.png" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="">Import / Export Services </Link></h3>
              <div className="price"><small>Connect World Markets</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Global sourcing</li>
                <li><span className="icon icon-arrow"></span>Customs clearance </li>
                <li><span className="icon icon-arrow"></span>Market research</li>
                <li><span className="icon icon-arrow"></span>Flexible shipping</li>
                <li><span className="icon icon-arrow"></span>Compliance Experts</li>
              </ul>
              <div className="btn-box">
                <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Connect With Us</span></Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    {/* End Pricing Section */}

    </>
  );
};
export default PricingTable
