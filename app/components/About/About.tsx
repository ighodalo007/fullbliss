"use client";

import { Col, Container, Row } from "react-bootstrap";

import "./About.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about_wrapper">
      <Container>
        <Row className="flex-lg-row flex-column-reverse">
          <Col>
            <h3>
              Welcome to{" "}
              <span>
                Hotel <br className="d-none d-lg-block" /> the haven
              </span>{" "}
              of your weekend
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              distinctio enim sed qui animi, dolorem consectetur quod velit vel
              recusandae rem! Corporis nostrum quisquam veritatis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ex!
            </p>
            <a href="#" className="main-btn rounded-2 mt-4 px-lg-3 ">
              Explore
            </a>
          </Col>
          <Col lg="6" className="mb-4 mb-lg-0 ps-lg-4 text-center">
            <div style={{ width: "25rem" }}>
              <Image
                src="/images/about-img.svg"
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-100 h-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
