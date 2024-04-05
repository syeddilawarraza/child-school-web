// import Carousel from 'react-bootstrap/Carousel';
// import  Container  from 'react-bootstrap/Container';
// import Row  from 'react-bootstrap/Row';
// import  Col  from 'react-bootstrap/Col';
// import school from './images/school.jpg';
// import school1 from './images/school1.jpg';
// import school2 from './images/school2.jpg';
// function Crosel() {
//   return (
//    <div className='container-fluid' style={{width:"100vw",marginLeft:"-1%",height:"500px",marginBottom:"8%"}}>
//     <div className='row'>
//       <div className='col-md-12'>


//         <Carousel fade  >
//           <Carousel.Item>
//           <Carousel.Caption  >
//               <h3  ><img src={school2} style={{height:"300px",width:"300px" ,marginBottom:"100px" ,borderRadius:"17%",marginRight:"400PX" }}  /></h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//             <img src={school} text="First slide" style={{height:"600px",width:"100%"}}  />

//           </Carousel.Item>
//           <Carousel.Item>
//             <img src={school1} text="Second slide"  style={{height:"600px",width:"100%"}}/>
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src={school2} text="Third slide" style={{height:"600px",width:"100%"}} />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>

//       </div>
//     </div>
//    </div>

//   );
// }

// export default Crosel;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import header from './images/header.png'
import download2 from './images/download 2.jpg'
function CarouselComponent() {
  return (
    <Container fluid className='navbar-container' >
      <Row>
        <Col md={12}>
          <Carousel fade>
            <Carousel.Item>
              <img
                src={header}
                alt="First slide"
                // className="d-block w-100"
                className='sliderpics'
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <div className='childdiv' >
                  <h4  >Kids Learning Center</h4>
                  <h1> New Approach <br /> To Kids <br /> Education</h1>
                  <p className='pargraph' >Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum <br />
                    est amet sed sit. Ipsum dolor no justo dolor et,lorem ut <br />
                    dolor erat dolore sed ipsum at ipsum nonumy amet. Clita <br />
                    lorem dolore sed stet et est justo dolore.</p>
                  <button className='btnheader'>Learn More</button>

                </div>
              </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <img
                src={header}
                alt="Second slide"
                // className="d-block w-100"
                className='sliderpics'

                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <div className='childdiv' >
                  <h4  >Kids Learning Center</h4>
                  <h1> New Approach <br /> To Kids <br /> Education</h1>
                  <p className='pargraph'>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum <br />
                    est amet sed sit. Ipsum dolor no justo dolor et,lorem ut <br />
                    dolor erat dolore sed ipsum at ipsum nonumy amet. Clita <br />
                    lorem dolore sed stet et est justo dolore.</p>
                  <button className='btnheader'>Learn More</button>

                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={header}
                alt="Third slide"
                // className="d-block w-100"
                className='sliderpics'

                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <div className='childdiv' >
                  <h4  >Kids Learning Center</h4>
                  <h1> New Approach <br /> To Kids <br /> Education</h1>
                  <p className='pargraph'>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum <br />
                    est amet sed sit. Ipsum dolor no justo dolor et,lorem ut <br />
                    dolor erat dolore sed ipsum at ipsum nonumy amet. Clita <br />
                    lorem dolore sed stet et est justo dolore.</p>
                  <button className='btnheader'>Learn More</button>

                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselComponent;
