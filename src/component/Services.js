

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import class1 from './images/class1.jpg'
import class2 from './images/class2.jpg'
import class3 from './images/class3.jpg'

import './style.css'; // You can create this CSS file for custom styles

function Services() {
  return (
    <>
      <Container style={{ marginTop: "1%", marginBottom: "1%" }} >

        <Row>
          <h2 className='services-title'>Our Popular Classes</h2>
          <br />
          <h1 className='services-title2' > Classes Of Your Kids</h1>
          <Col lg={4} md={6} sm={12}>
            <Card className='card'>
              <Card.Img variant='top' src={class1} />
              <Card.Body>
                <Card.Title className='firstclass' >Drawing Class </Card.Title>
                <Card.Text>
                <p className='bodytext' >  Justo ea diam stet diam ipsum no sit, ipsum vero et et
                   diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>

                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Age of Kids</strong></div>
                      <div className="col-6 py-1">3 - 6 Years</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Total Seats</strong></div>
                      <div className="col-6 py-1">40 Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Class Time</strong></div>
                      <div className="col-6 py-1">08:00 - 10:00</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Tuition Fee</strong></div>
                      <div className="col-6 py-1">$290 / Month</div>
                    </div>
                  </div>
                </Card.Text>
                <button className='btncard'>Join Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='card'>
              <Card.Img variant='top' src={class2} />
              <Card.Body>
                <Card.Title className='firstclass'>Language Learning</Card.Title>
                <Card.Text>
                  <p className='bodytext' >  Justo ea diam stet diam ipsum no sit, ipsum vero et et
                   diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>

                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Age of Kids</strong></div>
                      <div className="col-6 py-1">3 - 6 Years</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Total Seats</strong></div>
                      <div className="col-6 py-1">40 Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Class Time</strong></div>
                      <div className="col-6 py-1">08:00 - 10:00</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Tuition Fee</strong></div>
                      <div className="col-6 py-1">$290 / Month</div>
                    </div>
                  </div>
                </Card.Text>
                <button className='btncard'>Join Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='card'>
              <Card.Img variant='top' src={class3} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: "bold", color: " #05373f" }} className='firstclass' >Basic Science</Card.Title>
                <Card.Text>
                <p className='bodytext' >  Justo ea diam stet diam ipsum no sit, ipsum vero et et
                   diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Age of Kids</strong></div>
                      <div className="col-6 py-1">3 - 6 Years</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong  style={{fontSize:"larger"}}>Total Seats</strong></div>
                      <div className="col-6 py-1">40 Seats</div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Class Time</strong></div>
                      <div className="col-6 py-1">08:00 - 10:00</div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right"><strong style={{fontSize:"larger"}} >Tuition Fee</strong></div>
                      <div className="col-6 py-1">$290 / Month</div>
                    </div>
                  </div>

                                
                </Card.Text>
                <button className='btncard' >Join Now</button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Services;
