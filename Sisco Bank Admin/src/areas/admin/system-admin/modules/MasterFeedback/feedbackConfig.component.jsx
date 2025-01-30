import React, { useState, useEffect } from "react";
import Dashboard from "../../../common/dashboard-components/dashboard.component";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const FeedbackBox = ({ feedbackData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!feedbackData) {
    return <p className="text-center text-gray-500">No feedback available</p>;
  }

  return (
    <div className="mt-3 bg-green-50 p-5 rounded-md shadow-lg max-w-4xl mx-auto text-lg cursor-pointer">
      {/* Summary Section */}
      <button
        onClick={toggleDetails}
        aria-expanded={showDetails}
        className="text-left w-full focus:outline-none"
      >
        <p className="text-s text-black font-bold">Feedback Type: {feedbackData.feedback_type_id}</p>
        <p className="text-s text-black">Name: {feedbackData.customer_name}</p>

        {/* Phone number with icon */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-500" />
          <span className="text-s text-black">{feedbackData.customer_contact}</span>
        </div>

        {/* Email with icon */}
        <div className="flex items-center gap-2">
          <HiMail className="text-gray-500" />
          <span className="text-s text-black">{feedbackData.customer_email}</span>
        </div>
      </button>

      {/* Detailed Section */}
      {showDetails && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-inner">
          <p>
            <span className="font-bold">Name:</span> {feedbackData.customer_name}
          </p>
          <p>
            <span className="font-bold">Contact:</span> {feedbackData.customer_contact}
          </p>
          <p>
            <span className="font-bold">Email:</span> {feedbackData.customer_email}
          </p>
          <p>
            <span className="font-bold">Address:</span> {feedbackData.customer_address}
          </p>
          <p>
            <span className="font-bold">Feedback Type:</span> {feedbackData.feedback_type_id}
          </p>
          <p>
            <span className="font-bold">Account No:</span> {feedbackData.customer_account_number}
          </p>
          <p>
            <span className="font-bold">Description:</span> {feedbackData.feedback_description}
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
  const [feedbackData, setFeedbackData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an existing form submission or API
    const fetchData = async () => {
      // Replace this with your actual API endpoint or data source
      const response = await fetch("/api/feedback"); // Example endpoint
      const data = await response.json();
      setFeedbackData(data);
    };

    fetchData();
  }, []);

  return (
    <Dashboard sidebarType="System Admin">
      {/* Main content after the sidebar */}
      <div className="content">
        {/* Page Header */}
        <div className="flex items-center justify-center mt-9">
          <div className="text-center text-slate-700">
            <p className="text-4xl font-bold text-[#14532d]">Customer Feedback/Grievance</p>
          </div>
        </div>

        {/* Feedback Box */}
        <FeedbackBox feedbackData={feedbackData} />
      </div>
    </Dashboard>
  );
};

export default FeedbackConfig;
