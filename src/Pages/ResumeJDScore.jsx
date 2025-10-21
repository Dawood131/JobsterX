// pages/ResumeJDScore.jsx
import React, { useState } from "react";

export default function ResumeJDScore() {
  const [resumeText, setResumeText] = useState("");

  const handleAnalyze = () => {
    alert("Analyzing Resume...\n\n" + resumeText);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Resume JD Score Analysis</h2>
      <p className="text-sm text-gray-600">
        Get your resume scored against job descriptions and ATS systems. Upload your resume to see how well it matches industry requirements and get optimization tips.
      </p>

      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your current resume text here for AI Analysis..."
        className="w-full border rounded p-2 h-32"
      />

      <button
        onClick={handleAnalyze}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Analyze with AI
      </button>
    </div>
  );
}
