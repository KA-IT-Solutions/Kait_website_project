import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="bg-sky-500 p-4 rounded-lg">
          <p>Text with background color</p>
        </div>
        <h2 className="text-2xl font-bold">Heading</h2>
        <p>Description</p>
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          Dark blue div with text
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-300 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Website Building</h3>
            <p>Price</p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Another Card</h3>
            <p>Price</p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
        </div>
        <button className="bg-blue-500 text-white p-4 rounded-lg">Button</button>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2">
        <img src="your-image.jpg" alt="Image" className="transform rotate-12" />
        <h2 className="text-2xl font-bold">Heading</h2>
        <ul className="list-disc">
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
