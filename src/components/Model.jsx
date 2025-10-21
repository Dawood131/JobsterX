// components/Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Light overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className="relative bg-white rounded-xl shadow-xl w-11/12 max-w-lg p-6 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 font-bold text-xl"
          aria-label="Close Modal"
        >
          ×
        </button>

        {/* Modal content */}
        {children}
      </div>
    </div>
  );
}
