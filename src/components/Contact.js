import React, { useState } from "react";
import questions from "../assets/data/question";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z]{3,7}$/.test(formData.name)) {
      formErrors.name =
        "Name must be between 3 and 7 characters and only contain alphabets";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email =
        "Please enter a valid email address (e.g., example@example.com)";
      isValid = false;
    }

    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile =
        "Mobile number must be exactly 10 digits and only contain numbers";
      isValid = false;
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.length > 20) {
      formErrors.subject = "Subject must not exceed 20 characters";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isVisible, setIsVisible] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleToggle = (id) => {
    if (currentId === id) {
      setIsVisible((prev) => !prev); 
    } else {
      setIsVisible(true); 
      setCurrentId(id); 
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 ">
      <div className="lg:flex justify-between items-center sm:items-start mb-6">
        <h2 className="text-xl lg:text-5xl font-semibold mb-4 sm:mb-0">
          Get in <span className="text-purple-500">Touch</span>
        </h2>
      </div>

      <div className="mb-6">
        <p className="text-xl text-gray-700 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
          I'm here to help if you're searching for a product designer to bring
          your idea to life or a design partner to help take your business to
          the next level.
        </p>
      </div>
      <div className="lg:flex flex-wrap gap-4">
        <button className="mb-4 lg:mb-0 sm:w-auto bg-purple-500 text-white shadow-md rounded-md px-4 py-4 font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-purple-200">
          <i className="fa-solid fa-phone-volume"></i> Book A Call
        </button>
        <button className="mt-2 lg:mt-0 sm:w-auto bg-white shadow-md rounded-md px-4 py-4 font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-purple-200 ">
          <i className="fa-regular fa-copy"></i> Copy Email
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-200 mt-20 p-6 sm:p-8 rounded-md shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-md text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-4 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-md text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-4 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-md text-gray-700">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className={`w-full px-4 py-4 border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-md text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                className={`w-full px-4 py-4 border ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-md text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500`}
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-wrap">
            <button
              type="submit"
              className="bg-purple-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 w-full flex items-center justify-center gap-2"
            >
              Send Message <i className="fa-solid fa-arrow-up-right-dots"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-20 max-w-4xl mx-auto h-64 md:h-96">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.35550560033!2d73.29941867448747!3d21.25739087988816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be071896e772cc5%3A0xfc3d273610a14d6a!2sVadilal%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1674631532476!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-20">
        <h3 className="text-xl lg:text-3xl font-bold mb-4 mb-10">
          Frequently Asked Questions
        </h3>

        <div>
          {questions.map(({ id, question, answer }) => (
            <div key={id} className="bg-gray-100 p-4 rounded-md mb-4 lg:mb-8 shadow-md hover:shadow-lg hover:shadow-purple-200">
              {" "}
              {/* Added mb-4 for gap between each question */}
              <div className="flex justify-between items-center">
                <h3
                  className={`cursor-pointer lg:text-xl ${
                    currentId === id ? "text-purple-500" : "text-black"
                  }`} // Text color change to purple on click
                  onClick={() => handleToggle(id)}
                >
                  {question}
                </h3>

                {/* Apply purple color to icon when selected */}
                <i
                  className={`fa-solid fa-plus bg-white p-2 cursor-pointer ${
                    currentId === id ? "text-purple-500" : "text-black"
                  }`}
                  onClick={() => handleToggle(id)}
                ></i>
              </div>
              {/* Hidden paragraph with smooth scroll effect */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  currentId === id && isVisible ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mt-2 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
