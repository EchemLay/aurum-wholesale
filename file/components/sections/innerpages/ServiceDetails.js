import Link from 'next/link';
import { useState } from "react";

const ServiceDetails = () => {

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>

  {/* Start Services Details */}
  <section className="services-details">
    <div className="container">
      <div className="row">
        {/* Start Services Details Sidebar */}
        <div className="col-xl-4 col-lg-4">
          <div className="service-sidebar">
            {/* Start Services Details Sidebar Single */}
            <div className="sidebar-widget service-sidebar-single">

              <div className="sidebar-service-list">
                <ul>
                  <li><Link href="page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Wholesale Distribution</span></Link></li>
                  {/* <li className="current"><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Sea freight</span></Link></li> */}
                  <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Dropshipping</span></Link></li>
                  <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Logistics solution</span></Link></li>
                  <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Custom Packaging</span></Link></li>
                  {/* <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Land Transport</span></Link></li> */}
                </ul>
              </div>

              <div className="service-details-help">
                <div className="help-shape-1"></div>
                <div className="help-shape-2"></div>
                <h2 className="help-title">Contact with <br/> us for any <br/> advice</h2>
                <div className="help-icon">
                  <span className=" lnr-icon-phone-handset"></span>
                </div>
                <div className="help-contact">
                  <p>Need help? Talk to an expert</p>
                  <Link href="tel:+1-848-667-2155">+1-848-667-2155</Link>
                </div>
              </div>

              {/* Start Services Details Sidebar Single */}
              <div className="sidebar-widget service-sidebar-single mt-4">
                {/* <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                  <Link href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                </div> */}
              </div>
            </div>
            {/* End Services Details Sidebar */}
          </div>
        </div>

        {/* Start Services Details Content */}
        <div className="col-xl-8 col-lg-8">
          <div className="services-details__content">
            <img src="images/resource/service-details.jpg" alt="" />
            <h3 className="mt-4">Services Overview</h3>
            <p>At Aurum Wholesale, we provide a wide array of wholesale solutions tailored to meet the diverse needs of businesses and consumers. With decades of experience in the industry, our focus is on delivering high-quality products and exceptional services that streamline your operations and enhance your success </p>
            <p>Our mission is grounded in reliability and efficiency, making us your ideal partner for navigating the complexities of wholesale distribution.  </p>
            <div className="content mt-40">
              <div className="text">
                <h3>Service Center</h3>
                <p>Our commitment to efficiency and reliability means you can count on us to be your trusted partner in wholesale distribution, dropshipping, logistics, and custom packaging.</p>
                <blockquote className="blockquote-one">We aim to create value for our clients by providing innovative solutions that adapt to changing market demands.</blockquote>
              </div>
              <div className="feature-list mt-4">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <img className="mb-3" src="images/resource/service-d1.jpg" alt="images" />
                    <p>We maintain a vast inventory of high-quality products across multiple categories, ensuring you have access to what you need, when you need it</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <img className="mb-3" src="images/resource/service-d2.jpg" alt="images" />
                    <p>We take the hassle out of inventory management. We handle everything from warehousing to packing and shipping, allowing you to focus on and reaching new markets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerpage mt-25">
              <h3>Frequently Asked Question</h3>
              <p>Contact us with any inquiries about our services.</p>
              <ul className="accordion-box wow fadeInRight">
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 1 ? "acc-btn ps-0 active" : "acc-btn"} onClick={() => handleClick(1)}>
                  Do you have a minimum order requirement?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">No, we do not impose a minimum order requirement for wholesale purchases. This flexibility allows you to order as much or as little as you need, making it easier to manage your inventory.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 2 ? "acc-btn ps-0 active" : "acc-btn"} onClick={() => handleClick(2)}>
                  What shipping options are available?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">We provide various shipping options, including standard and express delivery. You can choose the method that best suits your timeline and budget. We also offer tracking services so you can monitor your shipments in real-time.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 3 ? "acc-btn ps-0 active" : "acc-btn"} onClick={() => handleClick(3)}>
                  Do you offer international shipping?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Yes, we offer international shipping to various countries. If you have specific shipping requirements or questions about destinations, please contact our support team for more information.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 4 ? "acc-btn ps-0 active" : "acc-btn"} onClick={() => handleClick(4)}>
                  How do I get support if I encounter issues?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">Our customer support team is available to assist you with any questions or issues. You can reach out via phone, email, or our online chat system, and we will respond promptly to ensure your concerns are addressed.help@company.com</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Services Details Content */}
      </div>
    </div>
  </section>
  {/* End Services Details */}

    </>
  );
};
export default ServiceDetails
