import React, { useState } from "react";
import AtsModal from "./AtsModal";

export default function Modal({ isOpen, onClose }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [showATSModal, setShowATSModal] = useState(false);

  if (!isOpen && !showATSModal) return null;

  const handleAnalyze = () => {
    if (text.trim() === "") {
      setError("⚠️ Please paste your resume text before analyzing.");
      return;
    }
    setError("");
    setShowATSModal(true);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
          <div
            className="absolute inset-0 bg-black/40 transition-opacity duration-300"
            onClick={onClose}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-lg w-[90%] sm:w-[75%] md:w-[51%] p-5 sm:p-7 md:p-8 z-10 border border-gray-200 overflow-y-auto max-h-[90vh]">
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
              aria-label="Close Modal"
            >
              ×
            </button>

            <div className="text-left space-y-4">
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1e1e1e]">
                Resume JD Score Analysis
              </h2>

              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Get your resume scored against job descriptions and ATS systems.
                Upload your resume to see how well it matches industry
                requirements and get optimization tips.
              </p>

              <h2 className="text-[15px] font-bold text-[#1e1e1e] mb-1">
                Paste Your Resume Content
              </h2>

              <textarea
                placeholder="Paste your current resume text here for AI Analysis..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-36 border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F72585] transition"
              ></textarea>

              {error && (
                <p className="text-red-500 text-sm font-medium -mt-4">{error}</p>
              )}

              <button
                onClick={handleAnalyze}
                className="w-full px-5 py-2.5 bg-[#F72585] text-white text-sm sm:text-[15px] font-medium rounded-lg hover:bg-[#ee107b] active:scale-[0.98] transition cursor-pointer"
              >
                Analyze with AI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ATS Modal */}
      <AtsModal
        isOpen={showATSModal}
        onClose={() => setShowATSModal(false)}
      />
    </>
  );
}
