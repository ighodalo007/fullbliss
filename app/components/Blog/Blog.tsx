"use client";

import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "./Blog.scss";

const Blog = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div id="blog" className="blog_wrapper pb-0">
      <Container>
        <Row>
          <Col sm="12" className="section-title text-center mb-5">
            <h6>Say Hello To Our Visiters</h6>
            <h3>Our Blog</h3>
          </Col>

          <Col md="6" className="mb-4">
            <Card className="p-0 border-0 rounded-0">
              <Image
                alt="blog"
                src="/images/blog/blog1.webp"
                width={0}
                height={0}
                className="img-fluid h-100 w-100"
                sizes="100vw"
              />

              <div className="blog-content bg-white p-4">
                <h5 className="text-decoration-underline mb-4">Relax Zone</h5>
                <h6>By Admin - February 18, 2018</h6>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, nostrum.
                </p>
                <a href="#" className="main-btn mt-2">
                  Read More
                </a>
              </div>
            </Card>
          </Col>
          <Col md="6" className="mb-4">
            <Card className="p-0 border-0 rounded-0">
              <Image
                alt="blog"
                src="/images/blog/blog2.webp"
                width={0}
                height={0}
                className="img-fluid h-100 w-100"
                sizes="100vw"
              />

              <div className="blog-content bg-white p-4">
                <h5 className="text-decoration-underline mb-4">Relax Zone</h5>
                <h6>By Admin - February 18, 2018</h6>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, nostrum.
                </p>
                <a href="#" className="main-btn mt-2">
                  Read More
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="our-partner-slider mt-5">
        <Swiper
          loop={true}
          slidesPerView={3}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          autoplay={{
            delay: 3500,
          }}
          className="our-partner container"
        >
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand1.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand2.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand3.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand4.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand5.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="partner">
              <Image
                src="/images/partners/brand6.webp"
                alt="logo"
                height={0}
                width={0}
                className="w-100"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
