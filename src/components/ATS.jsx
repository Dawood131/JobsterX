import React from 'react';
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const ATS = () => {
    return (
        <section className='bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 sm:p-6 mb-6 max-w-[960px] mx-auto'>
            <div>
                <h2 className="text-[20px] font-bold text-[#680eb1] leading-tight">
                    ATS Optimization Tips
                </h2>
                <p className='text-gray-600 text-xs sm:text-sm mt-1'>
                    Make sure resume passes Applicant Tracking Systems
                </p>
            </div>

            {/* Do's and Don'ts */}
            <div className='flex flex-col md:flex-row gap-6 mt-4'>
                <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                        <TiTickOutline className='text-xl text-[#680eb1]' />
                        <h3 className='text-[#680eb1] font-bold'>Do's</h3>
                    </div>
                    <ul className='text-[13px] sm:text-sm text-gray-600 pl-6 list-disc flex flex-col gap-1'>
                        <li>Use standard section headings</li>
                        <li>Include relevant keywords from job descriptions</li>
                        <li>Save as PDF / Word formats</li>
                        <li>Use simple, clean formatting</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                        <RxCross2 className='text-xl text-[#680eb1]' />
                        <h3 className='text-[#680eb1] font-bold'>Don'ts</h3>
                    </div>
                    <ul className='text-[13px] sm:text-sm text-gray-600 pl-6 list-disc flex flex-col gap-1'>
                        <li>Avoid complex graphics or images</li>
                        <li>Don't use tables for layout</li>
                        <li>Avoid unusual fonts or symbols</li>
                        <li>Don't include personal photos</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default ATS;
