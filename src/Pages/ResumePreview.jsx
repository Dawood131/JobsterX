import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ResumePreview() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-12 sm:py-10 bg-gray-50 min-h-screen font-['Montserrat']">
      <div className="w-full max-w-[900px] flex flex-col sm:flex-row justify-between items-center sm:items-center mb-6 gap-4">
        <h2 className="text-[#3A0CA3] text-lg sm:text-xl font-semibold">
          Resume Preview
        </h2>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white rounded-lg bg-[#F72585] hover:bg-[#d62373] transition-all duration-300">
            <FaPenToSquare size={16} />
            Edit Resume
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#5B5B5B] rounded-lg hover:bg-[#2b2a2a] transition-all duration-300"
          >
            <IoClose size={18} />
            Close Preview
          </button>
        </div>
      </div>

      {/*Resume Card*/}
      <div className="w-full max-w-[900px] bg-white shadow-md rounded-xl p-6 sm:p-8 md:p-10 border border-gray-200">
        {/* Name & Contact */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-900">
          Sameer Saleem
        </h1>
        <p className="text-center text-gray-800 mt-2 text-sm sm:text-[17px] font-semibold">
          +971 1234567 - Dubai <br />
          <span>sameersaleem/in/linkedin</span> - jobsterx.com
        </p>

        {/* Professional Summary */}
        <section className="mt-8">
          <div className="border-t border-gray-300"></div>
          <h3 className="font-bold pb-1 mb-1 text-gray-900 mt-5">
            PROFESSIONAL SUMMARY
          </h3>
          <div className="border-t border-gray-300 mt-3 mb-5"></div>
          <p className="text-gray-700 text-sm sm:text-[14px] leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="text-sm sm:text-[14px]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <p className="font-semibold text-gray-800 ">
                Senior Software Engineer - TechCorp Inc.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-0">
                2022-01 – Present | San Francisco, CA
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Led development of microservices serving 1M+ users.</li>
              <li>Mentored junior developers and conducted code reviews.</li>
              <li>Reduced latency by 40% through optimization initiatives.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            EDUCATION
          </h3>
          <div className="flex justify-between text-sm sm:text-[14px] text-gray-700">
            <p className="font-semibold">Bachelor of Science in Computer Science</p>
            <p className="text-xs sm:text-sm mt-1">2016–2020 | GPA: 3.8</p>
          </div>
          <p className="text-sm sm:text-[14px] text-gray-700">University of California, Berkeley, CA</p>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            TECHNICAL SKILLS
          </h3>
          <p className="text-sm sm:text-[14px] text-gray-700">
            JavaScript, Node.js, React, Tailwind CSS
          </p>
        </section>
        {/* Projects */}
        <section className="mt-8">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            PROJECTS
          </h3>

          <div className="space-y-5">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  ABC Project
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-0">
                  2025-01 - 2025-8
                </p>
              </div>
              <p className="text-sm sm:text-[14px] text-gray-700 mt-1">
                Dummy text
              </p>
              <p className="text-sm sm:text-[14px] text-gray-700 mt-1">
                <strong>Technologies:</strong> Logic, React
              </p>
              <p className="text-sm sm:text-[14px] text-gray-700 mt-1">
                <strong>URL:</strong> p1 0w &nbsp;|&nbsp; <strong>GitHub:</strong> ub1121
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-8">
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            CERTIFICATIONS
          </h3>
          <div className="text-sm sm:text-[14px] text-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <p className="font-semibold text-gray-900">AWS</p>
              <div className="text-right">
                <p className="text-gray-600 text-xs sm:text-sm">2024</p>
                <p className="text-gray-600 text-xs sm:text-sm">Expires: 2025-08</p>
              </div>
            </div>
            <p className="-mt-8 sm:-mt-5">Amazon</p>
            <p>
              <strong>ID:</strong> abc123456
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
