import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaComments } from 'react-icons/fa'; // Importing icons from react-icons
import aboutus from './About-images/aboutus.webp';
import about1 from './About-images/about1.avif';
import aboutmain from './About-images/about-main.jpg';
import "./About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const BigCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-8" data-aos="fade-up">
      <div className="md:w-1/2 flex justify-center items-center p-3">
        <img src={aboutus} alt="About Us" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <FaLaptopCode className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold">TECHNOLOGY LEADERSHIP</h2>
        </div>
        <p className="mb-6">
          Sprioc Software stays on top of new advances in the information technology world, so you can be assured that our software development technologies and technique choices are at the height of current knowledge.
        </p>
        <div className="flex items-center mb-4">
          <FaComments className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold">COMMUNICATION</h2>
        </div>
        <p>
          At Sprioc Software we take delight in providing excellent customer service. We guarantee we don’t promise anything we can’t follow up on. We are honest and completely accountable with our clients.
        </p>
        <div className="flex items-center mb-4">
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-500"></div>
            <h2 className="text-2xl font-bold">VALUE</h2>
            <p>
              Our offshore development facilities in Pune afford us the flexibility to charge competitive prices for our quality work. Our near decade of specializations and expertise guarantee that Sprioc Software’s development costs are the most affordable relative to value added, and our finished products are of superior quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    // Initial animation on page load for bottom-to-top transition
    const banner = document.querySelector('.animate-up');
    banner.classList.remove('hidden-bottom');
    
    // Scroll-based animations
    const elements = document.querySelectorAll('.hidden-left, .hidden-right');

    const handleScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          if (el.classList.contains('hidden-left')) {
            el.classList.add('animate-left');
          } else if (el.classList.contains('hidden-right')) {
            el.classList.add('animate-right');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 hidden-bottom animate-up">
        <img src={aboutmain} alt="Banner" className="w-full h-full object-cover animate-blink" />
      </div>

      <div>
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 hidden-left">
              <h2 className="text-2xl font-bold mb-4">ABOUT THE COMPANY</h2>
              <h1 className="text-3xl font-bold mb-4">KAIT SOFTWARE SOLUTIONS</h1>
              <p className="mb-4">
                At KAIT Solutions, we are passionate about driving digital innovation and delivering transformative results for businesses of all sizes. Founded with a vision to bridge the gap between technology and business needs, we specialize in providing comprehensive digital marketing services that empower our clients to reach their full potential online.
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Our Mission: Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus, quo nisi atque ratione debitis minima eos quibusdam, reprehenderit error aspernatur neque sapiente eius incidunt fugit earum repellat eaque perspiciatis.
              </h3>
              <p className="mb-4">
                To innovate and lead in our industry, always prioritizing quality and integrity. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus, quo nisi atque ratione debitis minima eos quibusdam, reprehenderit error aspernatur neque sapiente eius incidunt fugit earum repellat eaque perspiciatis.
              </p>
              <div className="w-full h-1 bg-gray-200 mb-8"></div>
            </div>
            <div className="w-full md:w-1/2 hidden-right">
              <img src={about1} alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">WHY CHOOSE SPRIOC</h2>
          <p className="text-lg mt-4">
            There are many reasons why Sprioc software technology is the company to choose for your software development or software product development project.
          </p>
        </div>
        <BigCard />
      </div>
    </>
  );
};

export default About;
