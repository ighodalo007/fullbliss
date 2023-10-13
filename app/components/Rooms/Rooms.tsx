"use client";

import { Col, Container, Row } from "react-bootstrap";

import "./Rooms.scss";

const Rooms = () => {
  return (
    <section id="rooms" className="rooms_wrapper">
      <Container fluid>
        <Row>
          <Col sm="12" className="section-title text-center mb-5">
            <h6>What can i do for you</h6>
            <h3>Our Favorite Rooms</h3>
          </Col>
        </Row>
        <Row className="m-0">
          <Col md="4" className="mb-4 mb-lg-0">
            <div className="room-items">
              <img
                src="/images/room/room1.webp"
                alt="rooms"
                className="img-fluid"
              />
              <div className="room-item-wrap">
                <div className="room-content">
                  <h5 className="text-white mb-lg-5 text-decoration-underline">
                    Royal Suit
                  </h5>
                  <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, eveniet!
                  </p>
                  <p className="text-white fw-bold mt-lg-4">$220 / Per Night</p>
                  <a
                    href="#"
                    className="main-btn border-white text-white mt-lg-5"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4" className="mb-4 mb-lg-0">
            <div className="room-items">
              <img
                src="/images/room/room2.webp"
                alt="rooms"
                className="img-fluid"
              />
              <div className="room-item-wrap">
                <div className="room-content">
                  <h5 className="text-white mb-lg-5 text-decoration-underline">
                    Royal Suit
                  </h5>
                  <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, eveniet!
                  </p>
                  <p className="text-white fw-bold mt-lg-4">$220 / Per Night</p>
                  <a
                    href="#"
                    className="main-btn border-white text-white mt-lg-5"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4" className="mb-4 mb-lg-0">
            <div className="room-items">
              <img
                src="/images/room/room3.webp"
                alt="rooms"
                className="img-fluid"
              />
              <div className="room-item-wrap">
                <div className="room-content">
                  <h5 className="text-white mb-lg-5 text-decoration-underline">
                    Royal Suit
                  </h5>
                  <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, eveniet!
                  </p>
                  <p className="text-white fw-bold mt-lg-4">$220 / Per Night</p>
                  <a
                    href="#"
                    className="main-btn border-white text-white mt-lg-5"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Rooms;
