import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image2 from "../../assets/UntitledDesign.png";
import cloudImage from "../../assets/modern.avif";
import clouds from "../../assets/business.avif";
import cloud from "../../assets/resource.avif";
import image from "../../assets/friends.webp";
import image1 from "../../assets/mulitile AI.webp";
const cards = [
  {
    title: "Precision Drilling",
    image: cloudImage,
  },
  {
    title: "Bridgestone",
    image: Image2,
  },
  {
    title: "Cleveland Cavaliers",
    image: clouds,
  },
  {
    title: "Zoetis",
    image: cloud,
  },
  {
    title: "CSR",
    image: image,
  },
  {
    title: "USC University of Southern California",
    image: image1,
  },
];

const WhyChooseToptal = () => {
  return (
    <div className="min-h-screen py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Why Organizations Choose</h1>
      <p className="text-gray-600 mb-12">
        Discover the many ways in which our clients have embraced the benefits of the Toptal network.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
            <div className="w-full h-64 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white rounded-full px-4 py-2 flex items-center text-sm gap-2">
              <FontAwesomeIcon icon={faImage} /> {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseToptal;
