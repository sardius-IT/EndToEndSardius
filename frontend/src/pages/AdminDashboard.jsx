import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);

  // Fetch Contact Form Submissions
  useEffect(() => {
    fetch('http://localhost:8081/api/contact')
      .then((response) => response.json())
      .then((data) => {
        setContactSubmissions(data);
      })
      .catch((error) => console.error('Error fetching contact submissions:', error));
  }, []);

  // Fetch Job Application Form Submissions
  useEffect(() => {
    fetch('http://localhost:8081/api/job-application')
      .then((response) => response.json())
      .then((data) => {
        setJobApplications(data);
      })
      .catch((error) => console.error('Error fetching job applications:', error));
  }, []);

  // Function to format message with clickable links
  const formatMessage = (message) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = message.split(urlPattern);
    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {part}
          </a>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  // Function to download the resume file
  const downloadResume = (filename) => {
    const link = document.createElement('a');
    link.href = `http://localhost:8081/api/job-application/resume/${filename}`;
    link.download = filename;  // This will prompt a download with the file name
    link.click();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {/* Contact Form Submissions Table */}
      <h2 className="text-2xl font-semibold mb-4">Contact Form Submissions</h2>
      <table className="w-full table-auto border-collapse border border-gray-400 mb-10">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Phone</th>
            <th className="border border-gray-400 p-2">Subject</th>
            <th className="border border-gray-400 p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {contactSubmissions.map((submission) => (
            <tr key={submission.id} className="text-center">
              <td className="border border-gray-400 p-2">{submission.name}</td>
              <td className="border border-gray-400 p-2">{submission.email}</td>
              <td className="border border-gray-400 p-2">{submission.phone}</td>
              <td className="border border-gray-400 p-2">{submission.subject}</td>
              <td className="border border-gray-400 p-2">
                {formatMessage(submission.message)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Job Application Form Submissions Table */}
      <h2 className="text-2xl font-semibold mb-4">Job Application Form Submissions</h2>
      <table className="w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-400 p-2">Full Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Phone</th>
            <th className="border border-gray-400 p-2">Position</th>
            <th className="border border-gray-400 p-2">Skills</th>
            <th className="border border-gray-400 p-2">Years of Experience</th>
            <th className="border border-gray-400 p-2">Current CTC</th>
            <th className="border border-gray-400 p-2">Expected CTC</th>
            <th className="border border-gray-400 p-2">Cover Letter</th>
            <th className="border border-gray-400 p-2">Resume</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((application) => (
            <tr key={application.id} className="text-center">
              <td className="border border-gray-400 p-2">{application.fullName}</td>
              <td className="border border-gray-400 p-2">{application.email}</td>
              <td className="border border-gray-400 p-2">{application.phone}</td>
              <td className="border border-gray-400 p-2">{application.position}</td>
              <td className="border border-gray-400 p-2">{application.skills}</td>
              <td className="border border-gray-400 p-2">{application.yearsOfExperience}</td>
              <td className="border border-gray-400 p-2">{application.currentCTC}</td>
              <td className="border border-gray-400 p-2">{application.expectedCTC}</td>
              <td className="border border-gray-400 p-2">{application.coverLetter}</td>
              <td className="border border-gray-400 p-2">
                <button
                  onClick={() => downloadResume(application.resume)}
                  className="text-blue-500 hover:underline"
                >
                  Download Resume
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
