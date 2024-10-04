import Link from "next/link"
const Offer2 = () => {
  return (
    <>
      <section className="offer-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/9.jpg)' }}></div>
        <div className="shape-2"></div>
        <div className="icon-global"></div>
        <div className="icon-city"></div>
        <div className="exp-box">
          <div className="icon-circle"></div>
          <h6 className="title">Trusted by <span>88,000</span></h6>
        </div>
        
        <div className="content-column wow fadeInLeft">
          <div className="inner-column">
            <div className="sec-title light"> <span className="sub-title">Special Logistics</span>
              <h2 className="scrub-each-word text-split">The Best Service <br/> for Business People <br/> Who Appreciate Time</h2>
              <div className="text">Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum pulvinar. Pellentesque habitant morbi tristique.</div>
            </div>
            <div className="btn-box">
              <Link href="page-about" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Explore More</span></Link>
              <div className="icon-arrow"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Offer2
