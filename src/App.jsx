import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Page1 from "./Pages/Page1";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </Layout>
  );
}
