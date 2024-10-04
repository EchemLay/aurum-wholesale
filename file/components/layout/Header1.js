import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style-one ${isSearch ? "moblie-search-active" : ""}`}>
    {/* Header Top */}
    {/* <div className="header-top">
      <div className="inner-container">
        <div className="top-left">
          <ul className="features-list">
            <li><Link href="#">FAQ's</Link></li>
            <li><Link href="#">Testimonial</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
          
        <div className="top-right">
          <ul className="social-icon-one light">
            <li><Link href="#"><i className="icon fab fa-instagram"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
            <li><Link href="#"><i className="icon fab fa-linkedin-in"></i></Link></li>
          </ul>

          <ul className="list-style-one">
            <li><i className="fal fa-clock"></i> Mon - Fri: 09.00am - 10.00 pm</li>
            <li><i className="fa fa-map-marker-alt"></i> Richardson, California 62639 </li>
            <li><i className="fa fa-envelope"></i> <Link href="mailto:demo@mail.com" className="">Transplix@mail.com</Link></li>
          </ul>
        </div>
      </div>
    </div> */}
    {/* Header lower */}
    <div className="header-lower">
      <div className="main-box">
        <div className="logo-box">
          <div className="logo"><Link href="/"><img src="images/logo.png" alt="Logo" title="Transplix"/></Link></div>
        </div>
        <div className="nav-outer">
          <nav className="nav main-menu">
            <Menu/>
          </nav>
        </div>
        <div className="outer-box">
          {/* <button className="ui-btn ui-btn cart-btn">
            <i className="icon lnr lnr-icon-cart"></i>
            <span className="count">0</span>
          </button>

          <button className="ui-btn ui-btn search-btn" onClick={handleSearch}>
            <span className="icon lnr lnr-icon-search"></span>
          </button> */}

          <span className="divider"></span>

          <Link href="tel:+1-848-667-2155" className="info-btn-two">
            <i className="icon fal fa-comments"></i>
            <small>Call for inquiry</small>
            <strong>+1-848-667-2155</strong>
          </Link>

          <div className="btn-box">
            <Link href="page-contact" className="theme-btn btn-style-one bg-orange"><span className="btn-title">Request a quote <i className="fa fa-long-arrow-right"></i></span></Link>
          </div>
              
          <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />
      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo"><Link href="/"><img src="/images/logo-2.png" alt=""  /></Link></div>
          <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
        </div>
        <MobileMenu />
        <ul className="contact-list-one">
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <i className="icon lnr-icon-phone-handset" />
              <span className="title">Call Now</span>
              <Link href="/tel:+1-848-667-2155">+1-848-667-2155</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-envelope1" />
              <span className="title">Send Email</span>
              <Link href="/mailto:info@aurumwholesale.com">info@aurumwholesale.com</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            {/* <div className="contact-info-box">
              <span className="icon lnr-icon-clock" />
              <span className="title">Call</span>
              Call us 
            </div> */}
          </li>
        </ul>
        <ul className="social-links">
          <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
          <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
          <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
          <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
        </ul>
      </nav>
    </div>
    
    {/* End Mobile Menu */}
    {/* Header Search */}
    <div className="search-popup">
      <span className="search-back-drop" onClick={handleSearch} />
      <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
      <div className="search-inner">
        <form method="post" action="/">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search..." required />
            <button type="submit"><i className="fa fa-search" /></button>
          </div>
        </form>
      </div>
    </div>
    {/* End Header Search */}
    {/* Sticky Header  */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="auto-container">
        <div className="inner-container">
          {/*Logo*/}
          <div className="logo">
            <Link href="/" ><img src="/images/logo-2.png" alt="" /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-outer">
            {/* Main Menu */}
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

  </>
  )
}