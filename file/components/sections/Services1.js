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
					<h2 className="">Efficient Wholesale <br/>solutions for your business</h2>
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
										<h5 className="title"><Link href="page-service-details">Wholesale <br/>Distribution</Link></h5>
										<div className="text">Designed to streamline your supply chain and ensure you have access to a wide range of high-quality products at competitive prices.</div>
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
										<h5 className="title"><Link href="page-service-details">Drop <br/>shipping</Link></h5>
										<div className="text">Enables you to sell products without the hassle of managing inventory. We handle all logistics, allowing you to focus on growing your brand.</div>
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
										<h5 className="title"><Link href="page-service-details">Shipping <br/>Solutions</Link></h5>
										<div className="text">We offer reliable logistics and shipping services to ensure that your products arrive safely and on time, no matter where they need to go.</div>
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
										<h5 className="title"><Link href="page-service-details"> Custom <br/>Packaging</Link></h5>
										<div className="text">Enhance your brand identity with our custom packaging solutions tailored to meet your business needs and stand out in the marketplace.</div>
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