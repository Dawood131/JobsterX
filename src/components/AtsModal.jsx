import React, { useState } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

export default function AtsModal({ isOpen, onClose }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  if (!isOpen) return null;

  const handleAnalyze = () => {
    if (text.trim() === "") {
      setError("⚠️ Please paste your resume text before analyzing.");
      return;
    }
    setError("");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white shadow-xl w-full max-w-[700px] sm:w-[85%] md:w-[80%] lg:w-[51%] z-10 overflow-y-auto max-h-[90vh] border border-gray-200 rounded-l-xl p-4 sm:p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e1e1e]">
              Resume JD Score Analysis
            </h2>
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mt-2">
              Get your resume scored against job descriptions and ATS systems.
              Upload your resume to see how well it matches industry requirements
              and get optimization tips.
            </p>

            <h2 className="text-sm sm:text-[15px] font-bold text-[#1e1e1e] mt-3 mb-1">
              Paste Your Resume Content
            </h2>

            <textarea
              placeholder="Paste your current resume text here for AI Analysis..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-28 sm:h-36 border border-gray-300 rounded-lg p-2 sm:p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#f472b6] transition"
            ></textarea>

            {error && (
              <p className="text-red-500 text-sm font-medium -mt-0">{error}</p>
            )}

            <button
              onClick={handleAnalyze}
              className="w-full mt-3 px-5 py-2.5 bg-[#f03998] text-white text-sm sm:text-[15px] font-medium rounded-lg hover:bg-[#ec509c] active:scale-[0.98] transition cursor-pointer"
            >
              Analyze with AI
            </button>
          </div>

          {/* Top Score Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#eae5fd] border border-[#e6e1fb] rounded-xl p-4 flex flex-col items-start">
              <p className="text-sm text-[#680eb1] font-bold">
                ATS Compatibility Score
              </p>
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-xl sm:text-2xl font-bold text-[#680eb1] mr-2">70/100</p>
                <FaArrowTrendUp size={30} className="text-[#680eb1] -mt-6" />
              </div>
            </div>
            {/* Improvement Areas */}
            <div className="bg-[#eae5fd] border border-[#e6e1fb] rounded-xl p-4 flex flex-col items-start">
              <p className="text-sm text-[#680eb1] font-bold">Improvement Areas</p>
              <div className="flex items-center justify-between w-full mt-2">
                <p className="text-xl sm:text-2xl font-bold text-[#680eb1]">4</p>
                <AlertCircle size={30} className="text-[#680eb1] -mt-6" />
              </div>
            </div>
          </div>

          {/* Strength Areas */}
          <div className="bg-white border border-[#e8e8f3] rounded-xl p-4 sm:p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-[#680eb1] text-[16px] sm:text-[18px] mb-3">
              <GiCheckMark className="text-[#5B4DCC] -ml-1" size={18} />
              Strength Areas
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start"><GiCheckMark className="text-[#5B4DCC] mt-1 mr-2" size={10} />Strong professional experience section</li>
              <li className="flex items-start"><GiCheckMark className="text-[#5B4DCC] mt-1 mr-2" size={10} />Good use of action-oriented language</li>
              <li className="flex items-start"><GiCheckMark className="text-[#5B4DCC] mt-1 mr-2" size={10} />Clear career progression shown</li>
            </ul>
          </div>

          {/* Improvement Suggestions */}
          <div className="bg-white border border-[#e8e8f3] rounded-xl p-4 sm:p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-[#680eb1] text-[16px] sm:text-[18px] mb-3">
              <AlertCircle className="text-[#680eb1] -ml-1" size={25} />
              Improvement Suggestions
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start"><AlertCircle className="text-[#680eb1] mt-1 mr-2" size={16} />Add quantifiable achievements with metrics</li>
              <li className="flex items-start"><AlertCircle className="text-[#680eb1] mt-1 mr-2" size={16} />Include industry-specific keywords</li>
              <li className="flex items-start"><AlertCircle className="text-[#680eb1] mt-1 mr-2" size={16} />Use action verbs at the start of bullets</li>
              <li className="flex items-start"><AlertCircle className="text-[#680eb1] mt-1 mr-2" size={16} />Add relevant certifications or training</li>
            </ul>
          </div>

          {/* Recommended Keywords */}
          <div className="bg-white border border-[#e8e8f3] rounded-xl p-4 sm:p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-[#680eb1] text-[16px] sm:text-[18px] mb-3">
              <BsSearch className="text-[#680eb1]" size={25} />
              Recommended Keywords
            </h3>
            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              {["Project Management", "Leadership", "Strategic Planning", "Communication", "Time Management", "Problem Solving"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-[#eae5fd] border border-[#e3ddff] text-[#680eb1] rounded-full">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 sm:top-5 sm:right-5 sm:left-auto bg-[#5B4DCC] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-10">
          <CheckCircle size={20} />
          <span>AI Analysis Completed ✅</span>
        </div>
      )}
      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        @keyframes slide-in {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
