import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ConnectPage from ".././pages/Cards/ConnectPage";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {    
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error while sending message:', error);
      setStatus('❌ Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from from-black via-black to-bg-black text-white">

      {/* Top Heading Section */}
      <div className="bg-gradient-to-r from-gray-500 via-black-500 to-black-500 p-16 text-center shadow-xl">
        <motion.h1
          className="text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
        <p className="mt-4 text-lg text-white/80">We are here to help you grow and succeed!</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row p-10 gap-10">
        {/* Left Side - Office Info + Map */}
      

        {/* Right Side - Form */}
        <motion.div 
          className="md:w-1/2 bg-white text-gray-800 rounded-3xl shadow-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Get In Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className={`text-center mt-4 text-sm font-medium ${status.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </motion.div>
      </div>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // 👈 start hidden and below
          animate={{ opacity: 1, y: 0 }} // 👈 fade in and slide up
          transition={{ duration: 0.8, ease: "easeOut" }} // 👈 smooth timing
        >
          <ConnectPage />
        </motion.div>
      </section>

      <motion.div 
      className="md:w-1/2 flex flex-col gap-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
    </motion.div>
    </div>
  );
};
export default ContactForm;