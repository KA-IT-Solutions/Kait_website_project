import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import employee1 from './Home-images/employee1.jpg'; // Update the path to your image

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section with AOS Animation */}
        <div
          className="text-black p-4 rounded-lg"
          data-aos="fade-left" // Animation for the text
          data-aos-duration="1000" // Duration of the animation
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 p-2 description">
            The Impact of Effective Website Design and Development
          </h1>
          <p className="mb-4 text-sm md:text-base">
            Your online presence is significantly influenced by the design and development of your website. Even minor enhancements can significantly impact your success in the market. A basic and poorly optimized website is no longer sufficient for businesses.
          </p>
          <p className="mb-4 text-sm md:text-base">
            In the evolving digital landscape, customer discernment plays a crucial role in choosing business partners.
          </p>
          <p className="mb-4 text-sm md:text-base">
            For the past decade, The Make Lots Foundation has consistently outperformed other web design companies. Our commitment to delivering superior outcomes sets us apart and ensures our clients’ success.
          </p>
        </div>

        {/* Image Section with AOS Animation */}
        <div
          className="relative"
          data-aos="fade-right" // Animation for the image
          data-aos-duration="1000" // Duration of the animation
        >
          <img
            src={employee1}
            alt="Impactful Design"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full clip-slope"></div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
