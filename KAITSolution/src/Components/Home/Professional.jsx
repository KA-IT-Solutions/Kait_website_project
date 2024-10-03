import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';
import websitedesign from './Home-images/websiteDesign.webp'
import webdesign from './Home-images/webdesign.png';  // Replace with the correct path to your image

const Professional = () => {
  // Define the values here
  const websitesCreated = 100; // Example value
  const companiesHelped = 75;  // Example value
  const yearsExperience = 3;  // Example value

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="bg-navy-700 text-white py-10 px-4">
      <div className="container mx-auto">
        <h1 data-aos="fade-right" className="text-4xl font-bold mb-6 text-center text-black">The Power of Professional Website Design</h1>
        <p data-aos="fade-right" className="mb-12 text-center text-black">
          Investing in a professionally designed website is crucial for businesses <br />seeking online success. It enhances credibility, user experience, and brand visibility driving growth and customer engagement.
        </p>

        <div className="flex flex-col lg:flex-row mb-12">
          <div data-aos="fade-left" className="w-full lg:w-1/2 relative mb-8 lg:mb-0 lg:mr-4">
            <img src={webdesign} alt="Professional Design" className="rounded-lg" />
            <div className="absolute top-0 left-0 bg-sky-500 w-20 h-20 transform -rotate-45 -translate-x-8 -translate-y-8"></div>
          </div>
          <div data-aos="fade-right" className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-black">Unlocking Success:</h2>
            <div className="border-t-4 border-sky-500 w-full mb-6"></div>
            <ul className="space-y-4 mb-8 text-black">
              <li className="flex items-center">
                <FaCheckCircle className="text-sky-500 mr-2" />
                Elevates brand credibility and trust.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-sky-500 mr-2" />
                Enhances user experience and navigation.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-sky-500 mr-2" />
                Increases Conversion Rates and Sales.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-sky-500 mr-2" />
                Drives business growth through customer engagement.
              </li>
            </ul>
            <p className="italic text-black">
              A professionally designed website serves as a dynamic tool, propelling your business towards unparalleled success in the digital landscape. Don't miss out on the transformative impact a well-crafted online presence can bring to your brand.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between items-center text-black">
          <div className="text-center mb-8 lg:mb-0">
            <h3 className="text-sky-500 text-4xl font-bold">OVER</h3>
            <div className="text-black text-4xl font-bold ">{websitesCreated}+</div>
            <p className="text-lg">Websites Created</p>
          </div>
          <div className="h-0.5 bg-black w-full lg:w-0 lg:h-28 lg:mx-4"></div>
          <div className="text-center mb-8 lg:mb-0">
            <h3 className="text-sky-500 text-4xl font-bold">OVER</h3>
            <div className="text-black text-4xl font-bold">{companiesHelped}+</div>
            <p className="text-lg">Companies Helped</p>
          </div>
          <div className="h-0.5 bg-black w-full lg:w-0 lg:h-28 lg:mx-4"></div>
          <div className="text-center">
            <h3 className="text-sky-500 text-4xl font-bold">OVER</h3>
            <div className="text-black text-4xl font-bold">{yearsExperience}+</div>
            <p className="text-lg">Years Combined Experience</p>
          </div>
        </div>
      </div>
    </div>
    <div className="">
    <div data-aos="fade-up" className="container mx-auto">
      <img src={websitedesign} alt="Sky Blue Image" className="rounded-lg shadow-lg mx-auto max-w-full" />
    </div>
  </div>
  </>
  );
};

export default Professional;
