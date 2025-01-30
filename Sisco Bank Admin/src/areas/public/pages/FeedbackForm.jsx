import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../api/axios";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [feedbackTypes] = useState([
    { label: "Feedback", value: "feedback" },
    { label: "Grievance", value: "grievance" },
  ]);

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    axios
      .post("http://localhost:5000/api/feedback", data)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form");
      });
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-xl max-w-7xl">
      <h1 className="text-2xl font-semibold mb-6 text-center text-primary">Feedback/Grievance Redressal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Fields Section */}
        <div className="col-span-1 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Feedback Type */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">TYPE *</label>
              <select
                {...register("feedback_type_id", { required: "Type is required" })}
                className="w-full border-2 focus:border-green-500 focus:outline-none border-gray-300 rounded-lg p-2"
              >
                <option value="">Select</option>
                {feedbackTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">NAME *</label>
              <input
                {...register("customer_name", { required: "Name is required" })}
                className="w-full border-2 focus:border-green-500 focus:outline-none border-gray-300 rounded-lg p-2"
                placeholder="Provide your Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">EMAIL-ADDRESS *</label>
              <input
                {...register("customer_email", {
                  required: "Email is required",
                  pattern: /^[^@]+@[^@]+\.[^@]+$/,
                })}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:border-green-500 focus:outline-none"
                placeholder="Provide your Email ID"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Contact Number */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">CONTACT NUMBER *</label>
              <input
                {...register("customer_contact", {
                  required: "Contact number is required",
                  minLength: { value: 10, message: "Minimum length is 10" },
                })}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:border-green-500 focus:outline-none"
                placeholder="(+91)"
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">ADDRESS *</label>
              <textarea
                {...register("customer_address", { required: "Address is required" })}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:border-green-500 focus:outline-none"
                placeholder="Provide your Full Address"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            {/* Account Number */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">ACCOUNT NUMBER *</label>
              <input
                {...register("customer_account_number", {
                  required: "Account Number is required",
                  pattern: { value: /^[0-9]+$/, message: "Account Number must be numeric" },
                })}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:border-green-500 focus:outline-none"
                placeholder="Provide your Account Number"
              />
              {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber.message}</p>}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700 mb-1">DESCRIPTION *</label>
              <textarea
                {...register("feedback_description", { required: "Description is required" })}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:border-green-500 focus:outline-none"
                placeholder="Provide description (in less than 250 words)"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <button type="submit" className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg">
              Submit
            </button>
          </form>
        </div>

        {/* Third Column for Additional Content */}
        <div className="bg-orange-200 rounded-lg p-4 shadow-md h-[26rem]">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Additional Information</h2>
          <p className="text-gray-600 text-lg font-semibold">
          If a customer experiences deficiency of service at any of our branches/offices, the customer is at liberty to send a complaint to the following address:
          <br></br>
          Managing Director<br></br>
          Sikkim State Co-operative Bank Ltd. Head Office,<br></br>
          5th Mile Tadong,<br></br>
          Gangtok, East-Sikkim,<br></br>
          737102<br></br>
          Phone- 03592-232008/231005<br></br>
          Email- Siscobank@yahoo.co.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
