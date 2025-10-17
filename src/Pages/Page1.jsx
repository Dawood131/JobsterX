import React from 'react'
import ResumeBuilder from '../components/ResumeBuilder'
import YourProgress from '../components/YourProgress'
import CountrySelector from '../components/CountrySelector'
import DownloadCard from '../components/DownloadCard'
import ATS from '../components/ATS'

const Page1 = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="hidden lg:block w-[260px]"></div>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8">
                <ResumeBuilder />
                <YourProgress />
                <CountrySelector />
                <DownloadCard />
                <ATS />
            </div>
        </div>


    )
}

export default Page1