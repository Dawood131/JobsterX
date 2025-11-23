// components/ResumeBuilder.jsx
import React from "react";

export default function ResumeBuilder({ onOpenModal }) {
  return (
    <section className="bg-[#4361EE1A] max-w-[960px] mx-auto rounded-xl p-4 sm:p-6 md:p-3 md:-mt-5 mt-10 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
        <div className="flex-1">
          <h1 className="text-[23px] sm:text-[24px] md:text-[26px] font-bold text-[#111827] leading-tight text-center md:text-left">
            Resume Builder
          </h1>
          <p className="text-[10px] sm:text-[15px] md:text-[16px] text-[#5B5B5B] leading-normal mt-1 text-center md:text-left">
            Create ATS-optimized resumes that get you noticed
          </p>
        </div>

        <button
          onClick={onOpenModal}
          className="mt-4 md:mt-0 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-[14px] rounded-xl bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] hover:from-[#6909aa] transition-all duration-300 text-white font-medium w-full sm:w-auto md:w-auto cursor-pointer"
        >
          Get Your Resume JD Score
        </button>
      </div>
    </section>
  );
}
