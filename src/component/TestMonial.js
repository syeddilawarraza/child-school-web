

// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './style.css';
// import Slider from 'react-slick';
// import school from './images/school.jpg'; 
// import school1 from './images/school1.jpg'; 
// import school2 from './images/school2.jpg';

// const TestMonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       author: 'Dillawar',
//       text: 'I am from karachi pakistan.',
//       image: school, 
//     },
//     {
//       id: 2,
//       author: 'Huzaifa',
//       text: 'I am from lahire pakistan.',
//       image: school1, 
//     },
//     {
//       id: 3,
//       author: 'Umar',
//       text: 'i am from multan pakistan.',
//       image: school2, 
//     },
//     // Add more testimonials as needed
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="testimonial-slider">
//      <h2> Testimonials</h2>
//       <Slider {...settings}> 
      
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial">
//             <img src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} style={{height:"200px",width:"200px",margin:"auto",borderRadius:"50%"}} />
//             <p>{testimonial.text}</p>
//             <p className="author">{testimonial.author}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TestMonial;

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Slider from 'react-slick';
import testimonial1 from './images/testimonial1.jpg'
import testimonial2 from './images/testimonial2.jpg'
import testimonial3 from './images/testimonial3.jpg'

import './style.css'; // Create this CSS file for custom styles

const TestMonial = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Parent Name',
      text:'Profession',

      image: testimonial1,
    },
    {
      id: 2,
      author: 'Parent Name',
      text:'Profession',

      image: testimonial2,
    },
    {
      id: 3,
      author: 'Parent Name',
      image: testimonial3, 
      text:'Profession',
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-slider">
            <p className="testimonial-title">Testimonials</p>
      {/* <h2 className="testimonial-title2">What Parents Say!</h2> */}
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} 
            className="testimonial-image"  style={{height:"200px",width:"200px",margin:"auto",borderRadius:"50%"}} />
            <p   className="author testimonial-name">{testimonial.author}</p>
            <p className='testimonial-text' >{testimonial.text}</p>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestMonial;
