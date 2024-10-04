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
const Team2 = () => {
	return (
	<>
		<section className="team-section">
			<div className="bg bg-image" style={{ backgroundImage: 'url(images/background/11.jpg)' }}></div>
			<div className="icon-dots-5"></div>
			<div className="icon-dots-2"></div>
			<div className="auto-container">
				<div className="sec-title light text-center"> <span className="sub-title">our team members</span>
					<h2 className="scrub-each-word text-split">We Create Opportunity to <br/> Reach Potential.</h2>
				</div>
				<div className="carousel-outer">
					<Swiper {...swiperOptions} className="team-carousel owl-carousel owl-theme default-dots">
						<SwiperSlide>
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
						</SwiperSlide>
						<SwiperSlide>
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
						</SwiperSlide>
						<SwiperSlide>
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
						</SwiperSlide>
						<SwiperSlide>
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
						</SwiperSlide>
						<SwiperSlide>
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
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	</>
	);
};
export default Team2
