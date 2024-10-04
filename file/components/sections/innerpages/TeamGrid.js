import Link from "next/link";

const TeamGrid = () => {
  return (
    <>


  {/* Team Section */}
  <section className="team-section">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-1.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-2.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-3.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-1.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-3.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Team Block */}
          <div className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><img src="images/resource/team1-2.jpg" alt="Image"/></figure>
              </div>
              <div className="info-box">
                <span className="icon share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
                <h5 className="name"><Link href="page-team-details">David Human</Link></h5>
                <span className="designation">CEO, Transplix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Team Section */}

    </>
  );
};
export default TeamGrid
