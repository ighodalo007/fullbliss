"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

import "./Price.scss";

const Price = () => {
  return (
    <div id="price" className="price_wrapper">
      <Container>
        <Row>
          <Col sm="12" className="section-title text-center mb-5">
            <h6>Best & Affordable Price for you</h6>
            <h3>Our Pricing</h3>
          </Col>
        </Row>

        <Row>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-4 text-center rounded-3">
              <h5 className="text-decoration-underline mb-4">Economic</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Flight Ticket(2)</p>
                </li>
                <li>
                  <p>Music Concert (30% Off)</p>
                </li>
                <li>
                  <p>Restaurant (Snacks)</p>
                </li>
                <li>
                  <p>Face Make(No)</p>
                </li>
              </ul>
              <hr />
              <h3>
                $150<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-4 text-center rounded-3">
              <h5 className="text-decoration-underline mb-4">Economic</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Flight Ticket(2)</p>
                </li>
                <li>
                  <p>Music Concert (30% Off)</p>
                </li>
                <li>
                  <p>Restaurant (Snacks)</p>
                </li>
                <li>
                  <p>Face Make(No)</p>
                </li>
              </ul>
              <hr />
              <h3>
                $150<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-4 text-center rounded-3">
              <h5 className="text-decoration-underline mb-4">Economic</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Flight Ticket(2)</p>
                </li>
                <li>
                  <p>Music Concert (30% Off)</p>
                </li>
                <li>
                  <p>Restaurant (Snacks)</p>
                </li>
                <li>
                  <p>Face Make(No)</p>
                </li>
              </ul>
              <hr />
              <h3>
                $150<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </Card>
          </Col>
          <Col lg="3" md="6" className="mb-4">
            <Card className="p-4 text-center rounded-3">
              <h5 className="text-decoration-underline mb-4">Economic</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Flight Ticket(2)</p>
                </li>
                <li>
                  <p>Music Concert (30% Off)</p>
                </li>
                <li>
                  <p>Restaurant (Snacks)</p>
                </li>
                <li>
                  <p>Face Make(No)</p>
                </li>
              </ul>
              <hr />
              <h3>
                $150<sub className="fs-6 fw-normal">/NIGHT</sub>
              </h3>
              <a href="#" className="main-btn">
                Sign Up
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Price;
