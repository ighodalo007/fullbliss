"use client";

import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState, useRef, useEffect } from "react";

import "./Counter.scss";

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const boxRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "bottom 25%",
        scrub: true,
        onEnter: () => countRef.current,
      },
    });
  }, []);
  return (
    <div className="counter mt-5">
      <Container>
        <Row className="text-center">
          <Col lg="3" className="mb-lg-0 mb-md-0 mb-5">
            <h1>
              <span>
                <CountUp start={0} end={1287} duration={3} enableScrollSpy />
              </span>
              +
            </h1>
            <p>Happy Clients</p>
          </Col>
          <Col lg="3" className="mb-lg-0 mb-md-0 mb-5">
            <h1>
              <span>
                <CountUp
                  start={100}
                  end={5786}
                  duration={2.5}
                  enableScrollSpy
                />
              </span>
              +
            </h1>
            <p>Friendships</p>
          </Col>
          <Col lg="3" className="mb-lg-0 mb-md-0 mb-5">
            <h1>
              <span>
                <CountUp start={0} end={1440} duration={3} enableScrollSpy />
              </span>
              +
            </h1>
            <p>Star Ratings</p>
          </Col>
          <Col lg="3" className="mb-lg-0 mb-md-0 mb-5">
            <h1>
              <span>
                <CountUp start={0} end={7140} duration={3} enableScrollSpy />
              </span>
              +
            </h1>
            <p>Served Breakfast</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
