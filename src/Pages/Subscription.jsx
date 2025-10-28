import React from "react";
import { FiDownload } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import { PiCurrencyDollarLight, PiCreditCard } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { LuCircleCheckBig } from "react-icons/lu";

const FEATURES = [
  "Unlimited job applications",
  "Resume builder with AI assistance",
  "Mock interview sessions",
  "Career counselling access",
  "Priority support",
  "Analytics dashboard",
];

const INVOICES = [
  { id: "INV-2024-004", status: "Paid", amount: "$29.99", plan: "Professional Plan - Monthly", date: "Mar 15, 2024" },
  { id: "INV-2024-003", status: "Paid", amount: "$29.99", plan: "Professional Plan - Monthly", date: "Feb 15, 2024" },
  { id: "INV-2024-002", status: "Paid", amount: "$29.99", plan: "Professional Plan - Monthly", date: "Jan 15, 2024" },
  { id: "INV-2024-001", status: "Paid", amount: "$29.99", plan: "Professional Plan - Monthly", date: "Dec 15, 2023" },
];

export default function SubscriptionInvoice() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 mt-12 md:mt-0 bg-white">

      {/* Header */}
      <div className="w-full max-w-[960px] text-center mb-2">
        <h1 className="text-[23px] sm:text-[25.59px] font-bold text-gray-800">Subscription & Invoice</h1>
        <p className="text-black font-normal text-[15px] sm:text-[16.35px] mt-1">Manage your subscription and view billing history</p>
      </div>

      {/* Current Plan */}
      <section className="w-full max-w-[960px] bg-white rounded-xl shadow-lg p-6 mb-8 transition-all duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-800">Current Plan</h2>
            <p className="text-black font-normal text-[10px] sm:text-[11px] mt-1">Your active subscription details</p>
          </div>
          <span className="bg-[#3A0CA31A] text-[#3A0CA3] px-3 py-[3px] text-xs font-semibold rounded-full md:mr-0 mr-auto sm:ml-0">Active</span>
        </div>

        {/* Plan Attributes */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-[#3A0CA31A] border border-[#3A0CA31A] rounded-md p-4 flex flex-col justify-start hover:shadow-md transition-shadow">
            <div className="flex items-start gap-2 mt-2">
              <HiArrowUpRight className="text-[#3A0CA3]" size={20} />
              <span className="text-[12px] sm:text-[12px] text-[#5B5B5B] font-medium mt-1">Plan</span>
            </div>
            <div className="mt-1 text-[20px] sm:text-[22px] font-semibold text-[#3A0CA3]">Professional</div>
          </div>
          <div className="bg-[#3A0CA31A] border border-[#3A0CA31A] rounded-md p-4 flex flex-col justify-start hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 -ml-1">
              <PiCurrencyDollarLight className="text-[#3A0CA3]" size={20} />
              <span className="text-[12px] sm:text-[12px] text-[#5B5B5B] font-medium mt-1 -ml-1">Price</span>
            </div>
            <div className="mt-1 text-[18px] sm:text-[20px] font-semibold text-[#3A0CA3]">$29.99</div>
            <div className="text-[11px] sm:text-[12px] text-[#5B5B5B]">Monthly</div>
          </div>
          <div className="bg-[#3A0CA31A] border border-[#3A0CA31A] rounded-md p-4 flex flex-col justify-start hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mt-2">
              <CiCalendar className="text-[#3A0CA3]" size={20} />
              <span className="text-[12px] sm:text-[12px] mt-1.5 text-[#5B5B5B] font-medium">Next Billing</span>
            </div>
            <div className="mt-1 text-[19px] sm:text-[21px] font-semibold text-[#3A0CA3]">March 15, 2024</div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-[#5B5B5B] mt-5" />

        {/* Plan Features */}
        <h1 className="text-[16px] sm:text-[17px] font-semibold mt-5">Plan Features</h1>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-6">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[12px] sm:text-[14px] text-[#5B5B5B]">
              <LuCircleCheckBig className="text-[#3A0CA3]" size={17} />
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-[0.5px] bg-[#5B5B5B] mt-5" />
        <div className="mt-6 text-center">
          <button className="text-[13px] sm:text-[14px] text-[#F72585] hover:underline cursor-pointer transition-all duration-150">Cancel subscription</button>
        </div>
      </section>

      {/* Payment Method */}
      <section className="w-full max-w-[960px] bg-white rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-800 mb-4">Payment Method</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#3A0CA30D] rounded-md p-4 gap-4 sm:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <PiCreditCard size={24} className="text-[#3A0CA3]" />
            </div>
            <div>
              <div className="text-[13px] sm:text-[14px] font-medium text-black mt-1">Visa</div>
              <div className="font-medium text-[13px] sm:text-[14px] text-[#5B5B5B] -mt-1">•••• •••• •••• 4242</div>
            </div>
          </div>
          <button className="bg-[#F72585] hover:bg-[#f72584e0] text-white px-3 py-1.5 rounded-sm text-[13px] sm:text-[14px] font-medium cursor-pointer transition-colors duration-200 sm:mx-0 mx-auto sm:mt-0 mt-2">
            Update
          </button>
        </div>
      </section>

      {/* Invoice History */}
      <section className="w-full max-w-[960px] bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-800">Invoice History</h2>
        <p className="text-[#5B5B5B] font-medium text-[11px] sm:text-[12px] mt-1">View and download your past invoices</p>
        <div className="mt-6 flex flex-col gap-4 w-full">
          {INVOICES.map((inv) => (
            <div key={inv.id} className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-start sm:items-center justify-between bg-[#3A0CA30D] rounded-md shadow-sm p-4 border border-gray-100 gap-3 sm:gap-0 hover:shadow-md transition-shadow w-full">
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-[12px] sm:text-[13px] font-semibold text-black">{inv.id}</span>
                  <span className="bg-[#3A0CA31A] text-[#3A0CA3] px-3 py-[1px] text-xs sm:text-[12px] font-medium rounded-full">{inv.status}</span>
                </div>
                <span className="text-[12px] sm:text-[13px] text-[#5B5B5B] font-medium md:-mb-0 -mb-5">{inv.plan}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0 w-full sm:w-auto">
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-[14px] sm:text-[15px] font-semibold text-gray-800">{inv.amount}</span>
                  <span className="text-[12px] sm:text-[13px] text-gray-500">{inv.date}</span>
                </div>
                <button className="text-[#F72585] hover:text-[#f72584e0] cursor-pointer transition-colors duration-150 md:mx-0 mx-auto">
                  <FiDownload size={23} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
