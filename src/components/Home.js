import React, { useState } from "react";
import logo1 from "../assets/img/logo1.png";
import wipro from "../assets/img/wipro.png";
import tudip from "../assets/img/tudip.png";
import expertAreas from "../assets/data/newdata";
import banner1 from "../assets/img/1.png";
import banner2 from "../assets/img/2.png";
import banner3 from "../assets/img/3.png";
import banner4 from "../assets/img/4.png";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

  const openModal = (image) => {
    setSelectedImage(image); // Set the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image
  };

  

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 ">
        {/* Left Column */}
        <div className="flex-1 flex flex-col space-y-6 lg:space-y-8 ">
          {/* My Journey */}
          <div className="bg-white shadow-md rounded-2xl px-4 py-8 md:px-10 md:py-12 hover:shadow-xl hover:shadow-purple-200">
            <h2 className="text-xl font-bold mb-4">My Journey</h2>
            <div className="w-full lg:h-[300px] aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/gmIP1sXM1Wc"
                title="My Journey Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white shadow-md rounded-2xl px-2 py-6 md:px-10 md:py-12 flex flex-col space-y-6 mt-4 flex-grow hover:shadow-xl hover:shadow-purple-200">
            <h2 className="text-2xl font-bold md:text-left">Work Experience</h2>
            <div>
              {[{year: "2022 - 2025", logo: logo1, company: "CreativeHand", position: "CTO | Co-Founder"},
                {year: "2022 - 2023", logo: wipro, company: "Wipro", position: "Full Stack Developer"},
                {year: "2017 - 2022", logo: tudip, company: "Tudip Technologies", position: "Full Stack Developer"}
              ].map((experience, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 py-4 border-b border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <h3 className="text-lg font-medium text-gray-700">
                      {experience.year}
                    </h3>
                  </div>
                  <div className="flex flex-1 items-center space-x-4">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} Logo`}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {experience.company}
                      </h3>
                      <p className="text-gray-500 text-md">
                        {experience.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Expert Area */}
          <div className="bg-white shadow-md rounded-2xl mt-4 px-6 py-8 lg:py-28 flex-grow hover:shadow-xl hover:shadow-purple-200">
            <h2 className="text-xl font-bold mb-4">My Expert Area</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {expertAreas.map((area) => (
                <div
                  key={area.id}
                  className="flex flex-col items-center bg-gray-100  p-4 rounded-2xl shadow-md hover:shadow-xl hover:shadow-purple-200"
                >
                  <img
                    src={area.imgSrc}
                    alt={area.name}
                    className="w-10 h-10 object-cover rounded-full mb-2"
                  />
                  <h3 className="text-sm font-medium">{area.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 ">
          <div className="flex justify-between flex-wrap bg-white shadow-md rounded-2xl hover:shadow-xl hover:shadow-purple-200 p-8">
            <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
            <h2 className="underline text-purple-600 cursor-pointer">
              All Projects <i className="fa-solid fa-arrow-right"></i>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-6">
            {[{src: banner1, alt: "Project 1", href: "https://indistays.com/home", name: "Visit Indistays"},
              {src: banner2, alt: "Project 2", href: "https://www.e8matrix.com/", name: "Visit E8 Matrix"},
              {src: banner3, alt: "Project 3", href: "https://infixlogistics.com/home", name: "Visit Infix Logistics"},
              {src: banner4, alt: "Project 4", href: "https://chromewebstore.google.com/detail/linkedin-auto-commenter/pagjldpgebbhhfekjghppoajdmdhbpee", name: "Visit LinkedIn Auto Commenter"}
            ].map((banner, index) => (
              <div key={index} className=" group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-purple-200  ">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-auto rounded-2xl cursor-pointer hover:shadow-xl hover:shadow-purple-200 "
                  onClick={() => openModal(banner.src)} // Open modal on image click
                />
                <a
                  href={banner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-purple-600 text-white px-3 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
                >
                  {banner.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected Project"
              className="w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2"
              onClick={closeModal}
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
