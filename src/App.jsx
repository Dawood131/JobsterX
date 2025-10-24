import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BuildResume from "./Pages/BuildResume";
import ResumePreview from "./Pages/ResumePreview";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BuildResume />} />
        <Route path="/resume-preview" element={<ResumePreview />} /> 
      </Routes>
    </Layout>
  );
}
