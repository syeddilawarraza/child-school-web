import React, { useState } from 'react'
import Navbarfile from '../Navbarfile'

import Footer from '../Footer'
import './style.css'
function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleInputChange = (e) => {
  //   const { contact, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [caontact]: value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Validate contact
    if (formData.contact.trim() === '') {
      newErrors.contact = 'Contact is required';
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit it here (e.g., send a POST request to a server)

      // Reset the form and set formSubmitted to true
      setFormData({
        name: '',
        email: '',
        Contact: '',
        message: '',
      });
      setFormSubmitted(true);
    } else {
      // Set the validation errors
      setErrors(newErrors);
    }
  };
  return (
    <div>
      <Navbarfile />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h1 className='headingggg'  > Contact Us</h1>
          </div>
        </div>
      </div>
      <br /><br /> <br />
      <div className='container-fluid1'>
        <div className='row'>
          <div className='col-md-12'>

            <div className='form-div'  >
              <h2 className='form-heading' >Contact Us</h2>
              {formSubmitted ? (
                <div className="success-message">Form submitted successfully!</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="name">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div className="error-message">{errors.contact}</div>}
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && (
                      <div className="error-message">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <br /><br /> <br />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactUs;