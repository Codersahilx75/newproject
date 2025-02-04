import React, { useState } from "react";
import { projectData } from "../assets/data/projectData";

export default function Works() {
  // State to manage current page and image modal visibility
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const itemsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Get the page numbers to show (1, 2, 3, ... in a sliding manner)
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

  // Open the modal with the selected image
  const openModal = (image) => {
    setModalImage(image);
  };

  // Close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 ">
      <div className="lg:flex justify-between items-center sm:items-start mb-6">
        <h2 className="text-xl lg:text-3xl mb-4 sm:mb-0">
          Check Out My Latest <span className="text-purple-500">Projects</span>
        </h2>
      </div>

      <div className="mb-6">
        <p className="text-lg lg:text-xl text-gray-700 text-left">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
      </div>

      <div className="mt-20">
        {/* Display projects for the current page */}
        {projectData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((project) => (
            <div key={project.id} className="mb-10">
              {/* Image container with hover effect */}
              <div className="group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bg-gray-100 p-4 lg:p-10 rounded-md mb-4 cursor-pointer hover:shadow-lg hover:shadow-purple-200"
                  onClick={() => openModal(project.image)} // Open modal on image click
                />
              </div>

              {/* The rest of the content: title, description, and link */}
              <div className="lg:flex justify-between">
                <div className="space-y-2 mb-2">
                  <h2 className="text-xl lg:text-3xl font-semibold">{project.title}</h2>
                  <p className="lg:text-lg text-gray-600">{project.description}</p>
                </div>
                {/* Link to the project site */}
                <a href={project.link} className="underline">
                  Visit site
                </a>
              </div>
            </div>
          ))}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 items-center">
          {/* Previous Button */}
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

          {/* Show Dots and Pages */}
          {currentPage > 3 && <span className="mx-2 text-gray-600">...</span>}

          {/* Display page numbers */}
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

          {/* Next Button */}
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

      {/* Modal for showing image */}
      {modalImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-4 text-2xl text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

      <marquee className="bg-gray-100 p-4 rounded-md space-x-8 text-xl mt-10">
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
        <a href="/">Let's 👋 Work Together</a>
      </marquee>
    </div>
  );
}
