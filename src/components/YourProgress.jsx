import React from "react";
import { LuEye } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
import { PiSealCheckLight } from "react-icons/pi";

export default function ResumeProgress() {
  const completion = "85";

  return (
    <section className="bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 sm:p-6 md:p-6 mb-6 max-w-[960px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h2 className="text-[20px] font-bold text-[#680eb1] leading-tight">
            Your Resume Progress
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Complete all sections for best ATS compatibility
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2 mt-2">
          <button className="text-xs sm:text-sm px-3 py-2 flex justify-center items-center gap-1 bg-[#765bec] text-white rounded hover:bg-[#765bece0] transition w-full sm:w-auto">
            <LuEye />
            Preview Resume
          </button>
          <button className="text-xs sm:text-sm px-3 py-2 flex justify-center items-center gap-1 bg-[#680eb1] text-white rounded hover:bg-[#5a1bc0] transition w-full sm:w-auto">
            <FaPenToSquare />
            Generate Resume
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#5a1bc0]">
          <div>Completion: {completion}%</div>
        </div>

        <div className="mt-5 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-2 bg-[#680eb1] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${completion}%` }}
          />
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Personal Info
          </div>
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Experience
          </div>
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Education
          </div>
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Skills
          </div>
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Projects
          </div>
          <div className="flex items-center gap-2 font-bold text-[#680eb1]">
            <PiSealCheckLight className="text-xl" />
            Certificates
          </div>
        </div>
      </div>
    </section>
  );
}
