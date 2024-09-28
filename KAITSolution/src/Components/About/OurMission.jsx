// src/components/OurMission.jsx
import React, { useEffect, useState } from 'react';
import missionImage from '/service1_1.jpg'; // Replace with your image path

const OurMission = () => {
  const [displayText, setDisplayText] = useState('');
  const missionText = "Our mission is to provide the best cakes and cookies with the highest quality ingredients.";

  useEffect(() => {
    const letters = missionText.split('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < letters.length) {
        setDisplayText((prev) => prev + letters[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Change speed here (in milliseconds)

    return () => clearInterval(interval);
  }, [missionText]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="lg:w-1/2">
        <img src={missionImage} alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">{displayText}</p>
      </div>
    </div>
  );
};

export default OurMission;
