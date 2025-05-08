import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Select from 'react-select';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    skills: [],
    yearsOfExperience: '',
    currentCTC: '',
    expectedCTC: '',
    recentEducation: '',
    collegeName: '',
    idNumber: '',
    percentage: '',
    github: '',
    linkedin: '',
    resume: null,
    coverLetter: '',
  });

  const fileInputRef = useRef();
  const [status, setStatus] = useState('');

  const positionOptions = [
    { value: 'Frontend Developer', label: 'Frontend Developer' },
    { value: 'Backend Developer', label: 'Backend Developer' },
    { value: 'Full Stack Developer', label: 'Full Stack Developer' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Software Tester', label: 'Software Tester' },
  ];

  const skillOptions = [
    { value: 'Core Java', label: 'Core Java' },
    { value: 'Advance Java', label: 'Advance Java' },
    { value: 'SpringBoot', label: 'SpringBoot' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React Js', label: 'React Js' },
    { value: 'Next.js', label: 'Next.js' },
    { value: 'Angular.Js', label: 'Angular.Js' },
    { value: 'Python', label: 'Python' },
    { value: 'Manual Testing', label: 'Manual Testing' },
    { value: 'Automation', label: 'Automation' },
    { value: 'Selenium', label: 'Selenium' },
    { value: 'Devops', label: 'Devops' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Linex', label: 'Linex' },
    { value: 'SQL', label: 'SQL' },
    { value: 'Social Media Marketing', label: 'Social Media Marketing' },
    { value: 'SEO', label: 'SEO' },
    { value: 'WebSite development', label: 'WebSite development' },
    { value: 'Youtube Marketing', label: 'Youtube Marketing' },
    { value: 'PPC', label: 'PPC' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (selectedOptions) => {
    const selectedSkills = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
    setFormData({ ...formData, skills: selectedSkills });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'skills') {
        formDataToSend.append(key, formData.skills.join(', '));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    // Debug: Log FormData
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      const response = await fetch('http://localhost:8081/api/job-application', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        setStatus('✅ Application submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          position: '',
          skills: [],
          yearsOfExperience: '',
          currentCTC: '',
          expectedCTC: '',
          recentEducation: '',
          collegeName: '',
          idNumber: '',
          percentage: '',
          github: '',
          linkedin: '',
          resume: null,
          coverLetter: '',
        });
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setStatus('❌ Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Something went wrong. Please check your connection.');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-800 text-white p-8">
      <motion.div
        className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Job Application</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <input type="text" name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 rounded-lg border" />

          {/* Job Info */}
          <Select
            name="position"
            options={positionOptions}
            placeholder="Select Position"
            value={positionOptions.find(opt => opt.value === formData.position)}
            onChange={(option) => setFormData({ ...formData, position: option ? option.value : '' })}
            className="w-full"
          />
          <Select
            isMulti
            name="skills"
            options={skillOptions}
            placeholder="Select Skills"
            value={skillOptions.filter(opt => formData.skills.includes(opt.value))}
            onChange={handleSkillsChange}
            className="w-full"
          />

          <input type="text" name="yearsOfExperience" placeholder="Years of Experience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="currentCTC" placeholder="Current CTC" value={formData.currentCTC} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="expectedCTC" placeholder="Expected CTC" value={formData.expectedCTC} onChange={handleChange} className="w-full p-3 rounded-lg border" />

          {/* Education Info */}
          <input type="text" name="recentEducation" placeholder="Recent Education" value={formData.recentEducation} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} className="w-full p-3 rounded-lg border" />
          <input type="text" name="percentage" placeholder="Percentage" value={formData.percentage} onChange={handleChange} className="w-full p-3 rounded-lg border" />

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <FaGithub className="text-gray-700 text-xl" />
            <input type="url" name="github" placeholder="GitHub Profile URL" value={formData.github} onChange={handleChange} className="flex-1 p-3 rounded-lg border" />
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600 text-xl" />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile URL" value={formData.linkedin} onChange={handleChange} className="flex-1 p-3 rounded-lg border" />
          </div>

          {/* Resume and Cover Letter */}
          <input type="file" name="resume" ref={fileInputRef} onChange={handleFileChange} className="w-full p-3 rounded-lg border" />
          <textarea name="coverLetter" placeholder="Cover Letter" required rows="4" value={formData.coverLetter} onChange={handleChange} className="w-full p-3 rounded-lg border resize-none"></textarea>

          {/* Submit */}
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform">
            Submit Application
          </button>
        </form>

        {status && (
          <motion.p className="text-center mt-4 text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            {status}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
export default JobApplicationForm;

