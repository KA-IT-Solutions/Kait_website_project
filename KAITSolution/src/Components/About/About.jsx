import React, { useEffect } from 'react';
import { FaLaptopCode, FaComments } from 'react-icons/fa'; // Importing icons from react-icons
import aboutus from './About-images/aboutus.webp'
import about1 from './About-images/about1.avif'
import aboutmain from './About-images/about-main.jpg'

const reviews = [
  {
    text: "Great service and delicious cakes!",
    image: "https://via.placeholder.com/150",
    name: "Alice",
    shopName: "Alice's Bakery"
  },
  {
    text: "I love the variety of cakes available.",
    image: "https://via.placeholder.com/150",
    name: "Bob",
    shopName: "Bob's Cake Shop"
  },
  {
    text: "Highly recommend this place for special occasions.",
    image: "https://via.placeholder.com/150",
    name: "Carol",
    shopName: "Carol's Confections"
  }
];



const BigCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="md:w-1/2 flex justify-center items-center p-3">
        <img src={aboutus} alt="About Us" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <FaLaptopCode className="text-blue-500 text-3xl mr-3" /> {/* Icon for TECHNOLOGY LEADERSHIP */}
          <h2 className="text-2xl font-bold">TECHNOLOGY LEADERSHIP</h2>
        </div>
        <p className="mb-6">
          KAIT Software Solution stays on top of new advances in the information technology world, so you can be assured that our software development technologies and technique choices are at the height of current knowledge.
        </p>
        <div className="flex items-center mb-4">
          <FaComments className="text-blue-500 text-3xl mr-3" /> {/* Icon for COMMUNICATION */}
          <h2 className="text-2xl font-bold">COMMUNICATION</h2>
        </div>
        <p>
          At KAIT Software Solution  we take delight in providing excellent customer service. We guarantee we don’t promise anything we can’t follow up on. We are honest and completely accountable with our clients.
        </p>
        <div className="flex items-center mb-4">
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-500"></div>
            <h2 className="text-2xl font-bold">VALUE</h2>
            <p>
              Our offshore development facilities in Pune afford us the flexibility to charge competitive prices for our quality work. Our near decade of specializations and expertise guarantee that KAIT Software Solution development costs are the
              most affordable relative to value added, and our finished products are of superior quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <img src={aboutmain} alt="Banner" className="w-full h-full object-cover animate-blink" />
      </div>

      <div>
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        {/* <div className="text-center py-4">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div> */}
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">ABOUT THE COMPANY</h2>
              <h1 className="text-3xl font-bold mb-4">KAIT SOFTWARE SOLUTIONS</h1>
              <p className="mb-4">
                We are committed to providing the best services and products to our customers. Our team is dedicated to excellence and customer satisfaction.
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Our Mission: At KAIT Software Solutions, we specialize in creating responsive websites using the MERN stack. Our services extend to app development, AI chatbots, scanners, digital marketing, and ERP systems, ensuring that your digital presence is engaging and technologically advanced. We focus on fast loading times, interactive elements, and cross-browser compatibility to enhance your online performance.
              </h3>
              <p className="mb-4">
              Our team of experts ensures that every project is executed with precision and creativity, delivering outstanding results that set you apart from the competition. From concept to deployment, we provide end-to-end support, making sure your digital transformation journey is smooth and successful. Partner with us to elevate your brand and achieve your business goals.              </p>
              <div className="w-full h-1 bg-gray-200 mb-8"></div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={about1} alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">WHY CHOOSE US</h2>
          <p className="text-lg mt-4">
            There are many reasons why KAIT Software Solution technology is the company<br/> to choose for your software development or software product development project.
          </p>
        </div>
        <BigCard />
        {/* <div className="text-center py-8">
          <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
          <p className="text-lg mt-4">Our Happy Clients!</p>
        </div>
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        <ReviewSection /> */}
      </div>
    </>
  );
};

export default About;
