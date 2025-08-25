import React from 'react';

import home1 from '../assets/images/home1.jpg';
import ScrollingText from '../components/ScrollingText';

const Home = () => {
  const paragraphs = [
    {
      title: 'Transforming Learners into Industry Leaders',
      descp: `JSP is a leading software training institute bridging academic learning with industry needs. We offer expert-led, hands-on courses—from programming fundamentals to advanced engineering—designed to prepare students for real-world tech careers. Empower your future with JSP and step confidently into the software industry.`,
    },
    {
      title: 'Your Launchpad to a Future in Software Development',
      descp: `JSP delivers a transformative learning experience that empowers students with industry-ready software skills. With cutting-edge facilities, expert mentorship, and a dynamic learning community, we foster innovation and growth. Whether you're starting out or upskilling, JSP is your gateway to a thriving tech career.`,
    },
    {
      title: 'Empowering Futures Through Tech Education',
      descp: `At JSP, we harness the power of education to shape tomorrow’s technology leaders. Our evolving programs, focus on innovation, and vibrant learning community foster student success. Explore our courses and unlock your potential in software development. Together, we build a brighter future through education and technology.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-300 text-red-900 p-4">
      {/* Header */}
    <div >
      <ScrollingText />
   </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Text Cards */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          {/* Title */}
          <div className="text-2xl font-extrabold text-cyan-700 text-center mt-2">
            <p>LARGEST SOFTWARE</p>
            <p>TRAINING AND PLACEMENT CENTER</p>
          </div>

          {/* Paragraph Cards */}
          {paragraphs.map((text, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-gray-800 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-purple-700 mb-2 text-center">{text.title}</h3>
              <p className="leading-relaxed">{text.descp}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Centered Image */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img
            src={home1}
            alt="Home"
            className="max-w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
