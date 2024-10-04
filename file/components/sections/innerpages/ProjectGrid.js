import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
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
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  }
};

const ProjectGrid = () => {
  return (
    <>

    <section className="projects-section1 pt-120 pb-100 position-relative">
      <div className="carousel-outer">
        <Swiper {...swiperOptions} className="home1-project-slider">
          <SwiperSlide>
            <div className="project-block">
            <div className="inner-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-1.jpg" alt="Image"/></Link></figure>
              <div className="content-box">
              <div className="shape-3"></div>
              <div className="inner">
                <h5 className="title"><Link href="page-project-details">Shipment product</Link></h5>
                <span className="cat">Logistic</span> <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-block">
            <div className="inner-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-2.jpg" alt="Image"/></Link></figure>
              <div className="content-box">
              <div className="shape-3"></div>
              <div className="inner">
                <h5 className="title"><Link href="page-project-details">Ship Transport</Link></h5>
                <span className="cat">Shipping</span> <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-block">
            <div className="inner-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-3.jpg" alt="Image"/></Link></figure>
              <div className="content-box">
              <div className="shape-3"></div>
              <div className="inner">
                <h5 className="title"><Link href="page-project-details">Warehouse Save</Link></h5>
                <span className="cat">Logistic</span> <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-block">
            <div className="inner-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-4.jpg" alt="Image"/></Link></figure>
              <div className="content-box">
              <div className="shape-3"></div>
              <div className="inner">
                <h5 className="title"><Link href="page-project-details">Equipment</Link></h5>
                <span className="cat">Logistic</span> <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-block">
            <div className="inner-box">
              <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-1.jpg" alt="Image"/></Link></figure>
              <div className="content-box">
              <div className="shape-3"></div>
              <div className="inner">
                <h5 className="title"><Link href="page-project-details">Shipment product</Link></h5>
                <span className="cat">Logistic</span> <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-plus"></i></Link>
              </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    </>
  );
};
export default ProjectGrid
