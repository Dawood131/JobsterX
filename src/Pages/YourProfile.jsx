import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Briefcase,
  Layers,
  Calendar,
  User,
} from "lucide-react";
import { PiBuildingBold } from "react-icons/pi";
import { LiaUserTieSolid } from "react-icons/lia";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-12 md:pt-0 sm:px-6 md:px-8 bg-white">
      {/* Heading */}
      <h1 className="text-[25.59px] font-bold text-gray-800 mb-1 text-center">
        Your Profile
      </h1>
      <p className="text-black text-center mb-5 font-normal text-[15.35px]">
        View and manage your professional information
      </p>

      {/* Profile Card */}
      <div className="bg-white rounded-xl w-full max-w-[960px] p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mt-2 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
            JD
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-[21.49px] font-bold text-gray-800">John Doe</h2>
              <span className="bg-[#3A0CA31A] text-[#3A0CA3] px-3 py-[3px] text-xs font-semibold rounded-full">
                Active
              </span>
            </div>
          </div>
          <p className="text-[#3A0CA3] mt-2 text-[14.33px] font-semibold">
            Senior Software Engineer
          </p>
          <p className="text-[#5B5B5B] mt-3 text-[15px] font-medium leading-relaxed">
            Passionate software engineer with 5+ years of experience in
            full-stack development. Specialized in React, Node.js, and cloud
            technologies.
          </p>
        </div>
      </div>

      {/* Contact Information Card */}
      <div className="bg-white rounded-xl w-full max-w-[960px] p-6 sm:p-8 mb-10 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-3 mb-6">
          <User className="text-[#3A0CA3]" size={22} />
          <h2 className="text-[21.49px] font-bold text-gray-800">
            Contact Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Mail, label: "Email", value: "john.doe@example.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Location", value: "San Francisco, CA" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/johndoe" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition-all duration-300"
              style={{
                backgroundColor: "rgba(58, 12, 163, 0.03)",
                boxShadow: "0 2px 6px rgba(58, 12, 163, 0.1)",
              }}
            >
              <item.icon className="text-[#3A0CA3]" size={18} />
              <div>
                <h3 className="text-gray-800 text-[11.94px]">{item.label}</h3>
                <p className="text-gray-800 font-semibold text-[14.33px] break-all">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Information Card */}
      <div className="bg-white rounded-xl w-full max-w-[960px] p-6 sm:p-8 mb-10 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-[#3A0CA3]" size={22} />
          <h2 className="text-[21.49px] font-bold text-gray-800">
            Personal Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: PiBuildingBold, label: "Company", value: "TechCorp Inc." },
            { icon: Layers, label: "Department", value: "Engineering" },
            { icon: LiaUserTieSolid, label: "Designation", value: "HR Manager" },
            { icon: Calendar, label: "Join Date", value: "January 2022" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition-all duration-300"
              style={{
                backgroundColor: "rgba(58, 12, 163, 0.03)",
                boxShadow: "0 2px 6px rgba(58, 12, 163, 0.1)",
              }}
            >
              <item.icon className="text-[#3A0CA3]" size={18} />
              <div>
                <h3 className="text-gray-800 text-[11.94px]">{item.label}</h3>
                <p className="text-gray-800 font-semibold text-[14.33px] break-words">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
