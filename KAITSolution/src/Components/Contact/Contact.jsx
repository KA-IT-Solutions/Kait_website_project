
import React from 'react'
import './Contact.css'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contact from './banner.jpg'; // Adjust the path to your image file
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 500); // delay to show the form after page load
  
    return () => clearTimeout(timer);
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contact/send', formState);
      console.log('Response:', response.data); // Log the response from the server
      alert('Message sent successfully');
      setFormState({ name: '', email: '', message: '', phone: '' }); // Reset form state
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <>
      <div className="flex-grow">
        {/* Banner */}
        <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden" data-aos="fade-left">
        <img src={contact} alt="Banner" className="w-full h-full object-cover" />
      </div>

        <div className="flex flex-col md:flex-row p-8">
          {/* Left Side: Contact Form */}
          <div className="md:w-1/2 p-6" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
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
                  value={formState.email}
                  onChange={handleChange}
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
                  value={formState.phone}
                  onChange={handleChange}
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
                  value={formState.message}
                  onChange={handleChange}
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
          <div className="md:w-1/2 p-6" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6 text-center">Company Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <p className="text-2xl font-bold mb-6 text-center">KAIT Software Solution LLP.</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-indigo-600 text-3xl mr-2" />
                <p className="text-1xl mb-6 text-center">+91-9764065434 / 8010339921</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 text-3xl mr-2" />
                <p className="text-1xl mb-6 text-center font-mono">kaitsolutions1@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 text-3xl mr-2" />
                <p className="text-1xl mb-6 text-center">
                  KAIT Software Solution LLP<br />
                  Sadguru Plaza, Opposite More Store,<br />
                  Rakshak Nagar, Kharadi,<br />
                  Pune, Maharashtra 411014, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='google-map'>
        <iframe
          width="100%"
          height="380"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121032.09867740012!2d73.7571596100699!3d18.562625409998702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c36612827755%3A0x9372d84c4157f6e7!2ska%20it%20solutions%20pune!3m2!1d18.547134099999997!2d73.9361192!5e0!3m2!1sen!2sin!4v1722408322926!5m2!1sen!2sin"
          title="KAIT Software Solution LLP"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
