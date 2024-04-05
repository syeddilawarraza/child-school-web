// import React from 'react';
// import  Breadcrumb from 'react-bootstrap/Breadcrumb'
// import Navbarfile from '../Navbarfile';
// import './style.css'; // You can create this CSS file for custom styles
// import Footer from '../Footer';
// import About from '../About';
// import './style.css'
// function AboutUs() {
//   return (
//     <div className="about-us">
//       <Navbarfile/>
    
//          <div className='container-fluid'>

//    <div className='row'>
//     <div className='col'>
//     <h1 className='headingggg'  > About Us</h1>
//     </div>
//    </div>
//    <div className='breadcrm'>
//           <Breadcrumb> 
//         <Breadcrumb.Item href="/home"> 
//            Home
//         </Breadcrumb.Item> 
//         <Breadcrumb.Item href="About"> 
//           About
//         </Breadcrumb.Item> 
       
//         <Breadcrumb.Item href="services"> 
//           Services
//         </Breadcrumb.Item> 
//         <Breadcrumb.Item href="/Blog"> 
//            Blog
//         </Breadcrumb.Item> 
//         <Breadcrumb.Item href="/ContactUs"> 
//            ContactUs
//         </Breadcrumb.Item> 
//         <Breadcrumb.Item active> 
//           Details 
//         </Breadcrumb.Item> 
//       </Breadcrumb> 
//           </div>


//          </div>
//          <br /> <br /><br/>
//      <About/>
//      <br /> <br /><br/>
//       <div  >
//       <Footer />
//       </div>
//     </div>
//   );
// }

// export default AboutUs;


import React from 'react';

import Navbarfile from '../Navbarfile';
import Footer from '../Footer';
import About from '../About';
import './style.css';

function AboutUs() {
 
  return (
    <div className="about-us">
      <Navbarfile />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="headingggg">About Us</h1>
          </div>
        </div>
      
      </div>
      <br /> <br /> <br />
      <About />
      <br /> <br /> <br />
      <Footer />
    </div>
  );
}

export default AboutUs;
