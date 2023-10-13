"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery_wrapper">
      <Container>
        <Row>
          <Col sm="12" className="section-title text-center mb-5">
            <h6>Best Pictures Of Our Hotel</h6>
            <h3>Our Gallery</h3>
          </Col>
        </Row>
        <Row className="g-0">
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/1.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/2.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/3.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/4.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/5.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
          <Col lg="3" md="6" className="gallery-item">
            <Image
              alt="gallery"
              src="/images/gallery/6.webp"
              width={0}
              height={0}
              className="w-100 h-100 img-fluid"
              sizes="100vw"
            />
            <div className="gallery-item-content"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
