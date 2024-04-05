

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/childcomponents/About';
import Service from './component/childcomponents/Service';
import Blog from './component/childcomponents/Blog';
import ContactUs from './component/childcomponents/ContactUs';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />


        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;

