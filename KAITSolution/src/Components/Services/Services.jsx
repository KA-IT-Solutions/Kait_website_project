// src/pages/Services.jsx
import React, { useState } from 'react';
import service from './banner1.jpg'

const services = [
  {
    id: 1,
    title: 'Web Devlopment',
    description: 'Description for service 1',
    image: '/Service1.jpg',
    moreInfo: 'Additional information for service 1.',
    details: {
      image: '/detail1.jpg',
      text: 'Detailed information about Service 1.',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Detail 1 description' },
      { img: '/service1_2.jpg', text: 'Detail 2 description' },
      { img: '/service1_3.jpg', text: 'Detail 3 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
    ],
  },
  {
    id: 2,
    title: 'App Devlopment',
    description: 'Description for service 1',
    image: '/service2.jpg',
    moreInfo: 'Additional information for service 1.',
    details: {
      image: '/detail1.jpg',
      text: 'Detailed information about Service 1.',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Detail 1 description' },
      { img: '/service1_2.jpg', text: 'Detail 2 description' },
      { img: '/service1_3.jpg', text: 'Detail 3 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Description for service 1',
    image: '/service3.jpg',
    moreInfo: 'Additional information for service 1.',
    details: {
      image: '/detail1.jpg',
      text: 'Detailed information about Service 1.',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Detail 1 description' },
      { img: '/service1_2.jpg', text: 'Detail 2 description' },
      { img: '/service1_3.jpg', text: 'Detail 3 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
    ],
  },
  {
    id: 4,
    title: 'Branding',
    description: 'Description for service 1',
    image: '/service3.png',
    moreInfo: 'Additional information for service 1.',
    details: {
      image: '/detail1.jpg',
      text: 'Detailed information about Service 1.',
    },
    additionalImages: [
      { img: '/service1_1.jpg', text: 'Detail 1 description' },
      { img: '/service1_2.jpg', text: 'Detail 2 description' },
      { img: '/service1_3.jpg', text: 'Detail 3 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
      { img: '/service1_4.jpg', text: 'Detail 4 description' },
    ],
  },
  // Define other services similarly
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex-grow">
      {/* Banner */}
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <img src={service} alt="Banner" className="w-full h-full object-cover animate-blink" />
      </div>

      <h2 className="text-3xl font-bold text-center my-8">Our Services</h2>

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
  );
};

export default Services;
