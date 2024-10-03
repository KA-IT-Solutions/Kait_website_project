import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import './Home.css';
import background from './Home-images/background.avif';



import karishna from './Home-images/logo1.jpeg';
import lilas from './Home-images/logo2.jpg';
import funiture from './Home-images/logo3.png';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { FaStar } from 'react-icons/fa';
import '../Services/Services'
import Professional from './Professional';
import BusinessSolutions from './BusinessSolutions';
import AchieveResults from './AchieveResults';
import ComprehensiveDigitalSolutions from './ComprehensiveDigitalSolutions';
import ImpactSection from './ImpactSection';




const faqData = [
  {
    question: "What services do you offer at Kait Solutions?",
    answer: "We specialize in creating responsive websites using the MERN stack, delivering visually stunning and user-friendly designs. Our services also extend to app development, AI chatbots, scanners, digital marketing, and ERP systems."
  },
  {
    question: "How do you ensure fast loading times for websites?",
    answer: "We focus on optimizing code, leveraging caching techniques, and using CDNs to ensure fast loading times. Our development practices prioritize performance to enhance user experience."
  },
  {
    question: "What makes Kait Solutions' designs user-friendly?",
    answer: "Our designs are responsive, ensuring a seamless experience across all devices. We prioritize intuitive navigation, interactive elements, and accessibility to create user-friendly interfaces."
  },
  {
    question: "How does Kait Solutions approach digital marketing?",
    answer: "We provide comprehensive digital marketing services that include SEO, social media management, content creation, and paid advertising. Our strategies are tailored to drive traffic, engagement, and conversions."
  },
  {
    question: "What kind of support can I expect during my project?",
    answer: "From concept to deployment, we provide end-to-end support. Our team of experts ensures that every project is executed with precision and creativity, delivering outstanding results. We offer ongoing support to ensure your digital transformation journey is smooth and successful."
  }
];


