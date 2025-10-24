import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";

const DownloadCard = () => {
  const downloads = [
    { name: "IT Resume", file: "/sample.webp" },
    { name: "IT Resume", file: "/download (1).jpg" },
    { name: "IT Resume", file: "/sample.jpg" },
    { name: "IT Resume", file: "/download.jpg" },
    { name: "IT Resume", file: "/sample.jpg" },
  ];

  return (
    <section className='bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 sm:p-6 md:p-6 mb-6 max-w-[960px] mx-auto'>
      <div>
        <h2 className="text-[22px] font-bold text-[#3A0CA3] leading-tight">
          Resume Download History
        </h2>
        <p className='text-gray-600 text-xs sm:text-sm mt-1'>
          Track all your resume downloads with timestamps and formats
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6'>
        {downloads.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center'
          >
            <IoDocumentTextOutline className="text-5xl sm:text-6xl text-[#3A0CA3]" />
            <h6 className='text-gray-700 mt-1 text-center'>{item.name}</h6>
            <a href={item.file} download className='text-[#F72585] font-semibold text-xs mt-1'>
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DownloadCard;
