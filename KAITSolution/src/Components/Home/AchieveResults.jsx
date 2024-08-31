import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from './Home-images/video.mp4'; // Local video file
import { FaQuoteRight } from 'react-icons/fa';

const AchieveResults = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Achieve Incredible Results That Are Unrivaled In The Web Design Industry.
          </h1>
          <p className="mb-4">
            Our mission is to empower fledgling business owners by providing them with professional, high-quality websites at an affordable cost. We strive to level the playing field and give small business owners the tools they need to succeed in today’s digital age and unleash their full potential.
          </p>
          <p className="mb-4">
            Our clients are at the heart of everything we do. We’re dedicated to providing personalized, attentive service to each and every one of our clients, and believe that building strong relationships is the key to our success. Moreover, we believe in building websites that are sustainable and scalable, ensuring that our clients are able to achieve their long-term goals.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="fade-right">
          <div className="relative w-full h-1 bg-gray-300 mb-4 flex items-center justify-center">
            <FaQuoteRight className="absolute text-sky-500 bg-white p-2 rounded-full" style={{ top: '-1.25rem' }} />
          </div>
          <p className="italic text-center mb-4">
            “I can’t tell you how much I appreciate your complimentary website service. My business is really taking off and I am so thankful to you!”
          </p>
          <div className="w-full aspect-w-16 aspect-h-10">
            <video
              controls
              className="w-full h-full"
              src={video}
              title="Video description"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchieveResults;
