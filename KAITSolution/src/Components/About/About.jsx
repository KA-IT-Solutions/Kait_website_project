import React, { useEffect } from 'react';
import { FaLaptopCode, FaComments } from 'react-icons/fa'; // Importing icons from react-icons
import aboutus from './About-images/aboutus.webp'
import about1 from './About-images/about1.avif'
import aboutmain from './About-images/about-main.jpg'


const reviews = [
  { id: 1, image: 'path/to/image1.jpg', shop: 'Shop A', review: 'Great service and delicious cakes!' },
  { id: 2, image: 'path/to/image2.jpg', shop: 'Shop B', review: 'Loved the variety and taste!' },
  { id: 3, image: 'path/to/image3.jpg', shop: 'Shop C', review: 'Best cake shop in town!' },
];

// const reviews = [
//   {
//     text: "I had an excellent experience with ArtisansInterior Furniture. The website is user-friendly, the furniture quality is outstanding, and the customer service is exceptional. Highly recommended for beautifully crafted pieces!",
    
//     name: "Vivek",
//     shopName: "Artisans Interior"
//   },
//   {
//     text: "The Lilas Cake Shop exceeded my expectations! Their cakes are not only beautifully crafted but also incredibly delicious. The customer service was friendly and attentive, ensuring my order was perfect. Highly recommended for any special occasion!.",
   
//     name: "Sager",
//     shopName: "The Lila's Cake Shop"
//   },
//   {
//     text: "Krishna Academy is fantastic! The instructors are knowledgeable and passionate, making learning engaging and effective. The curriculum is well-structured, and the support staff is always helpful. Highly recommended for anyone seeking quality education and a positive learning environment!",
   
//     name: "Carol",
//     shopName: "Krishana Acadmey"
//   }
// ];

const ReviewCard = ({ reviewText, imageSrc, name, shopName }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-6 overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="absolute top-0 left-0 w-16 h-16 bg-white transform -translate-x-4 -translate-y-4 rotate-45 z-10"></div>
      <div className="flex items-center mb-4 relative z-20">
        <img src={aboutus} alt={name} className="w-16 h-16 rounded-full mr-4 border-2 border-white" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600">{shopName}</p>
        </div>
      </div>
      <p className="text-gray-700">{reviewText}</p>
    </div>
  );
};

// const ReviewSection = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {reviews.map((review, index) => (
//           <ReviewCard
//             key={index}
//             reviewText={review.text}
           
//             name={review.name}
//             shopName={review.shopName}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

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
          KAIT Solutions stays on top of new advances in the information technology world, so you can be assured that our software development technologies and technique choices are at the height of current knowledge.
        </p>
        <div className="flex items-center mb-4">
          <FaComments className="text-blue-500 text-3xl mr-3" /> {/* Icon for COMMUNICATION */}
          <h2 className="text-2xl font-bold">COMMUNICATION</h2>
        </div>
        <p>
        KAIT Solutionswe take delight in providing excellent customer service. We guarantee we don’t promise anything we can’t follow up on. We are honest and completely accountable with our clients.
        </p>
        <div className="flex items-center mb-4">
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gray-500"></div>
            <h2 className="text-2xl font-bold">VALUE</h2>
            <p>
              Our offshore development facilities in Pune afford us the flexibility to charge competitive prices for our quality work. Our near decade of specializations and expertise guarantee that  KAIT Solutions costs are the
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
              At KAIT Solutions, we are passionate about driving digital innovation and delivering transformative results for businesses of all sizes. Founded with a vision to bridge the gap between technology and business needs, we specialize in providing comprehensive digital marketing services that empower our clients to reach their full potential online.
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Our Mission: Our mission at KAIT Solutions is to empower businesses with innovative digital marketing solutions that drive growth, foster engagement, and create lasting value. We are dedicated to helping our clients navigate the ever-evolving digital landscape and achieve.</h3>
              <p className="mb-4">
              At KAIT Solutions, we believe in building long-term partnerships with our clients. Our commitment to excellence and customer satisfaction ensures that we are always striving to exceed expectations and deliver exceptional value.
              </p>
              <div className="w-full h-1 bg-gray-200 mb-8"></div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={about1} alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">WHY CHOOSE KAIT SOLUTIONS</h2>
          <p className="text-lg mt-4">
          KAIT Solutions offers tailored digital marketing strategies, an expert team with proven results, and innovative tools to boost your online presence. We focus on your success with a client-centric approach and a comprehensive range of services. Choose us for effective, growth-driven solutions.
          </p>
        </div>
        <BigCard />
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
          <p className="text-lg mt-4">Our Happy Clients!</p>
        </div>
        <div className="w-full h-1 bg-gray-200 mb-8"></div>
        
      </div>
      <div className="flex flex-wrap justify-center md:justify-start -mx-2">
      {reviews.map((review) => (
        <div key={review.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-start space-x-4">
            <img src={review.image} alt={review.shop} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-lg">{review.shop}</h3>
              <p className="text-gray-600">{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default About;
