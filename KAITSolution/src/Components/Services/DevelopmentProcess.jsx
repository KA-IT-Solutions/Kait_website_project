import React, { useEffect } from "react";
import "./Services.css"; // Import the CSS file

const DevelopmentProcess = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-slide-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-4xl font-bold mb-2">OUR DEVELOPMENT PROCESS</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-lg max-w-4xl mx-auto">
          We deliver the highest level of customer service by deploying innovative and collaborative project management systems to build the most professional, robust, and highly scalable web & mobile solutions with the highest quality standards.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 animate-slide-up">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative p-6">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">&#10003;</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Post Your Project Requirements</h2>
              <p>
                Our analysts will thoroughly review your project requirements and select the most experienced developers best suited for your project.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 animate-slide-up">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative p-6">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">&#10003;</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Discuss Project Details with our Analysts</h2>
              <p>
                Our experts will contact you within no time to discuss your project-related queries and to offer the best solution for your project development.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 animate-slide-up">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative p-6">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">&#10003;</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Choose Engagement Terms & Timelines</h2>
              <p>
                Based on the project consultation provided by our experts, you can choose the engagement timelines for your project execution.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 animate-slide-up">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative p-6">
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">&#10003;</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Securely Pay Online and Get Started!</h2>
              <p>
                Make payment through our 100% secure online system and our team shall immediately get started on your project within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
