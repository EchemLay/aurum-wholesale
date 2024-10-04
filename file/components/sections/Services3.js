import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
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
const Services1 = () => {
	return (
	<>
	<section className="services-section pt-120">
		<div className="icon-plane bounce-y"></div>
		<div className="float-text">Services</div>
		<div className="auto-container">
			<div className="sec-title text-center">
				<div className="sub-title-outer">
					<span className="sub-title">What we do</span>
					<h2 className="">Provide efficient logistics <br/>solutions business</h2>
				</div>
			</div>
			<div className="carousel-outer">
				<Swiper {...swiperOptions} className="home1-service-slider">
					<SwiperSlide>
						<div className="service-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-1.jpg" alt="Image"/></Link></figure>
								</div>
								<div className="content-box">
									<div className="icon-circles"></div>
									<div className="content">
										<i className="icon flaticon-logistics-delivery-2"></i>
										<h5 className="title"><Link href="page-service-details">Road <br/>Fright</Link></h5>
										<div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
										<Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="service-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-2.jpg" alt="Image"/></Link></figure>
								</div>
								<div className="content-box">
									<div className="icon-circles"></div>
									<div className="content">
										<i className="icon flaticon-logistics-delivery-2"></i>
										<h5 className="title"><Link href="page-service-details">Ship <br/>Fright</Link></h5>
										<div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
										<Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="service-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-3.jpg" alt="Image"/></Link></figure>
								</div>
								<div className="content-box">
									<div className="icon-circles"></div>
									<div className="content">
										<i className="icon flaticon-logistics-delivery-2"></i>
										<h5 className="title"><Link href="page-service-details">Airplane <br/>Fright</Link></h5>
										<div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
										<Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="service-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="page-service-details"><img src="images/resource/service1-1.jpg" alt="Image"/></Link></figure>
								</div>
								<div className="content-box">
									<div className="icon-circles"></div>
									<div className="content">
										<i className="icon flaticon-logistics-delivery-2"></i>
										<h5 className="title"><Link href="page-service-details">Road <br/>Fright</Link></h5>
										<div className="text">With over four decades of experience providing solutions to large-scale enterprises</div>
										<Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-right"></i></Link>
									</div>
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
export default Services1