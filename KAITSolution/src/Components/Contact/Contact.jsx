import React from 'react'
import './Contact.css'
import contact from './banner1.png'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  return (
    <>
    <div className="flex-grow">
      {/* Banner */}
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <img src={contact} alt="Banner" className="w-full h-full object-cover animate-blink" />
      </div>

      <div className="flex flex-col md:flex-row p-8">
        {/* Left Side: Contact Form */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Mobile No"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 h-12 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Company Information */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold  mb-6 text-center font-sans ">Company Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              
              <p className="text-2xl font-bold mb-6   text-center font-sans">KAIT Softwaer Solution LLP. </p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-indigo-600 text-3xl mr-2" />
              <p className="text-1xl  mb-6 text-center font-mono">+91-9096797961</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-600  text-3xl mr-2 font-mono" />
              <p className="text-1xl   mb-6 text-center font-mono">kaitsolutions1@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-indigo-600  text-3xl mr-2" />
              <p className="text-1xl  mb-6 text-center font-mono">
              KAIT Softwaer Solution LLP<br/>
                Sadguru Plaza, Opposite More Store,<br />
                Rakshak Nagar, Kharadi,<br />
                Pune, Maharashtra 411014, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='google-map' >
        
      <iframe width="100%" height="380" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=500&amp;hl=en&amp;q=Karishna%20Academy%20On,%20Kharadi%20-%20Hadapsar%20Bypass%20Rd,%20opposite%20NOVA%20IVF%20Center,%20Sambhajinagar,%20Kharadi,%20Pune,%20Maharashtra%20411014+(KAIT%20Software%20Solution%20LLP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
  
      </div>
      </>
  );
};

export default Contact;
