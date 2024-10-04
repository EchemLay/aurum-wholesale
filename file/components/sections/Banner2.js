import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
const swiperOptions = {
	modules: [Autoplay, Navigation, Pagination, EffectFade],
	slidesPerView: 1,
	navigation: true,
  effect: 'fade',
	autoplay: {
		delay: 8500,
		disableOnInteraction: false,
	},
	loop: true
};
const Banner2 = () => {
	return (
	<>
  <section className="banner-section">
		<Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
			<SwiperSlide className="slide-item">
				<div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/1.jpg)' }}></div>
				<div className="shape-1"></div>
				<div className="icon-dots-3"></div>
				<div className="auto-container">
					<div className="content-box col-xl-8 col-lg-7">
						<span className="sub-title animate-1">World best transport service</span>
						<h1 className="title animate-2">We providing Reliable Logistic & Transport</h1>
						<div className="btn-box animate-3">
							<Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Request a Quote <i className="fa fa-long-arrow-right"></i></span></Link>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="slide-item">
				<div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/1.jpg)' }}></div>
				<div className="shape-1"></div>
				<div className="icon-dots-3"></div>
				<div className="auto-container">
					<div className="content-box col-xl-8 col-lg-7">
						<span className="sub-title animate-1">World best transport service</span>
						<h1 className="title animate-2">We providing Reliable Logistic & Transport</h1>
						<div className="btn-box animate-3">
							<Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Request a Quote <i className="fa fa-long-arrow-right"></i></span></Link>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
  </section>
	</>
	);
};
export default Banner2