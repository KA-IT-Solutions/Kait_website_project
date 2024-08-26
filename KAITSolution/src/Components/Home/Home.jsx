import React, { useEffect, useState } from 'react';
import video from './Home-images/video.mp4';
import { Link } from 'react-router-dom';
import './Home.css';
import background from './Home-images/background.avif';
import employee from './Home-images/employee.png';
import employee1 from './Home-images/employee1.jpg'
import webdesign from './Home-images/webdesign.png';
import websitedesign from './Home-images/websiteDesign.webp'
import karishna from './Home-images/logo1.jpeg';
import lilas from './Home-images/logo2.jpg';
import funiture from './Home-images/logo3.png';
import { FaPaintBrush, FaQuoteRight } from 'react-icons/fa';
import { FaCreditCard, FaHeadset, FaTools, FaSearch, FaFileContract } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import '../Services/Services'




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
      setCompaniesHelped(prev => (prev < 75 ? prev + 1 : 75));
    }, 1);

    let yearsInterval = setInterval(() => {
      setYearsExperience(prev => (prev < 5 ? prev + 1 : 50));
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
      <div className="container mx-auto p-4 home-container transition-opacity duration-1000">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className=" p-1.5 first-text ">
              <p>ELEVATE YOUR BRAND: PROFESSIONALLY CREAFTED WEBSITE FOR YOUR BUSINESS</p>
            </div>
            <h2 className="text-2xl font-bold">LET'S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.</h2>
            <p className='discription'>We are the Make Lots Foundation. We design professional websites for those in need. We’re offering our design services at an affordable rate to support small businesses in building their online presence.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

              <div className="col-span-1 md:col-span-2 bg-dark-blue text-white p-4 rounded-lg grid-heading">
                <h2 className="text-2xl font-bold text-center">PLEASE SELECT YOUR PACAKGE</h2>
                <p className="text-center">Once your order is placed, we'll reach out to you shortly.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg mt-0">
                <div className="grid grid-cols-1 gap-4">
                  {/* <div className="bg-blue-200 p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold">Business Pro Website</h3>
                  </div> */}
                  <div className=" p-4 rounded-t-lg italic card1-heading">
                    <h3 className="text-xl font-bold text-center">BUSINESS PRO WEBSITE</h3>
                  </div>
                </div>
                <div className="bg-gray-300 p-4">
                  <h3 className="text-xl font-bold text-center">$ 200</h3>
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
                    <button className="card1-heading text-white p-4 rounded-lg mt-4">Get Started</button>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg mt-0">
                <div className="grid grid-cols-1 gap-4">
                  {/* <div className="bg-blue-200 p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold">Business Pro Website</h3>
                  </div> */}
                  <div className=" p-4 rounded-t-lg italic card2-heading">
                    <h3 className="text-xl font-bold text-center">ANDRIOD APP DEVELOPMENT</h3>
                  </div>
                </div>
                <div className="bg-gray-300 p-4">
                  <h3 className="text-xl font-bold text-center">$ 300</h3>
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
          <div className="w-full md:w-1/2 relative">
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
                <li className="flex items-center ">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Responsive Layouts
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Intuitive User Experience
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Visually Striking Designs
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Search Engine Optimization
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Accessible Content
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Fast Loading Times
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Mobile App
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  ERP System
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Gaming Platform
                </li>
                <li className="flex items-center mt-2">
                  <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  Ai Building Chat Box
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div >



      <div className="bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                // src="https://via.placeholder.com/600x400" 
                src={employee}
                alt="Sample"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-navy-700">Comprehensive Digital Solutions</h1>
              <p className="mt-4 text-gray-700">
                We specialize in creating responsive websites using the MERN stack, delivering visually stunning and user-friendly designs that provide a seamless experience across all devices. Our services extend to app development, AI chatbots, scanners, digital marketing, and ERP systems, ensuring that your digital presence is not only engaging but also technologically advanced. We focus on fast loading times, interactive elements, and cross-browser compatibility to enhance your online performance.

                With a commitment to innovation, we tailor our solutions to meet your unique business needs, driving growth and efficiency. Our team of experts ensures that every project is executed with precision and creativity, delivering outstanding results that set you apart from the competition. From concept to deployment, we provide end-to-end support, making sure your digital transformation journey is smooth and successful. Partner with us to elevate your brand and achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2">
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
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-1 bg-gray-300 mb-4 flex items-center justify-center">
              <FaQuoteRight className="absolute text-sky-500 bg-white p-2 rounded-full" style={{ top: '-1.25rem' }} />
            </div>
            <p className="italic text-center mb-4">
              “I can’t tell you how much I appreciate your complimentary website service. My business is really taking off and I am so thankful to you!”
            </p>
            <div className="w-full aspect-w-16 aspect-h-10">
              <iframe
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
                className="w-full video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-700  text-white flex flex-col items-center justify-center business-slotion">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold mb-8">We Offer Business Solutions <br />That Ensure Your Success</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 business-slotion1">
            {/* Card 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaCreditCard className="text-sky-500 text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Payment Gateway</h2>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaHeadset className="text-sky-500 text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Dedicated Support</h2>
            </div>
            {/* Card 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaTools className="text-sky-500 text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Website Maintenance</h2>
            </div>
            {/* Card 4 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaSearch className="text-sky-500 text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Search Engine Optimization</h2>
            </div>
            {/* Card 5 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaFileContract className="text-sky-500 text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Terms of Service Agreement</h2>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------------------------- */}


      <div className="bg-navy-700 text-white py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">The Power of Professional Website Design</h1>
          <p className="mb-12 text-center text-black">
            Investing in a professionally designed website is crucial for businesses <br />seeking online success. It enhances credibility, user experience, and brand visibility driving growth and customer engagement.
          </p>

          <div className="flex flex-col lg:flex-row mb-12">
            <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 lg:mr-4">
              <img src={webdesign} alt="Professional Design" className="rounded-lg" />
              <div className="absolute top-0 left-0 bg-sky-500 w-20 h-20 transform -rotate-45 -translate-x-8 -translate-y-8"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-black">Unlocking Success:</h2>
              <div className="border-t-4 border-sky-500 w-full mb-6"></div>
              <ul className="space-y-4 mb-8 text-black">
                <li className="flex items-center ">
                  <FaCheckCircle className="text-sky-500 mr-2 " />
                  Elevates brand credibility and trust.
                </li>
                <li className="flex items-center ">
                  <FaCheckCircle className="text-sky-500 mr-2" />
                  Enhances user experience and navigation.
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-sky-500 mr-2" />
                  Increases Conversion Rates and Sales
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

          <div className="flex flex-col lg:flex-row justify-between items-center text-black">
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

      {/* ----------------------------------------------------- */}
      <div className="">
        <div className="container mx-auto">
          <img src={websitedesign} alt="Sky Blue Image" className="rounded-lg shadow-lg mx-auto max-w-full" />
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      <div className=" min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">What Our Clients Are Saying</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto"
                /> */}
               

                <div className="flex justify-center items-center mt-4">
                  <img
                    src={testimonial.websiteLogo}
                    alt={testimonial.shopName}
                    className="w-10 h-10 mr-2"
                  />
                  <span>{testimonial.shopName}</span>
                </div>
                <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>

                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.stars)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <p className="mt-4 text-gray-600">{testimonial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}

      <div className=" min-h-screen flex items-center justify-center p-4 employee1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-black p-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-4 p-2 discription">The Impact of Effective Website Design and Development</h1>
            <p className="mb-4">
              Your online presence is significantly influenced by the design and development of your website. Even minor enhancements can significantly impact your success in the market. A basic and poorly optimized website is no longer sufficient for businesses.
            </p>
            <p className="mb-4">
              In the evolving digital landscape, customer discernment plays a crucial role in choosing business partners.
            </p>
            <p className="mb-4">
              For the past decade, The Make Lots Foundation has consistently outperformed other web design companies. Our commitment to delivering superior outcomes sets us apart and ensures our clients’ success.
            </p>
          </div>
          <div className="relative">
            <img
              src={employee1}
              alt="Impactful Design"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full  clip-slope employee1"></div>
          </div>
        </div>
      </div>




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
