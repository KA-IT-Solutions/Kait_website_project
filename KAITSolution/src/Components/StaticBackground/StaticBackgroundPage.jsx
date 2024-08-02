import React from 'react';
import './StaticBackgroundPage.css';

const StaticBackgroundPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/banner1.jpg')" }}></div>
            <div className="relative z-10 p-6 bg-white bg-opacity-80 shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Static Background Page</h1>
                <p className="mb-4">This is a div over a static background image. The background image does not scroll with the content.</p>
                <img src="/path-to-your-div-image.jpg" alt="Div content" className="w-full h-auto mb-4" />
                <p>More content here...</p>
            </div>
        </div>
    );
};

export default StaticBackgroundPage;
