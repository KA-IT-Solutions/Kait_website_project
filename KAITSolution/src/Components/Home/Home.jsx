import React, { useEffect } from 'react';
import './Home.css';
import background from './Home-images/background.avif';
import employee from './Home-images/employee.png'

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

  return (
    <>
      <div className="container mx-auto p-4 home-container transition-opacity duration-1000">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className=" p-1.5 first-text ">
              <p>ELEVATE YOUR BRAND: PROFESSIONALLY CREAFTED WEBSITE FOR YOUR BUSINESS</p>
            </div>
            <h2 className="text-2xl font-bold">LET'S BUILD AN EXCEPTIONAL WEBSITE TOGATHER.</h2>
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
                    <li className="py-2 border-b border-gray-300">Domain Registrstion</li>
                    <li className="py-2 border-b border-gray-300">Web Hosting*</li>
                    <li className="py-2 border-b border-gray-300">Business Email</li>
                    <li className="py-2">SEO Optimized Design</li>
                  </ul>
                  <button className="card1-heading text-white p-4 rounded-lg mt-4">Get Started</button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg mt-0">
                <div className="grid grid-cols-1 gap-4">
                  {/* <div className="bg-blue-200 p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold">Business Pro Website</h3>
                  </div> */}
                  <div className=" p-4 rounded-t-lg italic card2-heading">
                    <h3 className="text-xl font-bold text-center">E-COMMERCE WEBSITE</h3>
                  </div>
                </div>
                <div className="bg-gray-300 p-4">
                  <h3 className="text-xl font-bold text-center">$ 300</h3>
                </div>
                <div className="bg-white p-4 text-center">
                  <ul className="list-none">
                    <li className="py-2 border-b border-gray-300">10 Products Listed</li>
                    <li className="py-2 border-b border-gray-300">Domain Registrstion</li>
                    <li className="py-2 border-b border-gray-300">Web Hosting*</li>
                    <li className="py-2 border-b border-gray-300">Business Email</li>
                    <li className="py-2">SEO Optimized Design</li>
                  </ul>
                  <button className="card2-heading text-white p-4 rounded-lg mt-4">Get Started</button>
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




    </>
  );
}

export default Home;
