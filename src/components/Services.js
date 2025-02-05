import React, { useState, useEffect, useRef } from "react";
import iconData from "../assets/data/iconData";
import imgData from "../assets/data/imgData";
import cardData from "../assets/data/cardData";
import educationData from "../assets/data/educationData";
import questions from "../assets/data/question";

export default function Services() {
  const [currentId, setCurrentId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          setTimeout(() => {
            sliderRef.current.scrollTo({ left: 0, behavior: "instant" });
          }, 500);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = (id) => {
    if (currentId === id) {
      setIsVisible(!isVisible);
    } else {
      setIsVisible(true);
      setCurrentId(id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 ">
      <div className="lg:flex justify-between sm:items-start mb-6">
        <h2 className="text-3xl font-semibold sm:text-left">Services</h2>
        <h3 className="text-purple-500 bg-gray-100 p-4 lg:p-2 rounded-md flex items-center shadow-md  hover:shadow-lg hover:shadow-purple-200">
          <i className="fa-solid fa-circle text-sm  mr-2"></i>
          Available For Hire
        </h3>
      </div>

      <p className="text-lg text-gray-700 max-w-3xl sm:text-left">
        Transforming Ideas into Innovative Reality, Elevate Your Vision with Our
        Expert Product Design and Development Services!
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {iconData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-200"
          >
            <i
              className={`fa-solid ${service.icon} text-6xl text-purple-400 mb-4 bg-white p-4 rounded-md transition-transform duration-300 group-hover:rotate-12`}
            ></i>
            <h2 className="text-center font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
              {service.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Technologies Worked Section */}
      <div className="mt-20">
        <h3 className="text-xl lg:text-3xl font-semibold mb-12">
          Worked In 20+ Technologies ✨ So Far
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-6 ">
          {imgData.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-16 h-12 lg:w-20 lg:h-20 object-contain rounded-lg shadow-md   hover:shadow-lg hover:shadow-purple-200"
            />
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-20">
        <h3 className="text-xl lg:text-3xl font-bold mb-6">
          Trusted By 1200+ Clients
        </h3>
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-hidden space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {[...cardData, ...cardData].map((data, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md flex-shrink-0 w-full sm:w-1/3 mx-2  hover:shadow-lg hover:shadow-purple-200 "
              >
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex space-x-2">
                    {Array(4)
                      .fill()
                      .map((_, idx) => (
                        <i
                          key={idx}
                          className={`fa-solid ${data.icon} ${data.iconColor} text-sm`}
                        ></i>
                      ))}
                  </div>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-bold bg-white text-purple-400 hover:bg-purple-500 hover:text-white p-2 rounded-md font-bold">
                      {data.title} <i className="fa-solid fa-arrow-right"></i>
                    </h2>
                  </a>
                </div>
                <p className="text-gray-700">{data.description}</p>
                <h2 className="text-lg">
                  {data.name} -{" "}
                  <span className="text-gray-500">{data.position}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="mt-20">
        <h3 className="text-xl lg:text-3xl font-bold mb-10">
          Awards and Recognitions
        </h3>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between bg-gray-50 shadow-md p-4 rounded-md mb-4  hover:shadow-lg hover:shadow-purple-200"
          >
            <div className="sm:w-1/2">
              <h2 className="text-xl font-semibold">{edu.degree}</h2>
              <p className="text-gray-600">{edu.year}</p>
            </div>
            <div className="flex items-center sm:w-1/4">
              <i className={`fa-solid ${edu.icon} text-yellow-500 mr-2`}></i>
              <h5>{edu.gpa}</h5>
            </div>
            <h3 className="bg-white text-purple-500 py-2 rounded-md px-2">
              {edu.institution} <i className="fa-solid fa-arrow-right"></i>
            </h3>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h3 className="text-xl lg:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h3>
        {questions.map(({ id, question, answer }) => (
          <div key={id} className="bg-gray-100 p-4 rounded-md mb-4 shadow-md hover:shadow-lg hover:shadow-purple-200">
            <div className="flex justify-between items-center ">
              <h3
                className={`cursor-pointer text-lg lg:text-xl ${
                  currentId === id ? "text-purple-500" : "text-black"
                }`}
                onClick={() => handleToggle(id)}
              >
                {question}
              </h3>
              <i
                className={`fa-solid fa-plus cursor-pointer ${
                  currentId === id ? "text-purple-500" : "text-black"
                }`}
                onClick={() => handleToggle(id)}
              ></i>
            </div>
            <p
              className={`transition-all duration-500 ${
                currentId === id && isVisible
                  ? "opacity-100 max-h-40"
                  : "opacity-0 max-h-0"
              }`}
            >
              {answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
