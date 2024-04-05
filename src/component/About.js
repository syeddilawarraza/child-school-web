// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import school from './images/school.jpg'
//  function About() {
//     return (
//         <div className='container-about' >
//             <Container>
//                 <Row>
//                 <h1>About Us</h1>
//                     <Col md={8} >

//                         <p className='aboutText' >Vivamus at est viverra, ornare mi suscipit, facilisis odio. Sed ut lorem nec
//                             ligula tincidunt volutpat non vitae urna. Donec interdum laoreet eros vel
//                             sagittis. Nam eros arcu, feugiat nec dignissim quis, gravida ac sem. Phasellus vitae auctor arcu.
//                             Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
//                             cubilia curae; Nunc non gravida neque.</p>
//                     </Col>
//                     <Col md={4} >
//                         <img src={school} style={{width:"300px",height:"300px"}} />
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default About




import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
import portfolio5 from './images/portfolio5.jpg'
import about1 from './images/about1.jpg'
import './style.css'; // You can create this CSS file for custom styles

function About() {
  return (
    <>
      <Container>
        <Row>
          <h1 className='about-heading'  >About Us</h1>
          <Col md={4} sm={4} >
           
           <img src={about1} alt='School' style={{width:"90%",height:"60vh"}}/>

           
         </Col>
          <Col md={8} >
            <h2 className='about-heading-child'>Best School For Your Kids</h2>
            <p className='aboutText'>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
             ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
            </p>
            <div className='aboutulli'>
              <img src={about2} alt='about2' />
              <span style={{float:"right",marginRight:"20%"}}>
                <ul >
                  <li  > <img src={about3} alt='' style={{width:"20px" }} /> &nbsp; Labore eos amet dolor amet diam</li> 
                  <li><img src={about3} alt='' style={{width:"20px" }} /> &nbsp;Labore eos amet dolor amet diam</li>
                  <li><img src={about3} alt='' style={{width:"20px" }} /> &nbsp;Labore eos amet dolor amet diam</li>
                  <li><img src={about3} alt='' style={{width:"20px" }} /> &nbsp;Labore eos amet dolor amet diam</li>
                </ul>
              </span> 

            </div>
            <button className='btnabout'>Learn More</button>

          </Col>
        
        </Row>
      </Container>
    </>
  );
}

export default About;
