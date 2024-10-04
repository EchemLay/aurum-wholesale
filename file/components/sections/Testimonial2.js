import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	grabCursor: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    clickable: true,
  },
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			// spaceBetween: 30,
		},
	}

};
const Testimonial2 = () => {
	return (
	<>
  <section className="testimonials-section-two">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }}></div>
    <div className="icon-plane-5 bounce-x"></div>
    <div className="auto-container">
      <div className="sec-title light text-center">
        <div className="sub-title-outer"> <span className="sub-title">Testimonial</span>
          <h2 className="scrub-each-word text-split">What our customers <br/>
            say about us</h2>
        </div>
      </div>
      <div className="carousel-outer">
			<Swiper {...swiperOptions} className="testimonial-carousel-two">
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
						<div className="author-box">
							<figure className="image"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
							<div className="author-info">
							<h5 className="name">David Hume</h5>
							<span className="designation">CEO, Transflix</span>
							</div>
						</div>
						<div className="content-box">
							<div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							</div>
							<div className="text">With over four decades of experience providing solutions  Everything you need to start selling </div>
						</div>
						<div className="icon-quote-2"></div>
						<div className="icon-quote-3"></div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
						<div className="author-box">
							<figure className="image"><img src="images/resource/testi1-2.jpg" alt="Image"/></figure>
							<div className="author-info">
							<h5 className="name">David Hume</h5>
							<span className="designation">CEO, Transflix</span>
							</div>
						</div>
						<div className="content-box">
							<div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							</div>
							<div className="text">With over four decades of experience providing solutions  Everything you need to start selling </div>
						</div>
						<div className="icon-quote-2"></div>
						<div className="icon-quote-3"></div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
						<div className="author-box">
							<figure className="image"><img src="images/resource/testi1-3.jpg" alt="Image"/></figure>
							<div className="author-info">
							<h5 className="name">David Hume</h5>
							<span className="designation">CEO, Transflix</span>
							</div>
						</div>
						<div className="content-box">
							<div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							</div>
							<div className="text">With over four decades of experience providing solutions  Everything you need to start selling </div>
						</div>
						<div className="icon-quote-2"></div>
						<div className="icon-quote-3"></div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="testimonial-block">
						<div className="inner-box">
						<div className="author-box">
							<figure className="image"><img src="images/resource/testi1-1.jpg" alt="Image"/></figure>
							<div className="author-info">
							<h5 className="name">David Hume</h5>
							<span className="designation">CEO, Transflix</span>
							</div>
						</div>
						<div className="content-box">
							<div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							</div>
							<div className="text">With over four decades of experience providing solutions  Everything you need to start selling </div>
						</div>
						<div className="icon-quote-2"></div>
						<div className="icon-quote-3"></div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
      </div>
    </div>
  </section>
	</>
	);
};
export default Testimonial2
