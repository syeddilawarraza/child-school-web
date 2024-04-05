import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css';
import navbarIcon from './images/navbarIcon.png'
import TeddyBear2 from './images/TeddyBear2.jpg'

const Footer = () => {
  return (
    <footer className="large-footer">
      <Container> 

        <Row className='footer-header' >
          <Col md={8}>
          <img src={navbarIcon} style={{ width: "90px", height: "70px",color:"white" }} /><span  className='textnav' style={{color: "white"}}  >KidKinder
                  </span>

            
          </Col>
          <Col md={4} >
            <button className='btnfooter'>Sign Up Now</button>

          </Col>
        </Row>
        <Row className='mt-5' >
          <Col md={3} className="footer-column">
            <ul style={{ listStyleType: "none", marginLeft: "-10%" }} >
              <li><a href='#'>PRODUCT</a></li>
              <li><a href='#'>Download</a></li>
              <li><a href='#'>Integration</a></li>
              <li><a href='#'>Case Studies</a></li>
              <li><a href='#'>API</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-column">
            <ul style={{ listStyleType: "none", marginLeft: "-10%" }} >
              <li><a href='#' >COMPANY</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Term of Service</a></li>
              <li><a href='#'>Help</a></li>

            </ul>
          </Col>
          <Col md={3} className="footer-column">
            <ul style={{ listStyleType: "none", marginLeft: "-10%" }} >
              <li><a href='#'>ESSENTIALS</a></li>
              <li><a href='#'>Documentaion</a></li>
              <li><a href='#'>Playground</a></li>
              <li><a href='#'>Sandbox</a></li>
              <li><a href='#'>Source Code</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-column">
            <ul style={{ listStyleType: "none", marginLeft: "-10%" }} >
              <li><a href='#'>GET IN TOUCH</a></li>
              <li><a href='#'> <FaTwitter /></a></li>
              <li><a href='#'><FaFacebook />  </a></li>          
              <li><a href='#'><FaLinkedin/></a></li>
              <li><a href='#'><FaInstagram/></a></li>

            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;


{/* <Col md={4} className="footer-column">
<h4>Follow Us</h4>
<div className="social-icons">
  <a href="#">
    <FaTwitter />
  </a>
  <a href="#">
    <FaFacebook />
  </a>
  <a href="#">
    <FaInstagram />
  </a>
</div>
</Col> */}