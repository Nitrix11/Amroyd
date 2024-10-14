

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contact from"../assets/S clients.jpeg"
import React, { useState } from 'react';

  
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]:   
     e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server
        console.log(formData);
      };
  return (
    <div className="bg-gray-900 text-white py-12 px-4 md:py-20 md:px-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={contact} alt="Image of a woman" className="w-[200px] md:w-3/4" />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-[40px] md:tex-[20px]font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            We're a leading digital agency specializing in innovative solutions.
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-3xl mr-2" />
              <p>+1234567890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-3xl mr-2" />
              <p>info@yourcompany.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-3xl mr-2" />
              <p>123 Main Street, City, State</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
      <div class="map-inner">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" 
           marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?
           f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,
           +Market+Street,+San+Francisco,
           +CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0
           .128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,
           +San+Francisco,
           +CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
            <br />
            <small>
            <a
    
            href=" https://maps.app.goo.gl/3skCuBoKHmE5GYHq7?
           f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,
           +Market+Street,+San+Francisco,
           +CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0
           .128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,
           +San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
            </small>
            </div>
            <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1   
 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">   

              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"   

                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500   
 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">   

              <label htmlFor="message" className="block text-sm font-medium text-blac">
                Message
              </label>
              <textarea
                id="message"
                name="message"   

                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"   

                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white px-4 py-2 rounded-md text-teal-500 hover:bg-teal-500 hover:text-white"
            >
              Submit
            </button>
          </form>
      </div>
    </div>
  );
}

export default ContactSection;