"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "./Banner.scss";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="home" className="banner_wrapper p-0 ">
      <Swiper
        direction={"vertical"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        className="mySwiper"
        autoplay={{
          delay: 3500,
        }}
      >
        <SwiperSlide
          style={{ backgroundImage: `url('/images/slider/slider2.webp')` }}
        >
          <div className="slide-caption text-center">
            <div>
              <h1>Welcome to Fullbliss Hotel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                facere!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: `url('/images/slider/slider1.webp')` }}
        >
          <div className="slide-caption text-center">
            <div>
              <h1>Hello</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                facere!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container booking-area">
        <form className="row">
          <div className="col-lg mb-3 mb-lg-0">
            <input type="date" className="form-control" placeholder="Date" />
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <select className="form-select">
              <option defaultValue="">Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <select className="form-select">
              <option defaultValue="">Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <button type="submit" className="main-btn rounded-2 px-lg-3">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Banner;
