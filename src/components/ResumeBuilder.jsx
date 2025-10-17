import React from "react";

export default function ResumeBuilder() {
  return (
    <div className="max-w-[960px] mx-auto">
      {/* Sidebar */}
      <div className="w-full md:w-[260px] flex-shrink-0 hidden md:block"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8">
        <header>
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h1 className="tw-fit mx-auto md:mx-0 text-[23px] sm:text-[24px] md:text-[26px] font-bold text-[#111827] leading-tight text-center md:text-left">
                  Resume Builder
                </h1>
                <p className="text-[12px] sm:text-[15px] md:text-[16px] mx-auto w-fit text-[#6B7280] leading-normal mt-1">
                  Create ATS-optimized resumes that get you noticed
                </p>
              </div>
              <button
                className="mt-3 md:mt-0 px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-[14px] rounded-xl bg-[#680eb1] text-white font-medium hover:bg-[#680eb1c9] transition w-[70%] sm:w-[50%] md:w-auto self-center md:self-auto"
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
