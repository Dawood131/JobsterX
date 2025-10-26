import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BuildResume from "./Pages/BuildResume";
import ResumePreview from "./Pages/ResumePreview";
import YourProfile from "./Pages/YourProfile";
import ChangePassword from "./Pages/ChangePass"
import Subscripticon from "./Pages/Subscription";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BuildResume />} />
        <Route path="/resume-preview" element={<ResumePreview />} />
        <Route path="/yourprofile" element={<YourProfile />} />
        <Route path="/changepass" element={<ChangePassword />} />
        <Route path="/subscription" element={<Subscripticon />} />
      </Routes>
    </Layout>
  );
}
