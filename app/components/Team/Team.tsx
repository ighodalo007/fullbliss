"use client";

import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./Team.scss";

const Team = () => {
  return (
    <section className="team_wrapper" id="team">
      <Container>
        <Row>
          <Col sm="12" className="text-center section-title mb-5">
            <h6>What I can do for you</h6>
            <h3>Our Special Staff</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-0 rounded-3">
              <Image
                alt="logo"
                src="/images/team/team1.webp"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="team-info">
                <h5>Shirley Gibson</h5>
                <p>Manager</p>
                <ul className="social-network">
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
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-0 rounded-3">
              <Image
                alt="logo"
                src="/images/team/team2.webp"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="team-info">
                <h5>Ronaldo Long</h5>
                <p>Chief Reception</p>
                <ul className="social-network">
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
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-0 rounded-3">
              <Image
                alt="logo"
                src="/images/team/team3.webp"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="team-info">
                <h5>Ashley Sanchez</h5>
                <p>Master Chef</p>
                <ul className="social-network">
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
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-0 rounded-3">
              <Image
                alt="logo"
                src="/images/team/team4.webp"
                className="img-fluid"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="team-info">
                <h5>Jessica Watson</h5>
                <p>House Keeping</p>
                <ul className="social-network">
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
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
