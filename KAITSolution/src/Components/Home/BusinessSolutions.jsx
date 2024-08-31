import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCreditCard, FaHeadset, FaTools, FaSearch, FaFileContract } from 'react-icons/fa';

const BusinessSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-navy-700 text-white flex flex-col items-center justify-center business-slotion">
      <div className="container mx-auto p-4 text-center">
        <h1 
          data-aos="fade-up" 
          className="text-4xl font-bold mb-8"
        >
          We Offer Business Solutions <br /> That Ensure Your Success
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 business-slotion1">
          {/* Card 1 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100" 
            className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaCreditCard className="text-sky-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Payment Gateway</h2>
          </div>
          {/* Card 2 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200" 
            className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaHeadset className="text-sky-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Dedicated Support</h2>
          </div>
          {/* Card 3 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300" 
            className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaTools className="text-sky-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Website Maintenance</h2>
          </div>
          {/* Card 4 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400" 
            className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaSearch className="text-sky-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Search Engine Optimization</h2>
          </div>
          {/* Card 5 */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="500" 
            className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaFileContract className="text-sky-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Terms of Service Agreement</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
