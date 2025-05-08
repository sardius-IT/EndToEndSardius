import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faChartLine, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="min-h-screen  ">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Build Amazing Teams,<br />On Demand
        </h1>
        <p className="text-gray-50 text-lg">
          Quickly assemble the teams you need, exactly when you need them.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <Feature 
          title="Hire Quickly" 
          desc="Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time."
          icon={faClock}
        />
        <Feature 
          title="The Top 3%" 
          desc="Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate."
          icon={faStar}
        />
        <Feature 
          title="Leading the Future of Work" 
          desc="Our network is ready for tomorrow’s business challenges by embracing advanced and specialized skills including blockchain and AI."
          icon={faChartLine}
        />
        <Feature 
          title="A Level Above" 
          desc="Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication."
          icon={faArrowUp}
        />
      </div>
    </div>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="flex flex-col items-start  shadow-2xl  hover:shadow-blue-500 p-5 rounded-2xl">
      <div className="text-blue-500 mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-50 text-sm">{desc}</p>
    </div>
  );
}

export default App;
