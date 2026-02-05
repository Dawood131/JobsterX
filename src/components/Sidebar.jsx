import { NavLink } from "react-router-dom";
import { X, FileText } from "lucide-react";
import { FiLogOut } from "react-icons/fi";
import { PiMedalMilitaryBold } from "react-icons/pi";
import { useRef, useState, useEffect } from "react";
import { FaCamera, FaTrashAlt, FaUpload } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

const menuLinks = [
  { to: "/", label: "Build your Resume" },
  { to: "/yourprofile", label: "Your Profile" },
  { to: "/changepass", label: "Change Password" },
  { to: "/subscription", label: "Subscription" },
];

export default function Sidebar({ isOpen, onToggle }) {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const [image, setImage] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  // Load image from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("profileImage");
    if (saved) setImage(saved);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    };
    if (showOverlay) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showOverlay]);

  //  API  
  const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const response = await fetch("https://dev-portalapi.jobsterx.com/api/users/profile/image", {
        method: "POST",
        body: formData,
        // headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Image uploaded successfully:", data);
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG or JPG allowed");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setImage(dataUrl);
      localStorage.setItem("profileImage", dataUrl);
      setShowOverlay(false);

      // Upload to API
      uploadProfileImage(file);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setImage(null);
    localStorage.removeItem("profileImage");
    setShowOverlay(false);
  };

  const handleTakePhoto = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      alert("Camera not available or permission denied");
      setShowCamera(false);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    setImage(dataUrl);
    localStorage.setItem("profileImage", dataUrl);
    stopCamera();
    setShowOverlay(false);

    // Convert dataURL to file and upload
    fetch(dataUrl)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "profile.png", { type: "image/png" });
        uploadProfileImage(file);
      });
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
    }
    setShowCamera(false);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) onToggle();
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-70 bg-white shadow-lg z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
          </div>
          <button
            onClick={onToggle}
            className="md:hidden text-gray-700 p-1 rounded-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 relative">
          {/* Profile Section */}
          <div className="relative flex flex-col items-center">
            {/* Profile Photo */}
            <div
              className="relative w-28 h-28 rounded-full overflow-hidden shadow-md cursor-pointer"
              onClick={() => setShowOverlay((prev) => !prev)}
            >
              {image ? (
                <img src={image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-6xl">
                  <BsPersonFill />
                </div>
              )}

              {/* Hover overlay */}
              {!showOverlay && (
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaCamera className="text-white text-3xl" />
                  <span className="text-white text-sm font-semibold text-center block leading-tight">
                    {image ? "Change Profile Photo" : "Add Profile Photo"}
                  </span>
                </div>
              )}

            </div>

            {/* Name */}
            <h2 className="text-xl font-bold mt-2">Dawood Butt</h2>
            <p className="text-sm text-gray-500">buttdaud94@gmail.com</p>

            {/* Premium / Level */}
            <div className="flex justify-center gap-2 mt-2">
              <span className="px-3 py-1 text-xs font-semibold bg-[#4361EE] hover:bg-[#2046f0] cursor-pointer text-white rounded-full">
                Premium
              </span>
              <span className="px-2 py-1 text-xs border border-gray-300 rounded-full cursor-pointer">
                Level Professional
              </span>
            </div>

            {/* Floating Buttons Frame */}
            {showOverlay && (
              <div
                ref={overlayRef}
                className="absolute bottom-0 -right-5 flex flex-col gap-2 bg-gray-800/90 p-2 rounded shadow-lg z-50 min-w-[150px]"
              >
                <button
                  onClick={handleTakePhoto}
                  className="flex items-center justify-center gap-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
                >
                  <FaCamera /> Take Photo
                </button>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="flex items-center justify-center gap-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
                >
                  <FaUpload /> {image ? "Change Photo" : "Upload Photo"}
                </button>
                {image && (
                  <button
                    onClick={handleRemove}
                    className="flex items-center justify-center gap-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm"
                  >
                    <FaTrashAlt /> Remove Photo
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Progress Bars & Activity */}
          <div className="space-y-3 mt-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-gray-800">Profile</p>
                <span className="text-xs font-semibold text-[#4361EE]">85%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] h-2 rounded"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-gray-800">Next Level</p>
                <span className="text-xs font-semibold text-[#4361EE]">Expert</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] h-2 rounded w-2/3" />
              </div>
            </div>

            {/* Activity Status */}
            <div className="mt-2 text-center">
              <NavLink
                to="/activity"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-xs font-medium hover:underline ${isActive
                    ? "text-white bg-[#3A0CA3] px-2 py-1 rounded"
                    : "text-[#3A0CA3]"
                  }`
                }
              >
                Activity Status
              </NavLink>
            </div>
            <div className="border-t border-gray-400 w-11/12 mx-auto mt-2" />
          </div>

          {/* Menu Links */}
          <nav className="space-y-2 mt-4">
            {menuLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-lg ${isActive
                    ? "bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] text-white"
                    : "hover:bg-purple-200"
                  }`
                }
              >
                <FileText size={18} /> <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-4 space-y-2 text-center">
            <button className="w-full flex justify-between items-center px-4 py-2 bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] hover:from-[#6909aa] text-white rounded-lg">
              <span className="flex items-center gap-1">
                <PiMedalMilitaryBold /> Streak
              </span>
              <span className="text-sm font-semibold">7 days</span>
            </button>
            <p className="text-xs text-gray-500">Member since Jan 2024</p>
            <NavLink
              to="/logout"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-1 text-xs font-medium text-red-600 hover:underline mx-auto px-2 py-1 rounded"
            >
              <FiLogOut /> Sign Out
            </NavLink>
          </div>
        </div>
      </aside>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Camera modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50 p-4">
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              className="rounded-lg shadow-lg w-80 h-60 object-cover"
            />
            <button
              onClick={stopCamera}
              className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-white hover:bg-red-500"
            >
              X
            </button>
          </div>
          <button
            onClick={capturePhoto}
            className="text-xs sm:text-sm px-3 py-2 flex justify-center items-center gap-1 bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] hover:from-[#6909aa] transition-all duration-300  text-white rounded w-full sm:w-auto cursor-pointer mt-4"
          >
            Capture
          </button>
        </div>
      )}
    </>
  );
}
