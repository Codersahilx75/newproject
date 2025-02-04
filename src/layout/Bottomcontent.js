import React from "react";

export default function Bottomcontent() {
  return (
    <div className="lg:flex gap-4 mt-10">
      {/* Left Section with More Width */}
      <div className="bg-white shadow-md rounded-2xl p-6 lg:w-3/4 w-full">
        {/* Services Header */}
        <div className="flex justify-between items-center text-purple-400 mb-6">
          <h2 className="text-lg lg:text-2xl font-semibold">Services</h2>
          <p className="underline cursor-pointer">
            See All Services <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>

        {/* Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:shadow-lg hover:bg-purple-100 transition-all duration-300 group">
            <i className="fa-solid fa-desktop text-6xl text-purple-400 mb-4 bg-white p-4 rounded-md group-hover:rotate-12 transition-transform duration-300"></i>
            <h2 className="text-center font-medium group-hover:text-purple-600 transition-colors duration-300">
              Web Development
            </h2>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:shadow-lg hover:bg-purple-100 transition-all duration-300 group">
            <i className="fa-brands fa-uikit text-6xl text-purple-400 mb-4 bg-white p-4 rounded-md group-hover:rotate-12 transition-transform duration-300"></i>
            <h2 className="text-center font-medium group-hover:text-purple-600 transition-colors duration-300">
              UI/UX Design
            </h2>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:shadow-lg hover:bg-purple-100 transition-all duration-300 group">
            <i className="fa-solid fa-mobile-screen text-6xl text-purple-400 mb-4 bg-white p-4 rounded-md group-hover:rotate-12 transition-transform duration-300"></i>
            <h2 className="text-center font-medium group-hover:text-purple-600 transition-colors duration-300">
              Mobile App
            </h2>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg hover:shadow-lg hover:bg-purple-100 transition-all duration-300 group">
            <i className="fa-solid fa-diagram-predecessor text-6xl text-purple-400 mb-4 bg-white p-4 rounded-md group-hover:rotate-12 transition-transform duration-300"></i>
            <h2 className="text-center font-medium group-hover:text-purple-600 transition-colors duration-300">
              Product Design
            </h2>
          </div>
        </div>
      </div>

      {/* Right Section with Less Width */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-4 lg:mt-0 lg:w-1/4 w-full">
        <div className="moving-text-container bg-gray-100 rounded-md p-2 overflow-hidden">
          <h2 className="moving-text">
            "Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For
            Hire 🚀 Crafting Digital Experiences 🎨"
          </h2>
        </div>

        <div className="mt-12">
          <h2 className="lg:text-5xl text-3xl font-bold mb-6">
            Let's👋 Work Together
          </h2>
          <p className="underline cursor-pointer text-blue-500 text-base sm:text-xl">
            Reach Out To Me
          </p>
        </div>
      </div>
    </div>
  );
}
