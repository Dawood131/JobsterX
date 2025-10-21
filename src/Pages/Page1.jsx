// pages/Page1.jsx
import React, { useState } from 'react'
import ResumeBuilder from '../components/ResumeBuilder'
import YourProgress from '../components/YourProgress'
import CountrySelector from '../components/CountrySelector'
import DownloadCard from '../components/DownloadCard'
import ATS from '../components/ATS'
import Modal from '../components/Model'
import ResumeJDScore from './ResumeJDScore'

const Page1 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8">
                <ResumeBuilder onOpenModal={() => setModalOpen(true)} />
                <YourProgress />
                <CountrySelector />
                <DownloadCard />
                <ATS />
            </div>

            {/* Modal */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ResumeJDScore />
            </Modal>
        </div>
    )
}

export default Page1
