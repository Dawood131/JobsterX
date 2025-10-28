import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { BsShieldLock } from "react-icons/bs";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showToast, setShowToast] = useState(false);

  const validatePassword = (password) => {
    const rules = [
      { regex: /.{8,}/, message: "Use at least 8 characters" },
      { regex: /[A-Z]/, message: "Include uppercase letters" },
      { regex: /[a-z]/, message: "Include lowercase letters" },
      { regex: /[0-9]/, message: "Add numbers" },
      { regex: /[!@#$%^&*(),.?\":{}|<>]/, message: "Add special characters" },
    ];
    const failed = rules.filter((rule) => !rule.regex.test(password));
    return failed.map((rule) => rule.message);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const newPasswordErrors = validatePassword(newPassword);
    let sameAsCurrentError = "";
    if (currentPassword && newPassword === currentPassword) {
      sameAsCurrentError = "New password cannot be same as current password";
    }

    const confirmError =
      newPassword !== confirmPassword ? "Passwords do not match" : "";

    setErrors({
      newPassword: [...newPasswordErrors, sameAsCurrentError]
        .filter(Boolean)
        .join(", "),
      confirmPassword: confirmError,
    });

    if (newPasswordErrors.length === 0 && !confirmError && !sameAsCurrentError) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setErrors({ newPassword: "", confirmPassword: "" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 md:mt-0 mt-12">
      {/* Heading */}
      <div className="w-full max-w-[960px] text-center mb-2">
        <h1 className="text-[25.59px] font-bold text-gray-800">
          Change Password
        </h1>
        <p className="text-black font-normal text-[15.35px] mt-1">
          Update your password to keep your account secure
        </p>
      </div>

      {/* Password Security Tips */}
      <div className="bg-white w-full max-w-[960px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 sm:p-6 md:p-6 mb-6 mt-1">
        <h3 className="text-[20px] font-bold text-black mb-4 sm:mb-6 flex items-center gap-x-4 sm:gap-x-6">
          <BsShieldLock size={24} className="text-[#3A0CA3]" /> Password Security Tips
        </h3>
        <ul className="list-disc list-inside text-[#4361EE] space-y-1 sm:space-y-2 ml-6 sm:ml-20 text-[10px] sm:text-[14px] font-medium">
          <li>Use at least 8 characters</li>
          <li>Include uppercase and lowercase letters</li>
          <li>Add numbers and special characters</li>
          <li>Avoid common words or patterns</li>
        </ul>
      </div>

      {/* Password Form */}
      <div className="bg-white w-full max-w-[960px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-4 sm:p-6 md:p-6 mb-6 space-y-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-[20px] font-bold text-black">
            Update Password
          </h2>
          <p className="text-gray-600 text-xs sm:text-[12px] mt-1 font-medium">
            Enter your current password and choose a new one
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4 sm:space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-black text-xs sm:text-[16px] font-semibold mb-1">
              Current Password
            </label>
            <div className="relative w-full h-[42px] sm:h-[44px]">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full h-full border border-gray-300 rounded-lg px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400 text-xs sm:text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showCurrent ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-black text-xs sm:text-[16px] font-semibold mb-1">
              New Password
            </label>
            <div className="relative w-full h-[42px] sm:h-[44px]">
              <input
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full h-full border border-gray-300 rounded-lg px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400 text-xs sm:text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showNew ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-600 text-xs mt-1">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-black text-xs sm:text-[16px] font-semibold mb-1">
              Confirm New Password
            </label>
            <div className="relative w-full h-[42px] sm:h-[44px]">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-full border border-gray-300 rounded-lg px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400 text-xs sm:text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Update Button */}
          <div className="flex justify-center">
            <button className="px-4 sm:px-8 py-2 sm:py-2 text-sm sm:text-[16px] mt-2 -mb-2 bg-[#F72585] hover:bg-[#f72584e0] text-white font-semibold rounded-lg transition-all duration-300">
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/*Notification */}
      {showToast && (
        <div className="fixed top-5 sm:top-6 right-4 sm:right-8 bg-[#3A0CA3] text-white px-4 sm:px-5 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-50 text-xs sm:text-sm">
          <CheckCircle size={20} />
          <span>Password updated successfully</span>
        </div>
      )}

      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        @keyframes slide-in {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
