"use client";

import { Container, Row, Col, FormGroup } from "react-bootstrap";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div id="contact" className="footer_wrapper mt-3 mt-md-0 pb-0">
      <Container className="pb-3">
        <Row>
          <Col md="6" lg="3">
            <h5>Hotel Location</h5>
            <p className="ps-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, delectus?
            </p>
            <div className="contact-info">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <FaHome className="me-3" /> No. 96, South City, London
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPhone className="me-3" />
                    +1 222 3333
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaEnvelope className="me-3" />
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="6" lg="3">
            <h5>More Links</h5>
            <ul className="link-widget p-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Office</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Our Store</a>
              </li>
              <li>
                <a href="#">Guarantee</a>
              </li>
              <li>
                <a href="#">Buy Gift Card</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </Col>
          <Col md="6" lg="3">
            <h5>Demo Links</h5>
            <ul className="link-widget p-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Office</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Our Store</a>
              </li>
              <li>
                <a href="#">Guarantee</a>
              </li>
              <li>
                <a href="#">Buy Gift Card</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </Col>
          <Col md="6" lg="3">
            <h5>Newsletter</h5>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control bg-transparent"
                placeholder="enter your email here"
              />
              <button
                type="submit"
                className="main-btn btn-primary rounded-2 mt-3 border-white text-white"
              >
                Subscribe
              </button>
            </div>
            <h5>Stay Connected</h5>
            <ul className="social-network d-flex align-items-center p-0">
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGooglePlus />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="container-fluid copyright-section">
        <p>
          Copyright <a href="#">Â© fullbliss.</a> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
