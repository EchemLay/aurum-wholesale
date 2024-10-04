import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style-three ${isSearch ? "moblie-search-active" : ""}`}>
    <div className="auto-container">
      <div className="outer-column">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container"> 
            
            {/* Top Left */}
            <div className="top-left"> 
              {/* Info List */}
              <ul className="list-style-one light">
                <li><i className="fal fa-clock"></i> Mon - Fri: 09.00am - 10.00 pm</li>
                <li><i className="fa fa-map-marker-alt"></i> Richardson, California 62639 </li>
                <li><i className="fa fa-envelope"></i> <a href="mailto:demo@mail.com" className="">transplix@mail.com</a></li>
              </ul>
            </div>
            
            {/* Top Right */}
            <div className="top-right"> 
              {/* Social Icon One */}
              <ul className="social-icon-one style-two">
                <li><a href="#"><i className="icon fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="icon fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="icon fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="icon fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo"><Link href="/"><img src="images/logo-2.png" alt="Logo" title="Transplix"/></Link></div>
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <Menu/>
              </nav>
            </div>
            <div className="outer-box">
              <span className="divider"></span>

              <button className="ui-btn ui-btn cart-btn">
                <i className="icon lnr lnr-icon-cart"></i>
                <span className="count">0</span>
              </button>

              <button className="ui-btn ui-btn search-btn" onClick={handleSearch}>
                <span className="icon lnr lnr-icon-search"></span>
              </button>

              <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
            </div>
          </div>
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
              <Link href="/mailto:help@company.com">help@company.com</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-clock" />
              <span className="title">Send Email</span>
              Mon - Sat 8:00 - 6:30, Sunday - CLOSED
            </div>
          </li>
        </ul>
        <ul className="social-links">
          <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
          <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
          <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
          <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
        </ul>
      </nav>
    </div>{/* End Mobile Menu */}
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