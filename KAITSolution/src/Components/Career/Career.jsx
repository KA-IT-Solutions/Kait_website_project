import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import bannerImage from './banner.jpg'; // Adjust the path to your image file
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const internships = [
  { id: 1, course: 'Web Development', positions: 5, daysFromToday: 10, description: 'We are looking for individuals who are capable and eager to learn.' },
  { id: 2, course: 'App Development', positions: 3, daysFromToday: 25, description: 'Join our team and grow your skills in a dynamic environment.' },
  { id: 3, course: 'Data Science', positions: 4, daysFromToday: 40, description: 'Opportunities available for enthusiastic learners.' },
  { id: 4, course: 'Digital Marketing', positions: 2, daysFromToday: 55, description: 'Gain practical experience with our expert team.' },
  { id: 5, course: 'Java Developer', positions: 6, daysFromToday: 70, description: 'Intern with us and kickstart your career.' },
  { id: 6, course: 'Data Analysis', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
  { id: 7, course: 'Python Developer', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
];

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

const Career = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const timeoutId = setTimeout(() => {
      setVisibleCards(internships.map(() => true));
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const currentDate = new Date();

  return (
    <div className="min-h-screen">
   <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden" data-aos="fade-left">
        <img src={bannerImage } alt="Banner" className="w-full h-full object-cover" />
      </div>

      <div className="text-center mb-8 mt-8">
        <h1 className="text-4xl font-bold mb-2">Internship Opportunities</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
      </div>

      {/* <div className="flex flex-wrap -mx-4 justify-center">
        {internships.map((internship, index) => (
          <div
            key={internship.id}
            className={`px-4 mb-8 ${index === 1 || index === 3 ? 'lg:w-[550px]' : 'w-[500px]'}`} // Use conditional class for width
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={`shadow-lg rounded-lg p-6 flex flex-col justify-between h-[300px] card ${visibleCards[index] ? 'visible' : ''}`}>
              <h2 className="text-xl font-bold mb-4">{internship.course}</h2>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <FaUserAlt className="text-indigo-600 mr-2" />
                  <span>{internship.positions} Open Positions</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-indigo-600 mr-2" />
                  <span>{addDays(currentDate, internship.daysFromToday)}</span>
                </div>
              </div>
              <p className="mb-4 flex-grow">{internship.description}</p>
              <Link
                to="/applyform"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center -mx-4">
        {internships.map((internship, index) => (
          <div
            key={internship.id}
            className={`px-4 mb-8 w-[1000px]`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={`shadow-lg rounded-lg p-6 flex flex-col justify-between h-[300px] card ${visibleCards[index] ? 'visible' : ''}`}>
              <h2 className="text-xl font-bold mb-4">{internship.course}</h2>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <FaUserAlt className="text-indigo-600 mr-2" />
                  <span>{internship.positions} Open Positions</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-indigo-600 mr-2" />
                  <span>{addDays(currentDate, internship.daysFromToday)}</span>
                </div>
              </div>
              <p className="mb-4 flex-grow">{internship.description}</p>
              <Link
                to="/applyform"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Career;



// import React, { useEffect, useState } from 'react';
// import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
// import bannerImage from './banner.jpg'; // Adjust the path to your image file
// import 'react-calendar/dist/Calendar.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const internships = [
//   { id: 1, course: 'Web Development', positions: 5, daysFromToday: 10, description: 'We are looking for individuals who are capable and eager to learn.' },
//   { id: 2, course: 'App Development', positions: 3, daysFromToday: 25, description: 'Join our team and grow your skills in a dynamic environment.' },
//   { id: 3, course: 'Data Science', positions: 4, daysFromToday: 40, description: 'Opportunities available for enthusiastic learners.' },
//   { id: 4, course: 'Digital Marketing', positions: 2, daysFromToday: 55, description: 'Gain practical experience with our expert team.' },
//   { id: 5, course: 'Java Developer', positions: 6, daysFromToday: 70, description: 'Intern with us and kickstart your career.' },
//   { id: 6, course: 'Data Analysis', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
//   { id: 7, course: 'Python Developer', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
// ];

// const addDays = (date, days) => {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result.toISOString().split('T')[0];
// };

// const Career = () => {
//   const [visibleCards, setVisibleCards] = useState([]);

//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//     const timeoutId = setTimeout(() => {
//       setVisibleCards(internships.map(() => true));
//     }, 300);
//     return () => clearTimeout(timeoutId);
//   }, []);

//   const currentDate = new Date();

//   return (
//     <div className="min-h-screen">
//       <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
//         <img src={bannerImage} alt="Banner" className="w-full h-auto object-cover" />
//       </div>

//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-4xl font-bold mb-2">Internship Opportunities</h1>
//         <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
//       </div>

//       <div className="flex flex-wrap -mx-4 justify-center">
//         {internships.map((internship, index) => (
//           <div
//             key={internship.id}
//             className={`px-4 mb-8 ${index === 1 || index === 3 ? 'lg:w-[550px]' : 'w-[500px]'}`} // Use conditional class for width
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <div className={`shadow-lg rounded-lg p-6 flex flex-col justify-between h-[300px] card ${visibleCards[index] ? 'visible' : ''}`}>
//               <h2 className="text-xl font-bold mb-4">{internship.course}</h2>
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   <FaUserAlt className="text-indigo-600 mr-2" />
//                   <span>{internship.positions} Open Positions</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="text-indigo-600 mr-2" />
//                   <span>{addDays(currentDate, internship.daysFromToday)}</span>
//                 </div>
//               </div>
//               <p className="mb-4 flex-grow">{internship.description}</p>
//               <a
//                 href="https://forms.gle/your-google-form-link"
//                 className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export  default Career;
