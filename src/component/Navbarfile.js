import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Link } from 'react-router-dom';
// import { FaPhone } from 'react-icons/fa';
import TeddyBear from './images/TeddyBear.jpg'
function Navbarfile() {
  return (
    <>
      <Container >
        <Row>
          <Col lg={12} >
            <Navbar expand='lg' variant='light' bg='light' className='fixed-top' style={{ backgroundColor: "rgb(231, 191, 118)" }}  >
              <Container>
                <Navbar.Brand href="#home" style={{ color: "black" }}  >


                  <img src={TeddyBear} style={{ width: "90px", height: "70px" }} /><span  className='textnav' style={{color: "#f6674",   fontFamily: "Papyrus, fantasy"}}  >KidKinder
                  </span>

                </Navbar.Brand>
                {/* <div className="phone">
                  <FaPhone id="tel" />
                </div>
                <div className="info-box" style={{ marginLeft: "2%" }}     >
                  <h3><a href="tel:03001234567" style={{ textDecoration: "none" }} id="tell">03001234567</a></h3>
                </div> */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' style={{ marginLeft: "30%" }} >
                  <Nav className='me-auto'>

                    <Link to="/" className="nav-link" id="dil">
                      Home
                    </Link>

                    <Link to="/about" className="nav-link" id="dil">
                      About
                    </Link>

                    <Link to="/services" className="nav-link" id="dil">
                      Service
                    </Link>
 
                    <Link to="/blog" className="nav-link" id="dil">
                      Blog
                    </Link>

                    <Link to="/contactus" className="nav-link" id="dil">
                      Contact Us
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbarfile;
