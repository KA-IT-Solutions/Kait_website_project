import React, { useEffect } from 'react';
import './Home.css';
import background from './Home-images/background.avif';

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
      Seamless Navigation
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
      Engaging Interactions
    </li>
    <li className="flex items-center mt-2">
      <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      Cross-Browser Compatibility
    </li>
    <li className="flex items-center mt-2">
      <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      Engaging Interactions
    </li>
    <li className="flex items-center mt-2">
      <svg className="w-4 h-4 bg-[rgb(39,158,182)] text-white mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      Cross-Browser Compatibility
    </li>
  </ul>
</div>

          </div>
        </div>
      </div >
    </>
  );
}

export default Home;
