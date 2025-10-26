// AppLayout.jsx
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header (mobile only) */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-">{children}</main>
      </div>
    </div>
  );
}