const testimonials = [
  {
 
    stars: 5,
    websiteLogo: karishna,
    shopName: "Karishna Academy",
    description: "Kait Solutions delivered an outstanding service. Our website is professional, user-friendly, and perfectly represents our academy. We highly recommend their expertise."
  },
  {
    
    stars: 5,
    websiteLogo: lilas,
    shopName: "Lilas's Cake Shop",
    description: "Fantastic work by Kait Solutions. Our e-commerce platform is now more user-friendly and efficient."
  },
  {

    stars: 5,
    websiteLogo: funiture,
    shopName: "Artisans Interior",
    description: "Highly recommend Kait Solutions for their professionalism and expertise. Our sales have increased significantly."
  }
];


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);
  useEffect(() => {
    // Add transition effect on page load
    const homeContainer = document.querySelector('.home-container');
    homeContainer.classList.add('opacity-0');
    setTimeout(() => {
      homeContainer.classList.remove('opacity-0');
      homeContainer.classList.add('opacity-100');
    }, 500);
  }, []);


  const [websitesCreated, setWebsitesCreated] = useState(0);
  const [companiesHelped, setCompaniesHelped] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  useEffect(() => {
    let websitesInterval = setInterval(() => {
      setWebsitesCreated(prev => (prev < 100 ? prev + 1 : 100));
    }, 1);

    let companiesInterval = setInterval(() => {
      setCompaniesHelped(prev => (prev < 70 ? prev + 1 : 70));
    }, 1);

    let yearsInterval = setInterval(() => {
      setYearsExperience(prev => (prev < 5 ? prev + 1 : 5));
    }, 20);

    return () => {
      clearInterval(websitesInterval);
      clearInterval(companiesInterval);
      clearInterval(yearsInterval);
    };
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };





  return (
    <>
    <div className="container mx-auto p-4 home-container mt-[-5px] transition-opacity duration-1000">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="flex flex-col gap-4 w-full md:w-1/2" data-aos="fade-right">
          <div className="p-1.5 first-text">
            <p>ELEVATE YOUR BRAND: PROFESSIONALLY CREATED WEBSITE FOR YOUR BUSINESS</p>
          </div>
          <h2 className="text-2xl font-bold">LET'S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.</h2>
          <p className='description'>We are the Make Lots Foundation. We design professional websites for those in need. We’re offering our design services at an affordable rate to support small businesses in building their online presence.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 bg-dark-blue text-white p-4 rounded-lg grid-heading" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-center">PLEASE SELECT YOUR PACKAGE</h2>
              <p className="text-center">Once your order is placed, we'll reach out to you shortly.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg mt-0" data-aos="fade-up">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-t-lg italic card1-heading">
                  <h3 className="text-xl font-bold text-center">BUSINESS PRO WEBSITE</h3>
                </div>
              </div>
              <div className="bg-gray-300 p-4">
                <h3 className="text-xl font-bold text-center">$200</h3>
              </div>
              <div className="bg-white p-4 text-center">
                <ul className="list-none">
                  <li className="py-2 border-b border-gray-300">5-Page Website</li>
                  <li className="py-2 border-b border-gray-300">Domain Registration</li>
                  <li className="py-2 border-b border-gray-300">Web Hosting*</li>
                  <li className="py-2 border-b border-gray-300">Business Email</li>
                  <li className="py-2">SEO Optimized Design</li>
                </ul>
                <Link to="/services">
                  <button className="card2-heading text-white p-4 rounded-lg mt-4">Get Started</button>
                </Link>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg mt-0" data-aos="fade-up">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-t-lg italic card2-heading">
                  <h3 className="text-xl font-bold text-center">ANDROID APP DEVELOPMENT</h3>
                </div>
              </div>
              <div className="bg-gray-300 p-4">
                <h3 className="text-xl font-bold text-center">$300</h3>
              </div>
              <div className="bg-white p-4 text-center">
                <ul className="list-none">
                  <li className="py-2 border-b border-gray-300">Custom App Design</li>
                  <li className="py-2 border-b border-gray-300">API Integration</li>
                  <li className="py-2 border-b border-gray-300">Cross-Platform Compatibility</li>
                  <li className="py-2 border-b border-gray-300">Security Features</li>
                  <li className="py-2">Ongoing Support</li>
                </ul>
                <Link to="/services">
                  <button className="card2-heading text-white p-4 rounded-lg mt-4">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 relative" data-aos="fade-left">
          <div className="relative">
            <img
              src={background}
              alt="Image"
              className="w-full h-full object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} // Clipping the image
            />
          </div>
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold mt-4">CRAFTING OUTSTANDING WEB EXPERIENCES</h2>
            <p className="mt-2">RESPONSIVE, USER-FRIENDLY, VISUALLY STUNNING DESIGNS</p>
            <ul className="list-none p-2 ml-4 mt-4 text-left inline-block">
              {/* Repeat list items with the same structure, add data-aos attributes as desired */}
              <li className="flex items-center mt-2" data-aos="zoom-in">
                <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                Responsive Layouts
              </li >
              <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Intuitive User Experience
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Visually Striking Designs
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Search Engine Optimization
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Accessible Content
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Fast Loading Times
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Mobile App
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  ERP System
                </li>
                <li className="flex items-center mt-2" data-aos="zoom-in">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Gaming Platform
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

<ComprehensiveDigitalSolutions/>



<AchieveResults/>
      
     
      {/* --------------------------------------- */}


<BusinessSolutions/>


{/* /*--------------------------------*/ }

     <Professional/>

      {/* ----------------------------------------------------- */}
     
      {/* ---------------------------------------------------- */}

      <div className=" min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">What Our Clients Are Saying</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.stars)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex justify-center items-center mt-4">
                  <img
                    src={testimonial.websiteLogo}
                    alt={testimonial.shopName}
                    className="w-10 h-10 mr-2"
                  />
                  <span>{testimonial.shopName}</span>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}

      
<ImpactSection/>

      {/* ------------------------------------------------------------ */}

      <div className="bg-gray-100 min-h-screen py-10 px-4 FTQ-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h2 className="text-lg font-semibold">{item.question}</h2>
                  {activeIndex === index ? (
                    <FaMinus className="text-sky-500" />
                  ) : (
                    <FaPlus className="text-sky-500" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}






    </>
  );
}

export default Home;
