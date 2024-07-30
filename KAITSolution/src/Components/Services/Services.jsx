
import "./Services.css";
// src/pages/Services.jsx
import React, { useState } from 'react';
import service from './banner1.jpg'

const services = [
  {
    id: 1,
    title: 'Web Devlopment',
    description: 'At Kait Solution, we specialize in providing top-notch web development services tailored to meet your unique needs',
    image: '/Service1.jpg',
    moreInfo: 'Static Websites: Fast, secure, and visually stunning.Dynamic Websites: Interactive, responsive, and easy to manage.ERP Systems: Custom solutions to streamline business processes.Partner with Kait Solution for professional web development services tailored to your needs.',
    details: {
      image: '/detail1.jpg',
      text: 'At Kait Solution, we specialize in providing top-notch web development services tailored to meet your unique needs. Whether you require a static website, a dynamic web application, or a comprehensive ERP system, our experienced team is here to deliver..',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Static Websites: We create visually stunning static websites that are fast, secure, and perfect for showcasing your business or personal portfolio.' },
      { img: '/service1_2.jpg', text: 'Dynamic Websites: Our dynamic web solutions are interactive and engaging, providing an excellent user experience. We utilize the latest technologies to ensure your website is responsive, functional, and easy to manage.' },
      { img: '/service1_3.jpg', text: 'ERP Systems: Streamline your business processes with our custom ERP systems. Our ERP solutions are designed to integrate all facets of your business, improving efficiency and productivity.' },
      
    ],
  },
  {
    id: 2,
    title: 'App Devlopment',
    description: 'At Kait Solution, we offer comprehensive  app development services tailored to meet your unique needs',
    image: '/service2.jpg',
    moreInfo: 'In addition to web development, we specialize in app development for both iOS and Android platforms. Our apps are seamless, user-friendly, and feature-rich, ensuring consistent performance across multiple devices. We also provide custom app solutions tailored to your specific business requirements..',
    details: {
      image: '/detail2.jpg',
      text: 'At Kait Solution, we offer comprehensive web and app development services tailored to meet your unique needs. Our web development expertise includes creating fast, secure, and visually stunning static websites, interactive and responsive dynamic websites, and custom ERP systems designed to streamline your business processes',
    },
    additionalImages: [
      { img: '/service2_1.jpg', text: ' Android apps that cater to various needs and reach a global audience via the Google Play Store.' },
      { img: '/service2_2.jpg', text: ' iOS apps designed to deliver an excellent user experience. Our apps are tailored to meet diverse needs and help you reach a wide audience through the Apple App Store.' },
      { img: '/service2_3.jpg', text: 'cross-platform apps that deliver consistent performance and a seamless user experience across multiple devices. Our apps are designed to maximize reach and efficiency, catering to both iOS and Android users.' },
      { img: '/service2_4.jpg', text: 'Custom app development solutions designed to meet your unique business needs. Our custom apps are crafted to enhance functionality, streamline operations, and deliver a personalized user experience.' },
     
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Digital marketing uses online channels like SEO, content, social media, and email to promote products, engage audiences, and drive growth. It focuses on leveraging data to optimize strategies and achieve business goals.',
    image: '/service3.jpg',
    moreInfo: ' Affiliate marketing leverages partners to expand reach, and analytics help measure and refine performance. Conversion Rate Optimization (CRO) improves website effectiveness to boost conversions. Overall, digital marketing is essential for reaching and engaging target audiences, driving traffic, and fostering business growth.',
    details: {
      image: '/detail3.jpg',
      text: 'Digital marketing encompasses various strategies to promote products or services online. It includes SEO to enhance website visibility, content marketing to attract and engage audiences, and social media marketing to build brand presence. Email marketing nurtures leads, while PPC advertising drives targeted traffic',
    },
    additionalImages: [
      { img: '/service3_1.jpg', text: 'Targeted Advertising At Kait Solution, we specialize in targeted advertising to reach specific audiences with personalized ad campaigns, using data-driven insights to maximize ROI and enhance ad performance.' },
      
      { img: '/service3_5.jpg', text: 'Email marketing involves sending targeted emails to prospects and customers . It includes newsletters, promotional offers, and personalized messages designed to build customer loyalty and increase conversions.' },
    
      { img: '/service3_3.jpg', text: 'Social media management involves creating, scheduling, and monitoring content across social platforms to build brand presence, engage with your audience, and drive traffic. It includes managing posts, running ad campaigns, and analyzing performance to optimize strategy.' },
      { img: '/service3_4.jpg', text: 'Content marketing focuses on creating and sharing valuable, relevant content to attract and engage a target audience. This includes blog posts, articles, videos, and infographics designed to build brand authority, drive traffic, and foster customer loyalty' },
      { img: '/service3_2.jpg', text: 'SEO improves your website’s visibility on search engines by optimizing content, keywords, and technical elements to drive organic traffic and enhance search rankings.' },
    ],
  },
  {
    id: 4,
    title: 'Branding',
    description: 'At Kait Solution, we build a strong, cohesive brand identity through distinctive logos, consistent messaging, and a unified visual style to enhance recognition and trust.',
    image: '/service3.png',
    moreInfo: 'At Kait Solution, we focus on crafting a strong and cohesive brand identity. This involves creating distinctive logos, maintaining consistent messaging, and developing a unified visual style. Our approach is designed to enhance brand recognition, build trust, and effectively communicate our values and expertise across all platforms.',
    details: {
      image: '/service3.png',
      text: 'At Kait Solution, we build a strong, cohesive brand identity through distinctive logos, consistent messaging, and a unified visual style to enhance recognition and trust.',
    },
    additionalImages: [
      { img: '/service4_1.jpg', text: 'Menu branding designs a menu that reflects your brand’s identity using consistent visual elements, fonts, and colors to attract attention and enhance customer experience.' },
      { img: '/service4_2.jpg', text: 'Branding product packaging involves designing packaging that reflects your brand’s identity through logos, colors, and messaging. It aims to attract customers, convey quality, and reinforce brand recognition.' },
      { img: '/service4_3.jpg', text: 'Visual identity branding creates a consistent visual style with logos, colors, and typography to establish brand recognition and communicate your brand’s values.' },
      { img: '/service4_4.jpg', text: 'A one-stop solution provides comprehensive services or products in a single place, simplifying the process for customers by offering everything they need under one roof.' },
      { img: '/service4_5.jpg', text: 'In branding, social media communication involves using social platforms to consistently convey your brand’s voice and values. It includes creating engaging content, responding to followers, and managing interactions to strengthen brand identity, build customer loyalty, and enhance overall brand presence.' },
      { img: '/service4_6.jpg', text: 'Branding assets include visual elements like logos, colors, and typography used to maintain a consistent brand identity across various materials. Wall prints are large-format graphics displayed in physical spaces to reinforce brand presence, create an engaging environment, and enhance brand visibility.' },
    ],
  },
 
];

const cardContents = [
  "Customized plans that align with your business goals to maximize online presence and ROI.",
  "Boost your website's visibility and attract more organic traffic with our proven SEO techniques.",
  "High-quality content that captivates your audience and drives engagement across all platforms.",
  "Comprehensive management of your social media accounts to increase brand awareness and customer loyalty.",
  "Actionable analytics and insights to make informed decisions and continuously improve your marketing efforts.",
  "Dedicated support to assist you every step of the way, ensuring your marketing campaigns run smoothly."
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
    <div className="flex-grow">
      {/* Banner */}
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <img src={service} alt="Banner" className="w-full h-full object-cover animate-blink" />
      </div>

      <div className="flex flex-col items-center my-8">
  <h2 className="text-3xl font-bold text-center">OUR SERVICES</h2>
  <div className="w-24 h-1 bg-blue-600 mt-2"></div>
</div>
      

      {selectedService ? (
        <div className="p-4">
          {/* Service Detail Section */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={selectedService.details.image} alt="Detail" className="w-full md:w-1/3 h-48 object-cover" />
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              <p className="mb-4">{selectedService.details.text}</p>
              <p className="mb-4">{selectedService.moreInfo}</p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 my-8">
            {selectedService.additionalImages.map((detail, idx) => (
              <div key={idx} className="w-full md:w-1/2 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={detail.img} alt={`Detail ${idx + 1}`} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <p className="text-lg">{detail.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mt-4" 
            onClick={() => setSelectedService(null)}
          >
            Back to Services
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          {services.map(service => (
            <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <button 
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" 
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>




    {/* ---------------------------------- */}


    
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
        <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-2">
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

    {/* -------------------------------- */}



    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">OUR DEVELOPMENT PROCESS</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-lg max-w-4xl mx-auto">
          We deliver the highest level of customer service by deploying innovative and collaborative project management systems to build the most professional, robust, and highly scalable web & mobile solutions with the highest quality standards.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
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

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
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

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
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

        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
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


    {/* ------------------------------------ */}



    <div className="min-h-screen p-4 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">OUR COMMITMENT & GUARANTEE</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-lg max-w-4xl mx-auto">
          SPRIOC DELIVERS ROBUST, SCALABLE AND HIGH PERFORMANCE SOFTWARE, WEB AND MOBILE APP DEVELOPMENT SERVICES TO HELP YOU HARNESS THE POWER OF TECHNOLOGY, CONSULTING AND MAXIMIZE YOUR ONLINE BUSINESS INVESTMENT.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-wrap">
        {/* Section 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">100% TRANSPARENCY</h2>
            <p>
              At SPRIOC, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">95% ON TIME DELIVERY</h2>
            <p>
              Our pursuit of agile development methodology has resulted in an enviable 95% on-time delivery track record of our operations.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">FREE 30 DAYS SUPPORT</h2>
            <p>
              We take complete responsibility for our work and provide free 30 days support to all our customers even after the software or mobile app has been launched.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
            <h2 className="text-xl font-bold mb-4">24X7 SUPPORT</h2>
            <p>
              Our communication channels are open 24/7, connecting you with the appropriate team of experts to ensure smooth execution of your project.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Services;
