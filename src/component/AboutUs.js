import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css'; // Import your custom CSS file

function AboutUs() {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Welcome to Child School System</h2>
            <p>
              We are dedicated to providing a safe and nurturing environment
              for children to learn, grow, and thrive. Our experienced and
              caring staff is committed to fostering creativity, curiosity, and
              a love of learning in every child.
            </p>
            <p>
              At Child School System, we believe that education is the key to
              a brighter future. Our programs are designed to inspire young
              minds, encourage teamwork, and instill important values that will
              serve children throughout their lives.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/images/school-building.jpg"
              alt="School Building"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
