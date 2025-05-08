import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import life1 from '../../assets/life1.webp';
import life2 from '../../assets/life2.jpeg';
import life3 from '../../assets/life3.jpeg';
import life4 from '../../assets/life4.jpeg';
import life5 from '../../assets/life5.jpeg';
import life6 from '../../assets/life6.jpeg';

// Animations (defined locally)
export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Hero Section */}
      <motion.div className="relative text-center mb-16" initial="hidden" animate="visible" variants={fadeIn}>
         <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }} />
        <motion.h1 className="relative text-6xl font-extrabold text-blue-400 mb-6 z-10">Join Sardius IT Technologies</motion.h1>
        <motion.p className="relative text-xl text-gray-300 mb-8 z-10">
          Innovate, grow, and make an impact with us. Your journey starts here.
        </motion.p>
        <motion.button
          onClick={() => navigate('/apply')}
          className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 z-10"
        >
          Apply Now
        </motion.button>
      </motion.div>

      {/* About Sardius IT Technologies Section */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-100 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-400">
          We are an innovative software company shaping the future with cutting-edge technologies. Join us in revolutionizing industries with our creativity and passion.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Our mission is to bring digital transformation to businesses, creating powerful solutions that change the way people work.
        </p>
      </motion.section>

      {/* Roles & Responsibilities Section */}
      <motion.section className="mb-16" variants={fadeIn} initial="hidden" animate="visible">
        <h2 className="text-4xl font-semibold text-gray-100 mb-4">Roles & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { role: 'Software Developer', responsibilities: 'Develop software applications', requiredSkills: 'Java, Spring Boot, MySQL' },
            { role: 'Frontend Developer', responsibilities: 'Build user-facing interfaces', requiredSkills: 'React.js, Next.js, Tailwind CSS' },
            { role: 'Backend Developer', responsibilities: 'Maintain server-side logic', requiredSkills: 'Node.js, Express.js, MongoDB' },
            { role: 'UI/UX Designer', responsibilities: 'Design intuitive user interfaces', requiredSkills: 'Figma, Sketch, Adobe XD' },
            { role: 'Digital Marketing Executive', responsibilities: 'Create digital marketing strategies', requiredSkills: 'SEO, Google Ads, Content Marketing' },
            { role: 'HR Executive', responsibilities: 'Manage recruitment and employee relations', requiredSkills: 'People Management, HRMS tools' },
          ].map((item, index) => (
            <motion.div key={index} variants={slideInLeft} initial="hidden" animate="visible" className="p-6 bg-gray-800 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">{item.role}</h3>
              <p className="text-gray-300"><strong>Responsibilities:</strong> {item.responsibilities}</p>
              <p className="text-gray-300 mt-2"><strong>Required Skills:</strong> {item.requiredSkills}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Spotlight Section */}
<motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
  <h2 className="text-4xl font-semibold text-gray-100 mb-6">Team Spotlight</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: 'Mani', role: 'Software Developer', quote: 'Sardius IT gives me purpose and challenge every day.' },
      { name: 'Vivek', role: 'Frontend Developer', quote: 'A place where creativity and collaboration thrive.' },
      { name: 'Charan', role: 'Digital Marketing Executive', quote: 'Here, my ideas turn into campaigns that reach thousands.' },
      { name: 'Shreya', role: 'HR Executive', quote: 'I love helping talented people grow in their careers here.' },
      { name: 'Sravani', role: 'HR Executive', quote: 'It’s rewarding to build and support an amazing team.' },
      { name: 'Kalyani', role: 'HR Executive', quote: 'Supporting people and nurturing talent is my passion here.' },
    ].map((member, i) => (
      <div key={i} className="relative w-full h-64" style={{ perspective: '1000px' }}>
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Face with Background Image */}
          <div
            className="absolute w-full h-full rounded-xl shadow-xl text-white flex flex-col justify-center items-center overflow-hidden"
            style={{
              backgroundImage: `url('/images/${member.name.toLowerCase()}.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl" />
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300 mt-2">{member.role}</p>
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute w-full h-full bg-blue-600 text-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-center items-center"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <p className="text-lg italic z-10">“{member.quote}”</p>
            <p className="mt-4 font-semibold">– {member.name}</p>
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</motion.section>

      
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
  <h2 className="text-4xl font-semibold text-gray-100 mb-6">Perks & Benefits</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: 'Flexible Hours',
        description: 'We trust our team to manage their time effectively. Work when you’re most productive.'
      },
      {
        title: 'Remote Work',
        description: 'Work from anywhere—your home, a cafe, or even another country.'
      },
      {
        title: 'Health Insurance',
        description: 'Comprehensive health coverage for you and your family to stay worry-free.'
      },
      {
        title: 'Upskilling Support',
        description: 'Access to courses, certifications, and workshops to grow your skillset.'
      },
      {
        title: 'Mentorship',
        description: 'Work with senior experts who’ll guide you throughout your career journey.'
      },
      {
        title: 'Annual Retreats',
        description: 'Team offsites and retreats to relax, bond, and brainstorm in new environments.'
      }
    ].map((perk, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 p-5 rounded-xl shadow-md text-white"
      >
        <div className="flex items-center space-x-4 mb-2">
          <FaCheckCircle className="text-blue-400 text-2xl" />
          <h4 className="text-xl font-semibold text-blue-400">{perk.title}</h4>
        </div>
        <p className="text-gray-300 text-sm">{perk.description}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* Career Growth Timeline Section */}

      <motion.section className="mb-20" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-4xl font-semibold text-gray-100 mb-6">Career Growth at Sardius</h2>
        <div className="border-l-4 border-blue-500 ml-4 space-y-10">
          {[ 
            { year: 'Year 1', role: 'Trainee Developer', desc: 'Hands-on training and mentorship.' },
            { year: 'Year 2', role: 'Junior Developer', desc: 'Handling live projects and building confidence.' },
            { year: 'Year 3+', role: 'Team Lead / Specialist', desc: 'Leading projects and mentoring freshers.' },
          ].map((stage, i) => (
            <div key={i} className="ml-6 flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">{i + 1}</div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">{stage.year}: {stage.role}</h3>
                <p className="text-gray-300 mt-1">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

       {/* Life at Sardius */}
{/* Life at Sardius */}
<motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
  <h2 className="text-4xl font-semibold text-gray-100 mb-6">Life at Sardius</h2>
  <p className="text-gray-400 mb-4">
    We believe in a culture of collaboration, growth, and celebration. Here's a glimpse into our daily life:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { src: life1, caption: 'Team Building Activities' },
      { src: life2, caption: 'Fun Fridays at Work' },
      { src: life3, caption: 'Birthday Celebrations' },
      { src: life4, caption: 'Creative Workspace Vibes' },
      { src: life5, caption: 'Annual Company Retreat' },
      { src: life6, caption: 'Employee Recognition Day' },
    ].map((item, index) => (
      <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
        <img
          src={item.src}
          alt={item.caption}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.caption}
        </div>
      </div>
    ))}
  </div>
</motion.section>



           {/* Global Exposure & Onsite Opportunities */}
      <motion.section className="mb-16" initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-4xl font-semibold text-gray-100 mb-6">Global Exposure & Onsite Opportunities</h2>
        <p className="text-gray-400 mb-4">At Sardius, we offer client-facing opportunities and international exposure. Many of our team members have worked on projects abroad or collaborated with teams across time zones.</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Onsite work opportunities with relocation support</li>
          <li>Flexible working hours and remote-first approach</li>
          <li>Cross-border collaboration with global clients</li>
        </ul>
      </motion.section>
      
      {/* Final Call to Action */}
      <motion.div className="text-center mt-16" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <button
          onClick={() => navigate('/apply')}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-lg rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Start Your Journey
        </button>
      </motion.div>

 
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">Sardius IT Technologies</h4>
            <p className="text-gray-400 mt-2">Innovating the Future of Technology</p>
          </div>
          <div className="space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-white text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-white text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Careers;
