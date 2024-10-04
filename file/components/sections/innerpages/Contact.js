import Link from 'next/link';
const Contact = () => {
  return (
    <>


  {/* Contact Details Start */}
  <section className="contact-details">
    <div className="container pb-70">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="sec-title">
            <span className="sub-title">Send us email</span>
            <h2>Feel free to write</h2>
          </div>
          {/*  Contact Form  */}
          <form id="contact_form" name="contact_form" action="https://formspree.io/f/myzygzbo" method="post">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
            </div>
            <div className="mb-5">
              <input name="form_botcheck" className="form-control" type="hidden" value="" />
              <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
              <button type="reset" className="theme-btn btn-style-one ml-25"><span className="btn-title">Reset</span></button>
            </div>
          </form>
          {/*  Contact Form Validation */}
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="contact-details__right">
            <div className="sec-title">
              <span className="sub-title">Need any help?</span>
              <h2>Get in touch with us</h2>
              <div className="text">Our team is here to assist you. We are committed to providing top-notch service and support for all your wholesale needs. Contact us now to discuss how we can help your business grow!

</div>
            </div>
            <ul className="list-unstyled contact-details__info">
              <li>
                <div className="icon">
                  <span className="lnr-icon-phone-plus"></span>
                </div>
                <div className="text">
                  <h6 className="mb-1">Have any question?</h6>
                  <a href="tel:980089850"><span>Free</span> +1-848-667-2155</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="lnr-icon-envelope1"></span>
                </div>
                <div className="text">
                  <h6 className="mb-1">Write email</h6>
                  <a href="mailto:needhelp@company.com">info@aurumwholesale.com</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="lnr-icon-location"></span>
                </div>
                <div className="text">
                  <h6 className="mb-1">Visit anytime</h6>
                  <span>6901 K Ave Suite #101,</span><br></br>
                  <span>Plano, TX 75074</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Details End */}

  {/*  Map Section */}
  <section className="map-section py-0">
    <iframe  className="map w-100" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6901%20K%20Ave%20Suite%20%23101,%20Plano,%20TX%2075074+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </section>
  {/* End Map Section */}

    </>
  );
};
export default Contact
