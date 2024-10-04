import Link from 'next/link';
const NewsGrid = () => {
  return (
    <>


  {/*  News Section */}
  <section className="news-section">
    <div className="auto-container">
      <div className="row">
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-1.jpg" alt="Image"/> <img src="images/resource/news1-1.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-2.jpg" alt="Image"/> <img src="images/resource/news1-2.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-3.jpg" alt="Image"/> <img src="images/resource/news1-3.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-1.jpg" alt="Image"/> <img src="images/resource/news1-1.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-3.jpg" alt="Image"/> <img src="images/resource/news1-3.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        {/*  News Block */}
        <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="900ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href="news-details"><img src="images/resource/news1-2.jpg" alt="Image"/> <img src="images/resource/news1-2.jpg" alt="Image"/> </Link>
              </figure>
              <span className="date"> <strong>25 <br/>
              <span>Jun</span></strong></span>
            </div>
            <div className="content-box">
              <ul className="post-meta">
                <li><i className="fal fa-user"></i>Admin</li>
                <li><i className="fa fa-comment"></i>0 Comments</li>
              </ul>
              <h4 className="title"><Link href="news-details">Logistics contributes to achieving carbon neutrality</Link></h4>
              <Link href="news-details" className="read-more">Full Article <i className="fa fa-long-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End News Section */}

    </>
  );
};
export default NewsGrid
