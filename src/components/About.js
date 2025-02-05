import React, { useEffect, useRef } from "react";
import countData from "../assets/data/countdata";
import cardData from "../assets/data/cardData";
import educationData from "../assets/data/educationData";
import articleData from "../assets/data/articledata";

export default function About() {
  const articleSliderRef = useRef(null); // Ref for the article slider
  const cardSliderRef = useRef(null); // Ref for the card slider

  // Effect for the article slider
  useEffect(() => {
    const articleInterval = setInterval(() => {
      if (articleSliderRef.current) {
        articleSliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

        if (
          articleSliderRef.current.scrollLeft >=
          articleSliderRef.current.scrollWidth / 2
        ) {
          setTimeout(() => {
            articleSliderRef.current.scrollTo({ left: 0, behavior: "instant" });
          }, 500);
        }
      }
    }, 2000); // 2-second interval

    return () => clearInterval(articleInterval); // Cleanup the interval when the component is unmounted
  }, []);

  // Effect for the card slider
  useEffect(() => {
    const cardInterval = setInterval(() => {
      if (cardSliderRef.current) {
        cardSliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

        if (
          cardSliderRef.current.scrollLeft >=
          cardSliderRef.current.scrollWidth / 2
        ) {
          setTimeout(() => {
            cardSliderRef.current.scrollTo({ left: 0, behavior: "instant" });
          }, 500);
        }
      }
    }, 2000); // 2-second interval

    return () => clearInterval(cardInterval); // Cleanup the interval when the component is unmounted
  }, []);

  return (

    
    <div className=" bg-white shadow-md rounded-2xl p-6 sm:p-8 ">
      <div className="lg:flex justify-between items-center sm:items-start mb-6">
        <h2 className="text-xl lg:text-3xl mb-4 sm:mb-0">
          Hi, This is <span className="text-purple-500">Aashish Bhagwat</span>{" "}
          👋
        </h2>
        <h3 className="text-purple-500 bg-gray-100 p-4 lg:p-2 rounded-md flex items-center shadow-md  hover:shadow-lg hover:shadow-purple-200">
          <i className="fa-solid fa-circle text-sm mr-2 "></i>
          Available For Hire
        </h3>
      </div>
      <div className="mb-6">
        <p className="text-lg lg:text-xl text-gray-700 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          A Passionate Full Stack Developer, Social Media Manager 🖥️ & Product
          Designer. Co-founder of Creativehand, with a track record of helping
          brands establish their online presence and handling social media,
          available for hire.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row md:grid md:grid-cols-2 lg:flex lg:space-x-24">
        {countData.statistics.map((stat, index) => (
          <div key={index} className="text-left mb-6 sm:mb-0">
            <h3 className="text-3xl font-bold">{stat.count}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Card Section */}
      <div className="mt-10">
        <h3 className="text-xl lg:text-3xl font-bold mb-4">
          Trusted By 1200+ Clients
        </h3>

        {/* Card Carousel Section */}
        <div className="overflow-hidden">
          <div
            ref={cardSliderRef} // Ref for the card slider
            className="flex overflow-hidden space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {[...cardData, ...cardData].map((data, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md flex-shrink-0 w-full sm:w-1/3 mx-2 hover:shadow-lg hover:shadow-purple-200"
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

      {/* Education History Section */}
      <div className="mt-10">
        <h3 className="text-xl lg:text-3xl font-bold mb-4">
          Education History
        </h3>
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-md mb-4 hover:shadow-md hover:shadow-purple-200">
            <div className="sm:w-1/2">
              <h2 className="text-xl font-semibold">{edu.degree}</h2>
              <p className="text-gray-600">{edu.year}</p>
            </div>
            <div className="flex items-center sm:w-1/4">
              <i className={`fa-solid ${edu.icon} text-yellow-500 mr-2`}></i>
              <h5>{edu.gpa}</h5>
            </div>
            <h3 className="bg-white text-purple-500 py-2 rounded-md px-2">{edu.institution} <i className="fa-solid fa-arrow-right"></i></h3>
          </div>
        ))}
      </div>

      {/* Article Section */}
      <div className="mt-10">
        <h3 className="text-xl lg:text-3xl mb-4">Article and Publications</h3>

        {/* Article Carousel Section */}
        <div className="overflow-hidden">
          <div
            ref={articleSliderRef} // Ref for the article slider
            className="flex overflow-hidden space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {/* 🔄 Duplicate Cards for Infinite Effect */}
            {[...articleData, ...articleData].map((data, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/3 mx-2 ">
                {/* Image with zoom-out effect */}
                <div className="group">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-48 object-cover rounded-md  hover:shadow-lg card hover:shadow-purple-200"
                  />
                  {/* Button at the top-left corner, hidden by default and shown on hover */}
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bottom-2 left-2 bg-purple-500 text-white py-2 px-4 rounded-md text-sm hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-90"
                  >
                    {data.buttonText}
                  </a>
                </div>

                <h2 className="text-xl font-semibold hover:text-purple-500 mt-4">
                  {data.title}
                </h2>
                <p className="text-gray-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

           {/* Marquee Section */}
           <marquee className="bg-gray-100 p-4 rounded-md space-x-8 text-xl">
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
      </marquee>
    </div>
  );
}
