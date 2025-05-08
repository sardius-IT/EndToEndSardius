// src/pages/ApplicationForm.jsx (or src/components/ApplicationForm.jsx if not using file-based routing)
import React from 'react';
import JobForm from "./Careers/JobForm";
 // update path as per your structure

const ApplicationForm = () => {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-semibold text-blue-400 mb-6 text-center">Job Application Form</h2>
      <JobForm />
    </div>
  );
};

export default ApplicationForm;
