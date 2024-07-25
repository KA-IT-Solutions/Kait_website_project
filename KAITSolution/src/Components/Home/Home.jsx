import React from 'react';
import './Home.css';
// import employee from './Home-images/employee.png';
import background from './Home-images/background.avif'

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4 home-container">
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
              <p>Building dynamic and responsive websites</p>
              <ul>
                <li>Customized Designs</li>
                <li>SEO Friendly</li>
                <li>Fast Loading</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Price</h3>
              <p>Affordable pricing for all services</p>
              <ul>
                <li>Competitive Rates</li>
                <li>Transparent Billing</li>
                <li>No Hidden Costs</li>
              </ul>
            </div>
          </div>
          <button className="bg-blue-500 text-white p-4 rounded-lg">Button</button>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <img
              src={background}
              alt="Image"
              className="w-full h-full object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }} // Clipping the image
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">Some Heading</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>Key feature one explained in detail.</li>
            <li>Another essential point described.</li>
            <li>Additional information or feature point.</li>
          </ul>
        </div>
      </div>
    </div>






    <div className="container mx-auto p-4 home-container">
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
              <p>Building dynamic and responsive websites</p>
              <ul>
                <li>Customized Designs</li>
                <li>SEO Friendly</li>
                <li>Fast Loading</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Price</h3>
              <p>Affordable pricing for all services</p>
              <ul>
                <li>Competitive Rates</li>
                <li>Transparent Billing</li>
                <li>No Hidden Costs</li>
              </ul>
            </div>
          </div>
          <button className="bg-blue-500 text-white p-4 rounded-lg">Button</button>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-72 h-72">
            <img
              src={background}
              alt="Image"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-full rounded-full bg-cover bg-center opacity-50 petal-overlay" style={{ backgroundImage: `url(${background})` }}></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">Some Heading</h2>
          <ul className="list-disc ml-4 mt-2">
            <li>Key feature one explained in detail.</li>
            <li>Another essential point described.</li>
            <li>Additional information or feature point.</li>
          </ul>
        </div>
      </div>
    </div>









      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/2">
            <div className="bg-sky-500 text-white p-4 mb-4">
              Some text with sky blue background
            </div>
            <h1 className="text-2xl font-bold mb-2">Heading</h1>
            <p className="mb-4">Description goes here.</p>
            <div className="bg-blue-900 text-white p-4 mb-4">
              Some text inside dark blue div
            </div>
            <div className="bg-yellow-500 p-4 mb-4">
              <h2 className="text-xl font-bold">Website Building</h2>
              <div className="bg-gray-300 p-4 mt-2">
                <p>Price</p>
                <ul className="list-disc list-inside">
                  <li className="border-b">Point 1</li>
                  <li className="border-b">Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4">
              Click Me
            </button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src="path/to/your/image.jpg"
              alt="Slanted Image"
              className="transform -rotate-12 mb-4"
            />
            <h2 className="text-xl font-bold">Some Heading</h2>
            <ul className="list-none">
              <li className="flex items-center">
                <span className="material-icons text-green-500">check</span>
                <span className="ml-2">Point 1</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-green-500">check</span>
                <span className="ml-2">Point 2</span>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-green-500">check</span>
                <span className="ml-2">Point 3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;


