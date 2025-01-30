import React, { useState } from "react";
import Dashboard from "../../../common/dashboard-components/dashboard.component"; // Assuming the Dashboard component is pre-defined
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const FeedbackBox = ({ feedbackData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="mt-3 bg-green-50 p-5 rounded-md shadow-lg max-w-4xl mx-auto text-lg cursor-pointer">
      {/* Summary Section */}
      <div onClick={toggleDetails}>
        <p className="text-s text-black font-bold">{feedbackData.type}</p>
        <p className="text-s text-black">{feedbackData.name}</p>

        {/* Phone number with icon */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-500" />
          <span className="text-s text-black">{feedbackData.phone}</span>
        </div>

        {/* Email with icon */}
        <div className="flex items-center gap-2">
          <HiMail className="text-gray-500" />
          <span className="text-s text-black">{feedbackData.email}</span>
        </div>
      </div>

      {/* Detailed Section */}
      {showDetails && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-inner">
          <p>
            <span className="font-bold">Name:</span> {feedbackData.name}
          </p>
          <p>
            <span className="font-bold">Contact:</span> {feedbackData.phone}
          </p>
          <p>
            <span className="font-bold">Email:</span> {feedbackData.email}
          </p>
          <p>
            <span className="font-bold">Address:</span> {feedbackData.address}
          </p>
          <p>
            <span className="font-bold">Type:</span> {feedbackData.type}
          </p>
          <p>
            <span className="font-bold">Account No: </span> {feedbackData.account}
          </p>
          <p>
            <span className="font-bold">Description:</span> {feedbackData.description}
          </p>
          <button
            onClick={toggleDetails}
            className="mt-3 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

const FeedbackConfig = () => {
  const feedbackData = {
    name: "Sabnam Tamang",
    phone: "1234567891",
    email: "ssab0328@gmail.com",
    address: "Mangan, Sikkim",
    type: "Feedback",
    account: "3497777222",
    description: "Good",
  };

  return (
    <Dashboard sidebarType="System Admin">
      {/* Main content after the sidebar */}
      <div className="content">
        {/* Page Header */}
        <div className="flex items-center justify-center mt-9">
          <div className="text-center text-slate-700">
            <p className="text-4xl font-bold text-[#14532d]">Customer Feedback/Grevience</p>
          </div>
        </div>

        {/* Feedback Box */}
        <FeedbackBox feedbackData={feedbackData} />
      </div>
    </Dashboard>
  );
};

export default FeedbackConfig;
