import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination, EffectFade],
  slidesPerView: 1,
  navigation: true,
  effect: 'fade',
  autoplay: {
    delay: 85000,
    disableOnInteraction: false,
  },
  loop: true,
};
const Slider1 = () => {
  return (
  <>
  <section className="main-slider">
    <Swiper {...swiperOptions}>
      <SwiperSlide className="slide-item">
        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}></div>
        <div className="icon icon-plane-5 bounce-x"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-7">
              <div className="content-box">
                <span className="sub-title animate-1"><i className="icon flaticon-logistic"></i> </span>
                <span className="sub-title mt-15 mb-20 animate-2"><span>Trusted & Secure</span></span>
                <h1 className="title animate-3">Wholesale <br/> Partner</h1>
                <div className="text mb-30 animate-4">We provide a wide range of high-quality products at competitive prices to businesses across the globe. Our services include product sourcing, custom packaging, and flexible delivery options, ensuring that we meet the needs of businesses of all sizes.</div>
                <Link href="page-contact" className="theme-btn btn-style-one animate-5"><span className="btn-title">Request a quote <i className="icon fa fa-long-arrow-right"></i></span></Link>
              </div>
            </div>
            <div className="image-column col-lg-5">
              <div className="image-box animate-4">
                <figure className="image"><img src="/images/main-slider/img-1.png" alt=""/></figure>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="slide-item">
        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}></div>
        <div className="icon icon-plane-5 bounce-x"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-7">
              <div className="content-box">
                <span className="sub-title animate-1"><i className="icon flaticon-logistic"></i> </span>
                <span className="sub-title mt-15 mb-20 animate-2"><span>Professional & Secure</span></span>
                <h1 className="title animate-3">Wholesale <br/>Solution 24/7</h1>
                <div className="text mb-30 animate-4">We provide top-quality wholesale products and services to businesses around the world, supporting the growth and success of our partners.</div>
                <Link href="page-contact" className="theme-btn btn-style-one animate-5"><span className="btn-title">Request a quote <i className="icon fa fa-long-arrow-right"></i></span></Link>
              </div>
            </div>
            <div className="image-column col-lg-5">
              <div className="image-box animate-4">
                <figure className="image"><img src="/images/main-slider/img-1.png" alt=""/></figure>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  </>
  );
};
export default Slider1