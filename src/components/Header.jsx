import React from "react";

export default function Header({ onMenuClick }) {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-30 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Button - Left */}
        <button
          onClick={onMenuClick}
          className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md text-2xl"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        {/* Logo - Right */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
}
