import Link from "next/link"

export default function Footer1() {
  return (
  <>

  <footer className="main-footer footer-style-one">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/3.jpg)' }}></div>
    <div className="icon-plane-3 bounce-x"></div>

    <div className="widgets-section">
      <div className="auto-container">
        <div className="row">

          <div className="footer-column col-lg-4 col-sm-6">
            <div className="footer-widget about-widget">
              <div className="widget-content">
                <div className="logo"><Link href="/"><img src="images/logo.png" alt="Logo"/></Link></div>
                <div className="text">We strongly support best practice sharing across our operations around the world and across various industrial sectors.</div>
                <Link href="tel:+8801750050088" className="info-btn-two">
                  <i className="icon fal fa-envelope"></i>
                  <small>Make a Call</small>
                  <strong>+1-848-667-2155</strong>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="footer-column col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h5 className="widget-title">Contact Us</h5>
              <div className="widget-content">
                <ul className="contact-list-two">
                  <li><i className="fal fa-phone"></i> <Link href="tel:+8801750050088">+1-848-667-2155</Link></li>
                  <li><i className="fal fa-envelope"></i> <Link href="mailto:info@aurumwholesale.com">info@aurumwholesale.com</Link></li>
                  <li><i className="fal fa-map-marker-alt"></i> 6901 K Ave Suite #101 <br/>Plano, TX 75074 </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-column col-lg-2 col-sm-6">
            <div className="footer-widget links-widget">
              <h5 className="widget-title">Quick Links</h5>
              <div className="widget-content">
                <ul className="user-links">
                <li><Link href="/home"><i className="fa fa-angles-right"></i> Home</Link></li>
                  <li><Link href="/page-about"><i className="fa fa-angles-right"></i> About Us</Link></li>
                  <li><Link href="/page-pricing"><i className="fa fa-angles-right"></i> Products</Link></li>
                  <li><Link href="/page-contact"><i className="fa fa-angles-right"></i> Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-column col-lg-2 col-sm-6">
            <div className="footer-widget links-widget">
              <h5 className="widget-title">Our Services</h5>
              <div className="widget-content">
                <ul className="user-links">
                  <li><i className="fa fa-angles-right"></i>Wholesale Distribution</li>
                  <li><i className="fa fa-angles-right"></i>Dropshipping</li>
                  <li><i className="fa fa-angles-right"></i>Logistics solution</li>
                  <li><i className="fa fa-angles-right"></i>Custom Packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="inner-container">
          <div className="copyright-text">Aurum Wholesale © Copyrights Reserved</div>
          <ul className="social-icon-two">
            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  </>
  )
}
