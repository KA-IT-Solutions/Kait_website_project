import React from 'react';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import bannerImage from './banner.jpg'; // Adjust the path to your image file
import 'react-calendar/dist/Calendar.css';

const internships = [
  { id: 1, course: 'Web Development', positions: 5, daysFromToday: 10, description: 'We are looking for individuals who are capable and eager to learn.' },
  { id: 2, course: 'App Development', positions: 3, daysFromToday: 25, description: 'Join our team and grow your skills in a dynamic environment.' },
  { id: 3, course: 'Data Science', positions: 4, daysFromToday: 40, description: 'Opportunities available for enthusiastic learners.' },
  { id: 4, course: 'Digital Marketing', positions: 2, daysFromToday: 55, description: 'Gain practical experience with our expert team.' },
  { id: 5, course: 'Java Devloper', positions: 6, daysFromToday: 70, description: 'Intern with us and kickstart your career.' },
  { id: 6, course: 'Data Analysis', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
  { id: 7, course: 'Python Devloper', positions: 1, daysFromToday: 85, description: 'Exciting internship opportunities available now.' },
];

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
};

const Career = () => {
  const currentDate = new Date();

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <img src={bannerImage} alt="Banner" className="w-full h-auto object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Career Opportunities</h1>
        </div>
      </div>

      <div className="text-center mb-8 mt-8">
        <h1 className="text-4xl font-bold mb-2">Internship Opportunities</h1>
        <div className="w-32 h-1 bg-indigo-600 mx-auto mb-6"></div>
      </div>

      <div className="flex flex-wrap -mx-4">
        {internships.map((internship) => (
          <div key={internship.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
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
              <p className="mb-4">{internship.description}</p>
              <a
                href="https://forms.gle/your-google-form-link" // Replace with your actual Google Form link
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
