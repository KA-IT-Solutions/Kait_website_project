import React, { useEffect } from 'react';
import './Services.css';

const YourComponent = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-in-view');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">OUR COMMITMENT & GUARANTEE</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-lg max-w-4xl mx-auto">
          SPRIOC DELIVERS ROBUST, SCALABLE AND HIGH PERFORMANCE SOFTWARE, WEB AND MOBILE APP DEVELOPMENT SERVICES TO HELP YOU HARNESS THE POWER OF TECHNOLOGY, CONSULTING AND MAXIMIZE YOUR ONLINE BUSINESS INVESTMENT.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-wrap">
        {/* Section 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="section-container bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">100% TRANSPARENCY</h2>
            <p>
              At SPRIOC, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="section-container bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">95% ON TIME DELIVERY</h2>
            <p>
              Our pursuit of agile development methodology has resulted in an enviable 95% on-time delivery track record of our operations.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="section-container bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">FREE 30 DAYS SUPPORT</h2>
            <p>
              We take complete responsibility for our work and provide free 30 days support to all our customers even after the software or mobile app has been launched.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="section-container bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">24X7 SUPPORT</h2>
            <p>
              Our communication channels are open 24/7, connecting you with the appropriate team of experts to ensure smooth execution of your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
