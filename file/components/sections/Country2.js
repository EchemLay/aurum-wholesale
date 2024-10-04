import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 6,
	spaceBetween: 10,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
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
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 6,
			// spaceBetween: 30,
		},
	}
};
const Country2 = () => {
	return (
	<>
		<section className="countries-section">
			<div className="icon-plane-2"></div>
			<div className="auto-container">
			<div className="sec-title text-center">
				<div className="sub-title-outer"> <span className="sub-title">What we do</span>
				<h2 className="scrub-each-word text-split">Countries we are currently <br/>
					serving</h2>
				</div>
			</div>
			<div className="country-carousel owl-carousel owl-theme"> 
					<Swiper {...swiperOptions}>
						<SwiperSlide>
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-1.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">Italy</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-2.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">London</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-3.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">Germany</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-4.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">Turkey</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-5.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">Canada</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>					
							<div className="country-block">
								<div className="inner-box">
									<div className="bg-map"></div>
									<Link href="page-contact"><img src="images/resource/country1-6.jpg" alt="Image"/></Link>
									<div className="content-box">
									<h6 className="title"><Link href="page-contact">Australia</Link></h6>
									<div className="text">With over four experience</div>
									<Link href="page-contact" className="read-more"><i className="icon fa fa-long-arrow-right"></i></Link>
									</div>
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
export default Country2