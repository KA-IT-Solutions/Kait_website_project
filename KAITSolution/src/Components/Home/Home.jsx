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
            <div className="text-white p-4 rounded-lg grid-heading">
              Dark blue div with text
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="bg-yellow-300 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Website Building</h3>
                <p>Building dynamic and responsive websites</p>
                <ul className="list-disc ml-4">
                  <li>Customized Designs</li>
                  <li>SEO Friendly</li>
                  <li>Fast Loading</li>
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Price</h3>
                <p>Affordable pricing for all services</p>
                <ul className="list-disc ml-4">
                  <li>Competitive Rates</li>
                  <li>Transparent Billing</li>
                  <li>No Hidden Costs</li>
                </ul>
              </div>
            </div>
            <button className="bg-blue-500 text-white p-4 rounded-lg">Button</button>
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
            <h2 className="text-2xl font-bold mt-4">Some Heading</h2>
            <ul className="list-disc ml-4 mt-2">
              <li>Key feature one explained in detail.</li>
              <li>Another essential point described.</li>
              <li>Additional information or feature point.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
