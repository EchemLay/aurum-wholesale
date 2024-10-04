import Link from "next/link";
const News3 = () => {
  return (
    <>

  <section className="news-section-three">
    <div className="auto-container">
      <div className="sec-title text-center">
        <div className="sub-title-outer"> <span className="sub-title">What we do</span>
          <h2 className="scrub-each-word text-split">We offer cost efficient</h2>
        </div>
      </div>
      <div className="row"> 
        {/* News Block */}
        <div className="news-block-three col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news3-1.jpg" alt="Image"/> <img src="images/resource/news3-1.jpg" alt="Image"/> </Link>
              </figure>
            </div>
            <div className="content-box">
              <span className="date"> <strong>25 <br />
              <span>Jun</span></strong></span>
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-three col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news3-2.jpg" alt="Image"/> <img src="images/resource/news3-3.jpg" alt="Image"/> </Link>
              </figure>
            </div>
            <div className="content-box">
              <span className="date"> <strong>25 <br />
              <span>Jun</span></strong></span>
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
            </div>
          </div>
        </div>
        {/* News Block */}
        <div className="news-block-three col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news3-3.jpg" alt="Image"/> <img src="images/resource/news3-3.jpg" alt="Image"/> </Link>
              </figure>
            </div>
            <div className="content-box">
              <span className="date"> <strong>25 <br />
              <span>Jun</span></strong></span>
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default News3
