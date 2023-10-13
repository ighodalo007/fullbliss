"use client";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { motion } from "framer-motion";

import "./Services.scss";
import Counter from "./Counter/Counter";

const Services = () => {
  return (
    <section id="services" className="services_wrapper">
      <Container>
        <Row>
          <Col sm="12" className="section-title text-center mb-5">
            <h6>We Are Here For You</h6>
            <h3>Our Awesome Services</h3>
          </Col>
        </Row>

        <Tab.Container id="left-tabs-example" defaultActiveKey="spa">
          <Row className="align-items-center service-item-wrap ">
            <Col lg="6">
              <Tab.Content>
                <Tab.Pane eventKey="spa">
                  <img src="/images/services/service1.webp" />
                </Tab.Pane>
                <Tab.Pane eventKey="restaurant">
                  <img src="/images/services/service2.webp" />
                </Tab.Pane>
                <Tab.Pane eventKey="swimming">
                  <img src="/images/services/service3.webp" />
                </Tab.Pane>
                <Tab.Pane eventKey="lounge">
                  <img src="/images/services/service6.webp" />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            <Col lg="5" className="position-relative">
              <Nav className="my-nav" variant="">
                <Nav.Item className="my-item">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Nav.Link eventKey="spa" className="my-link p-0">
                      <span className="service-icon ">
                        <img
                          decoding="async"
                          src="./images/services/service-icon1.webp"
                          alt=""
                        />
                      </span>

                      <h5>Spa, beauty & Health</h5>
                      <p>
                        <span>Spa and beauty </span> luptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia{" "}
                      </p>
                    </Nav.Link>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Nav.Link eventKey="restaurant" className="my-link p-0">
                      <span className="service-icon">
                        <img
                          decoding="async"
                          src="./images/services/service-icon2.webp"
                          alt=""
                        />
                      </span>

                      <h5>Restaurant</h5>
                      <p>
                        <span>Restaurant</span> lup provide grro tatem quia
                        voluptas sit aspernatur aut odit aut fugit,{" "}
                      </p>
                    </Nav.Link>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Nav.Link eventKey="swimming" className="my-link p-0">
                      <span className="service-icon">
                        <img
                          decoding="async"
                          src="./images/services/service-icon3.webp"
                          alt=""
                        />
                      </span>

                      <h5>Swimming Pool</h5>
                      <p>
                        <span>Swimming</span> pool luptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia{" "}
                      </p>
                    </Nav.Link>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Nav.Link eventKey="lounge" className="my-link p-0">
                      <span className="service-icon">
                        <img
                          decoding="async"
                          src="./images/services/service-icon4.webp"
                          alt=""
                        />
                      </span>

                      <h5>Lounge</h5>
                      <p>
                        <span>Lounge</span> Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Iste, voluptates?
                      </p>
                    </Nav.Link>
                  </motion.div>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <Counter />
    </section>
  );
};

export default Services;
