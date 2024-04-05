// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import './style.css';
// import About from './About';
// import Services from './Services';
// import TestMonial from './TestMonial';
// import Footer from './Footer';
// import Crosel from './Crosel';
// import Navbarfile from './Navbarfile';


// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import AboutUs from './AboutUs';

// function Home() {
//   return (
//     <>


//       <BrowserRouter>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutUs />} />
//             {/* Add more routes for other pages */}
//           </Routes>
//         </Router>
//       </BrowserRouter>

//       <div>
//         <Navbarfile />
//       </div>
//       <div>
//         <Crosel />
//       </div>
//       <div className='aboutPage' >
//         <About />
//       </div>
//       <div className='services' >
//         <Services />
//       </div>
//       <div className='TestMonial' >
//         <TestMonial />
//       </div>

//       <div className='Footer' >
//         <Footer />
//       </div>

//     </>
//   );
// }

// export default Home;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css';
import About from './About';
import Services from './Services';
import TestMonial from './TestMonial';
import Footer from './Footer';
import Crosel from './Crosel';
import Navbarfile from './Navbarfile';
// import { Routes, Route } from 'react-router-dom';
// import AboutUs from './AboutUs';

function Home() {
  return (
    <>
      <div>
        <Navbarfile />
      </div>
      <div>
        <Crosel />
      </div>
      <div className='aboutPage' >
        <About />
      </div>
      <div className='services' >
        <Services />
      </div>
      <div className='TestMonial' >
        <TestMonial />
      </div>
      <div className='Footer' >
        <Footer />
      </div>
    </>
  );
}

export default Home;
