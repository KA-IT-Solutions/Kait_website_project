import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaComments } from 'react-icons/fa';
import aboutus from './About-images/aboutus.webp';
import about1 from './About-images/about1.avif';
import aboutmain from './About-images/about-main.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BigCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:w-1/2 flex justify-center items-center p-3" data-aos="fade-right">
        <img src={aboutus} alt="About Us" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center" data-aos="fade-left">
        <div className="flex items-center mb-4">
          <FaLaptopCode className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold">TECHNOLOGY LEADERSHIP</h2>
        </div>
        <p className="mb-6">
          KA IT Solutions stays on top of new advances in the information technology world, ensuring our software development technologies and techniques are at the height of current knowledge.
        </p>
        <div className="flex items-center mb-4">
          <FaComments className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold">COMMUNICATION</h2>
        </div>
        <p>
          At KA IT Solutions, we pride ourselves on providing excellent customer service. We are transparent, reliable, and fully accountable to our clients.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const [missionText, setMissionText] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fullText =
      "Our Mission: At KA IT Solutions, our mission is to empower businesses by delivering innovative and reliable IT solutions that drive efficiency, growth, and digital transformation.";

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setMissionText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Remove the mt-[1000px] and set it to mt-0 or remove mt completely */}
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden" data-aos="fade-left">
        <img src={aboutmain} alt="Banner" className="w-full h-full object-cover" />
      </div>

      <div>
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        <div className="container mx-auto p-4" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">ABOUT THE COMPANY</h2>
              <h1 className="text-3xl font-bold mb-4">KA IT SOLUTIONS</h1>
              <p className="mb-4">
                At KA IT Solutions, we are passionate about driving digital innovation and delivering transformative results for businesses of all sizes. Founded with a vision to bridge the gap between technology and business needs, we specialize in providing comprehensive digital marketing services that empower our clients to reach their full potential online.
              </p>
              <h3 className="text-xl font-semibold mb-4">{missionText}</h3>
              <p className="mb-4">
                We strive to innovate and lead in our industry, always prioritizing quality and integrity.
              </p>
              <div className="w-full h-1 bg-gray-200 mb-8"></div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={about1} alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div className="text-center py-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold">WHY CHOOSE KA IT SOLUTIONS</h2>
          <p className="text-lg mt-4">
            There are many reasons why KA IT Solutions is the ideal partner for your software development or digital marketing projects.
          </p>
        </div>

        <BigCard />
      </div>
    </>
  );
};

export default About;
