import React, { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    dob: "",
    education: "",
    address: "",
    permanentAddress: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    console.log("Sending form data:", formDataToSend);

    try {
      const response = await fetch("http://localhost:8000/api/form", {
        method: "POST",
        body: formDataToSend,
      });
      

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error in fetch request:", error);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-[8rem]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-5">User Information Form</h2>
        {["name", "contact", "email", "dob", "education", "address", "permanentAddress"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-semibold mb-2 capitalize" htmlFor={field}>
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="resume">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
