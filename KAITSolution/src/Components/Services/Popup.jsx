import React, { useEffect } from "react";
import "./Services.css";

const Popup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cardSections = document.querySelectorAll(".popup-animation");
      cardSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("popup-animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardContents = [
    "Customized plans that align with your business goals to maximize online presence and ROI.",
  "Boost your website's visibility and attract more organic traffic with our proven SEO techniques.",
  "High-quality content that captivates your audience and drives engagement across all platforms.",
  "Comprehensive management of your social media accounts to increase brand awareness and customer loyalty.",
  "Actionable analytics and insights to make informed decisions and continuously improve your marketing efforts.",
  "Dedicated support to assist you every step of the way, ensuring your marketing campaigns run smoothly."
  ];

  return (
    <div className="w-full bg-gray-100 py-12">
      {/* Full-Screen Width Div */}
      <div className="relative w-full bg-blue-200 py-8">
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center text-center mt-8">
          <h1 className="text-3xl font-bold mb-2">WITH KAIT SOLUTION YOU GET</h1>
          <div className="w-24 h-1 bg-blue-600 mb-4"></div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-32">
          {cardContents.map((content, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 p-2 popup-animation"
            >
              <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-start">
                {/* Circle with Check Mark */}
                <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                  <span className="text-white text-2xl">✔</span>
                </div>
                <p className="mt-12">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
