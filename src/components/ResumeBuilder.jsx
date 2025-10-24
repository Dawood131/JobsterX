// components/ResumeBuilder.jsx
import React from "react";

export default function ResumeBuilder({ onOpenModal }) {
  return (
    <div className="max-w-[960px] mx-auto">
      <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 md:-mt-12 mt-6">
        <header>
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h1 className="tw-fit mx-auto md:mx-0 text-[23px] sm:text-[24px] md:text-[26px] font-bold text-[#111827] leading-tight text-center md:text-left">
                  Resume Builder
                </h1>
                <p className="text-[10px] sm:text-[15px] md:text-[16px] mx-auto w-fit text-[#5B5B5B] leading-normal mt-1">
                  Create ATS-optimized resumes that get you noticed
                </p>
              </div>

              {/* Button triggers modal */}
              <button
                onClick={onOpenModal}
                className="mt-1 md:mt-0 px-3 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-[14px] rounded-xl bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] hover:from-[#6909aa] transition-all duration-300 text-white font-medium  w-[110%] sm:w-[50%] md:w-auto self-center md:self-auto mb-3 cursor-pointer"
              >
                Get Your Resume JD Score
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
