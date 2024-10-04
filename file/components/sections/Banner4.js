import Link from "next/link";

const Banner3 = () => {
	return (
	<>

  {/* Banner Section */}
  <section className="banner-section-two">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}></div>
    <div className="icon icon-plane-10 bounce-x"></div>
    <div className="auto-container">
      <div className="content-box">
        <h1 className="title animate-3">We’re Providing  <br/>Logistics Worldwide</h1>
        <div className="text animate-4">We carry clearness to intricacy, separating basic subtleties from confounded data <br/> to make modern, direct arrangements.</div>
        <Link href="page-contact" className="theme-btn btn-style-one animate-5"><span className="btn-title">Request a quote <i className="icon fa fa-long-arrow-right"></i></span></Link>
      </div>
    </div>
  </section>
  {/* End Banner Section */}

	</>
	);
};
export default Banner3