
const Subscribe2 = () => {
  return (
    <>
  <section className="subscribe-section pull-down">
    <div className="auto-container">
      <div className="outer-box wow fadeInLeft">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/2.jpg)' }}></div>
        <div className="row"> 
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image"><img src="images/resource/sub1-1.png" alt="Image"/></figure>
              <h4 className="title">Subscribe our newsletter To get updates</h4>
            </div>
          </div>
          <div className="form-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="subscribe-form">
                <form method="post" action="#">
                  <div className="form-group">
                    <div className="input-outer"> <i className="icon fal fa-envelope"></i>
                      <input type="email" name="email" placeholder="Your Email"/>
                    </div>
                    <button type="submit" className="read-more"><i className="icon fa fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default Subscribe2
