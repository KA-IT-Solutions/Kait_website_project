import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import employee from './Home-images/employee.png';// Adjust the path to your image

const ComprehensiveDigitalSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <img
              src={employee}
              alt="Sample"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6" data-aos="fade-left">
            <h1 className="text-3xl font-bold text-navy-700">Comprehensive Digital Solutions</h1>
            <p className="mt-4 text-gray-700">
              We specialize in creating responsive websites using the MERN stack, delivering visually stunning and user-friendly designs that provide a seamless experience across all devices. Our services extend to app development, AI chatbots, scanners, digital marketing, and ERP systems, ensuring that your digital presence is not only engaging but also technologically advanced. We focus on fast loading times, interactive elements, and cross-browser compatibility to enhance your online performance.

              With a commitment to innovation, we tailor our solutions to meet your unique business needs, driving growth and efficiency. Our team of experts ensures that every project is executed with precision and creativity, delivering outstanding results that set you apart from the competition. From concept to deployment, we provide end-to-end support, making sure your digital transformation journey is smooth and successful. Partner with us to elevate your brand and achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveDigitalSolutions;
