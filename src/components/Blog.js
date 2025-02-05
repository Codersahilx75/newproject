import React, { useState } from "react";
import { projectData } from "../assets/data/projectData";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage === 1) {
        pageNumbers.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 ">
      <div className="lg:flex justify-between sm:items-start mb-6">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4 sm:mb-0 sm:text-left">
          My Recent Article and Publications
        </h2>
      </div>

      <div className="mb-6">
        <p className="text-lg lg:text-xl text-gray-700 text-left">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projectData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((project) => (
            <div
              key={project.id}
              className="mb-10 flex flex-col items-center w-full  "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover mb-4 rounded-xl  hover:shadow-xl hover:shadow-purple-200"
              />

              <div className="lg:flex justify-between w-full">
                <div className="space-y-2 mb-2">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="lg:text-md text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8 items-center">
        <button
          onClick={previousPage}
          className={`mx-2 px-4 py-2 sm:px-3 sm:py-1 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-500 text-white"
          }`}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-angles-left"></i>
        </button>
        {currentPage > 3 && <span className="mx-2 text-gray-600">...</span>}
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => paginate(pageNumber)}
            className={`mx-2 px-4 py-2 sm:px-3 sm:py-1 rounded-lg ${
              currentPage === pageNumber
                ? "bg-purple-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages - 2 && (
          <span className="mx-2 text-gray-600">...</span>
        )}
        <button
          onClick={nextPage}
          className={`mx-2 px-4 py-2 sm:px-3 sm:py-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-500 text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}
