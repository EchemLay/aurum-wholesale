import Link from "next/link"
const Features1 = () => {
  return (
    <>
    <section className="features-section p-0">
      <div className="icon-plane-4 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="bg bg-pattern-2"></div>
          <div className="sec-title text-center">
            <div className="sub-title-outer"> <span className="sub-title">Our Products</span>
              <h2 className="scrub-each-word text-split">Extensive Inventory<br/>
              Ready to Order</h2>
            </div>
          </div>
          <div className="row g-0"> 
            <div className="features-column col-lg-8 col-md-12 order-2 wow fadeInRight">
              <div className="inner-column">
                <div className="row g-0"> 
                  <div className="feature-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="bg-map-2"></div>
                      <div className="icon-box"><i className="icon flaticon-logistics-1"></i></div>
                      <h5 className="title"><Link href="page-about">Business Supplies</Link></h5>
                      <div className="text">From essential office supplies and premium stationery to cutting-edge technology and eco-friendly cleaning products, we have everything you need to create an organized environment.</div>
                    </div>
                  </div>
                  <div className="feature-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="bg-map-2"></div>
                      <div className="icon-box"><i className="icon flaticon-boxes"></i></div>
                      <h5 className="title"><Link href="page-about">Consumer Goods</Link> </h5>
                      <div className="text">Explore our diverse selection of consumer goods designed to enhance everyday life. From the latest electronics and stylish home goods to high-quality health and beauty products, we offer items that cater to every need and taste.</div>
                    </div>
                  </div>
                  <div className="feature-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="bg-map-2"></div>
                      <div className="icon-box"><i className="icon flaticon-container"></i></div>
                      <h5 className="title"><Link href="page-about">Seasonal Products</Link></h5>
                      <div className="text">Celebrate every occasion with our curated selection of seasonal products. From festive decorations and holiday gifts to summer essentials and outdoor items, we provide a wide range of high-quality goods that enhance your celebrations and everyday life.</div>
                    </div>
                  </div>
                  <div className="feature-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="bg-map-2"></div>
                      <div className="icon-box"><i className="icon flaticon-box-1"></i></div>
                      <h5 className="title"><Link href="page-about">Import/Export</Link></h5>
                      <div className="text">Leverage our expertise in import and export to access global markets seamlessly. We specialize in sourcing high-quality products from around the world, ensuring compliance with international regulations and strict quality assurance processes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="info-banner col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="content-box">
                <div className="image-box">
                  <figure className="image"><img src="images/resource/feature1-1.jpg" alt="Image"/></figure>
                  <div className="icon-lines"></div>
                </div>
                <i className="icon-two flaticon-delivery-6"></i>
                <h4 className="title">Finest <span>International Trasnport Company</span> for Wholesale</h4>
                <Link href="tel:+1-848-667-2155" className="info-btn-two"><i className="icon fal fa-envelope"></i> <small>Call for inquiry</small> <strong>+1-848-667-2155</strong> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Features1
