// components/ResumeFormatByCountry.jsx
import React, { useState } from "react";
import Select from "react-select";
import countries from "../data/countries";

const options = countries.map((c) => ({
  value: c.code,
  label: (
    <div className="flex items-center gap-2">
      <img
        src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
        alt={c.name}
        className="w-6 h-4 object-cover"
      />
      <span>{c.name}</span>
    </div>
  ),
  name: c.name,
}));

export default function ResumeFormatByCountry() {
  const [selectedCountry, setSelectedCountry] = useState(
    options.find((c) => c.value === "US")
  );

  return (
    <section className="bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-6 mb-6 max-w-[960px] mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/5 flex flex-col gap-2">
          <h2 className="text-[20px] font-bold text-[#680eb1]">Resume Format by Country</h2>
          <p className="text-gray-600 w-full text-xs">
            Choose the target country to preview resume format and localization notes
          </p>
          <h5 className="font-bold text-gray-800 text-[13px] mt-2">Target Country/Region</h5>
          <Select
            options={options}
            value={selectedCountry}
            onChange={(option) => setSelectedCountry(option)}
            className="basic-single mt-1"
            classNamePrefix="select"
            isSearchable
            menuPlacement="auto"
            menuPosition="fixed"
          />
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0 text-xs flex-shrink-0">
          <h3 className="font-semibold text-gray-800 mb-2">Format Guidelines</h3>
          <ul className="text-gray-700 gap-y-1 flex flex-col">
            <li><b>Max Pages:</b> 2</li>
            <li><b>Photo Required:</b> No</li>
            <li><b>Personal Details:</b> Not needed</li>
            <li><b>Date Format:</b> MM/DD/YYYY</li>
          </ul>
        </div>
      </div>

      <div className="w-full border-purple-200 border p-4 rounded-md mt-4">
        <h3 className="font-semibold text-[#680eb1] text-[15px] mb-2">
          Cultural Notes for {selectedCountry.name}
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-[12px]">
          <li>Example note for {selectedCountry.name}</li>
          <li>Keep resume concise and professional</li>
          <li>Use local date format if needed</li>
          <li>Keep it 1-2 pages maximum</li>
        </ul>
      </div>
    </section>
  );
}
