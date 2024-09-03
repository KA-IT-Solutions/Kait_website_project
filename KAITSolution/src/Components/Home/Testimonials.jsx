import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = ({ testimonials = [] }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Debugging: Log the testimonials array
  console.log('Testimonials:', testimonials);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 data-aos="fade-up" className="text-4xl font-bold mb-8">What Our Clients Are Saying</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.length === 0 ? (
            <p>No testimonials available.</p>
          ) : (
            testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto"
                  data-aos="zoom-in"
                />
                <h2 className="text-xl font-semibold mt-4">{testimonial.name}</h2>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex justify-center items-center mt-4">
                  <img
                    src={testimonial.websiteLogo}
                    alt={testimonial.shopName}
                    className="w-10 h-10 mr-2"
                    data-aos="flip-right"
                  />
                  <span>{testimonial.shopName}</span>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
