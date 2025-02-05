import React from "react";
import img from "../assets/img/profile.png";

export default function Fixcontent() {
  return (
    <div className=" mx-auto">
      <div className="bg-white rounded-md   h-[63vh] md:h-[40vh] lg:h-[77vh] w-full sm:w-[90%] md:w-[80%] mb-6 lg:mb-2 lg:w-[350px] hover:shadow-lg hover:shadow-purple-300">
        <div className="px-4 py-2">
          {/* Profile Image */}
          <img src={img} alt="Profile" className="w-50% h-50% mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Aashish Bhagwat 👋</h2>
          <p className="text-gray-600 text-base">
            A Passionate{" "}
            <span className="font-bold text-black">Full Stack Developer</span>{" "}
            🖥️ & <span className="font-bold text-black">Product Designer</span>{" "}
            having <span className="font-bold text-black"> 7 years</span> of
            Experience in 20+ Technologies so far.
          </p>
        </div>

        {/* Contact Methods Section */}
        <div className="flex space-x-4 mb-6 px-4">
          {/* Call */}
          <div className="flex items-center space-x-2 bg-purple-600 text-white p-2 rounded-md w-28 justify-center hover:bg-purple-500  cursor-pointer ">
            <i className="fa-solid fa-phone text-xl"></i>
            <span className="text-xl">Call</span>
          </div>
          {/* WhatsApp */}
          <div className="flex items-center space-x-2 bg-white shadow-md p-2 rounded-md w-28 justify-center hover:bg-gray-100 cursor-pointer ">
            <i className="fa-brands fa-whatsapp text-3xl"></i>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-2 bg-white shadow-md p-2 rounded-md w-28 justify-center hover:bg-gray-100 cursor-pointer ">
            <i className="fa-regular fa-envelope text-xl"></i>
            <span>Email</span>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="pb-4 px-4">
          <ul className="flex flex-wrap gap-4  text-xl">
            <li className="bg-white rounded-md border-2 border-transparent px-3 py-2 shadow-md text-gray-600  hover:text-purple-600">
              <i className="fa-brands fa-facebook" />
            </li>
            <li className="bg-white rounded-md border-2 border-transparent px-3 py-2 shadow-md text-gray-600  hover:text-purple-600">
              <i className="fa-brands fa-instagram" />
            </li>
            <li className="bg-white rounded-md border-2 border-transparent px-3 py-2 shadow-md text-gray-600  hover:text-purple-600">
              <i className="fa-brands fa-github" />
            </li>
            <li className="bg-white rounded-md border-2 border-transparent px-3 py-2 shadow-md text-gray-600  hover:text-purple-600">
              <i className="fa-brands fa-linkedin-in" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
