import Link from "next/link"
const News2 = () => {
  return (
    <>
    <section className="news-section-two">
      <div className="icon-plane-8 bounce-y"></div>
      <div className="icon-global-2"></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title-outer"> <span className="sub-title">OUR NEWS FROM BLOG</span>
            <h2 className="scrub-each-word text-split">Latest News, Advices <br/>&  Best Posts from the Blog</h2>
          </div>
        </div>
        <div className="row"> 
          <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news2-1.jpg" alt="Image"/> <img src="images/resource/news2-1.jpg" alt="Image"/> </Link> </figure>
              </div>
              <div className="content-box">
                <ul className="post-meta">
                  <li><i className="fa fa-calendar"></i>28 Aug, 2022</li>
                  <li><i className="fa fa-comment"></i>2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We very careful handling the valuable goods</Link></h4>
              </div>
            </div>
          </div>
          <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news2-2.jpg" alt="Image"/> <img src="images/resource/news2-2.jpg" alt="Image"/> </Link> </figure>
              </div>
              <div className="content-box">
                <ul className="post-meta">
                  <li><i className="fa fa-calendar"></i>28 Aug, 2022</li>
                  <li><i className="fa fa-comment"></i>2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We very careful handling the valuable goods</Link></h4>
              </div>
            </div>
          </div>
          <div className="news-block-two col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news2-3.jpg" alt="Image"/> <img src="images/resource/news2-3.jpg" alt="Image"/> </Link> </figure>
              </div>
              <div className="content-box">
                <ul className="post-meta">
                  <li><i className="fa fa-calendar"></i>28 Aug, 2022</li>
                  <li><i className="fa fa-comment"></i>2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We very careful handling the valuable goods</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default News2
