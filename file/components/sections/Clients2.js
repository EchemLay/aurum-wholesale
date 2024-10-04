import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
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
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
  }

  
};
const Clients2 = () => {
  return (
  <>
  <section className="clients-section style-two">
    <div className="icon-container-3"></div>
    <div className="auto-container">

      <div className="sponsors-outer">

        <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme disable-navs">
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/6.png" alt="Image"/> <img src="images/clients/6-1.png" alt="Image"/> </Link>
          </SwiperSlide>
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/7.png" alt="Image"/> <img src="images/clients/7-1.png" alt="Image"/> </Link>
          </SwiperSlide>
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/8.png" alt="Image"/> <img src="images/clients/8-1.png" alt="Image"/> </Link>
          </SwiperSlide>
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/9.png" alt="Image"/> <img src="images/clients/9-1.png" alt="Image"/> </Link>
          </SwiperSlide>
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/10.png" alt="Image"/> <img src="images/clients/10-1.png" alt="Image"/> </Link>
          </SwiperSlide>
          {/* Clients Block */}
          <SwiperSlide className="client-block">
          <Link href="#" className="image"> <img src="images/clients/6.png" alt="Image"/> <img src="images/clients/6-1.png" alt="Image"/> </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  </>
  );
};
export default Clients2
