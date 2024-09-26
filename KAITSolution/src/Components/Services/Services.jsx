import "./Services.css";
// src/pages/Services.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import service from './banner1.jpg'
import YourComponent from "./YourComponent";
import DevelopmentProcess from "./DevelopmentProcess";
import Popup from "./Popup";

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'At KA IT, we specialize in providing top-notch web development services tailored to meet your unique needs',
    image: '/Service1.jpg',
    moreInfo: 'Static Websites: Fast, secure, and visually stunning. Dynamic Websites: Interactive, responsive, and easy to manage. ERP Systems: Custom solutions to streamline business processes. Partner with KA IT for professional web development services tailored to your needs.',
    details: {
      image: '/detail1.jpg',
      text: 'At KA IT, we specialize in providing top-notch web development services tailored to meet your unique needs. Whether you require a static website, a dynamic web application, or a comprehensive ERP system, our experienced team is here to deliver.',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Static Websites: We create visually stunning static websites that are fast, secure, and perfect for showcasing your business or personal portfolio.' },
      { img: '/service1_2.jpg', text: 'Dynamic Websites: Our dynamic web solutions are interactive and engaging, providing an excellent user experience. We utilize the latest technologies to ensure your website is responsive, functional, and easy to manage.' },
      { img: '/service1_3.jpg', text: 'ERP Systems: Streamline your business processes with our custom ERP systems. Our ERP solutions are designed to integrate all facets of your business, improving efficiency and productivity.' },
    ],
  },
  {
    id: 2,
    title: 'App Development',
    description: 'At KA IT, we offer comprehensive app development services tailored to meet your unique needs',
    image: '/service2.jpg',
    moreInfo: 'In addition to web development, we specialize in app development for both iOS and Android platforms. Our apps are seamless, user-friendly, and feature-rich, ensuring consistent performance across multiple devices. We also provide custom app solutions tailored to your specific business requirements.',
    details: {
      image: '/detail2.jpg',
      text: 'At KA IT, we offer comprehensive web and app development services tailored to meet your unique needs. Our web development expertise includes creating fast, secure, and visually stunning static websites, interactive and responsive dynamic websites, and custom ERP systems designed to streamline your business processes',
    },
    additionalImages: [
      { img: '/service2_1.jpg', text: 'Android apps that cater to various needs and reach a global audience via the Google Play Store.' },
      { img: '/service2_2.jpg', text: 'iOS apps designed to deliver an excellent user experience. Our apps are tailored to meet diverse needs and help you reach a wide audience through the Apple App Store.' },
      { img: '/service2_3.jpg', text: 'Cross-platform apps that deliver consistent performance and a seamless user experience across multiple devices. Our apps are designed to maximize reach and efficiency, catering to both iOS and Android users.' },
      { img: '/service2_4.jpg', text: 'Custom app development solutions designed to meet your unique business needs. Our custom apps are crafted to enhance functionality, streamline operations, and deliver a personalized user experience.' },
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Digital marketing uses online channels like SEO, content, social media, and email to promote products, engage audiences, and drive growth. It focuses on leveraging data to optimize strategies and achieve business goals.',
    image: '/service3.jpg',
    moreInfo: 'Affiliate marketing leverages partners to expand reach, and analytics help measure and refine performance. Conversion Rate Optimization (CRO) improves website effectiveness to boost conversions. Overall, digital marketing is essential for reaching and engaging target audiences, driving traffic, and fostering business growth.',
    details: {
      image: '/detail3.jpg',
      text: 'Digital marketing encompasses various strategies to promote products or services online. It includes SEO to enhance website visibility, content marketing to attract and engage audiences, and social media marketing to build brand presence. Email marketing nurtures leads, while PPC advertising drives targeted traffic',
    },
    additionalImages: [
      { img: '/service3_1.jpg', text: 'Targeted Advertising: At KA IT, we specialize in targeted advertising to reach specific audiences with personalized ad campaigns, using data-driven insights to maximize ROI and enhance ad performance.' },
      { img: '/service3_5.jpg', text: 'Email marketing involves sending targeted emails to prospects and customers. It includes newsletters, promotional offers, and personalized messages designed to build customer loyalty and increase conversions.' },
      { img: '/service3_3.jpg', text: 'Social media management involves creating, scheduling, and monitoring content across social platforms to build brand presence, engage with your audience, and drive traffic. It includes managing posts, running ad campaigns, and analyzing performance to optimize strategy.' },
      { img: '/service3_4.jpg', text: 'Content marketing focuses on creating and sharing valuable, relevant content to attract and engage a target audience. This includes blog posts, articles, videos, and infographics designed to build brand authority, drive traffic, and foster customer loyalty' },
      { img: '/service3_2.jpg', text: 'SEO improves your website’s visibility on search engines by optimizing content, keywords, and technical elements to drive organic traffic and enhance search rankings.' },
    ],
  },
  {
    id: 4,
    title: 'Branding',
    description: 'At KA IT, we build a strong, cohesive brand identity through distinctive logos, consistent messaging, and a unified visual style to enhance recognition and trust.',
    image: '/service3.png',
    moreInfo: 'At KA IT, we focus on crafting a strong and cohesive brand identity. This involves creating distinctive logos, maintaining consistent messaging, and developing a unified visual style. Our approach is designed to enhance brand recognition, build trust, and effectively communicate our values and expertise across all platforms.',
    details: {
      image: '/service3.png',
      text: 'At KA IT, we build a strong, cohesive brand identity through distinctive logos, consistent messaging, and a unified visual style to enhance recognition and trust.',
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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div className="flex-grow">
        {/* Banner */}
        <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden" data-aos="fade-left">
        <img src={service } alt="Banner" className="w-full h-full object-cover" />
      </div>


        <div className="flex flex-col items-center my-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-blue-600 mt-2"></div>
        </div>

        {selectedService ? (
          <div className="p-4" data-aos="fade-up">
            {/* Service Detail Section */}
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={selectedService.details.image} alt={selectedService.title} className="w-full md:w-1/2 h-64 object-cover" />
              <div className="p-4 md:p-8">
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                <p className="mt-2 text-gray-600">{selectedService.details.text}</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setSelectedService(null)}
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4" data-aos="fade-up">
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => setSelectedService(service)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <YourComponent />
        <DevelopmentProcess />
        <Popup />
      </div>
    </>
  );
};

export default Services;
