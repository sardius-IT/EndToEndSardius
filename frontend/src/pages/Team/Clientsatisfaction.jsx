import { FaStar } from "react-icons/fa";
import cloudImage from "../../assets/modern.avif";
import Illustration from "../../assets/resource.avif";
import clouds from "../../assets/UntitledDesign.png";
import clou from "../../assets/World-Earth-PNG-Photos.png";

const testimonials = [
  {
    quote: "Sadius IT Technologies delivers with precision and innovation",
    text: ` Working with Sadius IT Technologies has been an outstanding experience. Their ability to understand complex business needs and turn them into robust digital solutions is unmatched. `,
    name: "Ian Stokes-Rees",
    role: "Partner",
    companyLogo: cloudImage,
  },
  {
    quote: "Partnering with Sadius IT Technologies was a game-changer...",
    text: `Sadius IT Technologies exceeded our expectations with their deep technical expertise and client-first approach. Their team not only delivered high-quality software solutions on time but also brought innovative ideas that elevated our project`,
    name: "Tess Caputo",
    role: "Chief Operations Officer",
    companyLogo: Illustration,
  },
  {
    quote: "Sadius brought our vision to life with cutting-edge technology.”",
    text: `Sadius IT Technologies took our concept and transformed it into a powerful, scalable platform that exceeded our expectations..Their innovative thinking, clean coding practices, and user-centric approach made all the difference. `,
    name: "Conor Kenney",
    role: "VP, Product and Technology",
    companyLogo: clouds,
  },
];

export default function ClientSatisfaction() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Clients’ Satisfaction is Our Top Priority
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          We have a reputation for helping clients around the world find success on their most important projects.
        </p>
        <div className="border-t border-gray-200 my-10"></div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <img src={clou} alt="Globe" className="w-12 h-12 object-contain" />
            <h3 className="mt-2 text-2xl font-semibold">50+</h3>
            <p className="text-gray-200">Countries Served</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={clouds} alt="Clients" className="w-12 h-12 object-contain" />
            <h3 className="mt-2 text-2xl font-semibold">5,000+</h3>
            <p className="text-gray-200">Clients Served</p>
          </div>
        </div>

        {/* Star Rating Section */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 text-sm sm:text-base text-center">
          <span>Our customers say</span>
          <span className="font-semibold">Excellent</span>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          <span>4.8 out of 5 based on 1,691 reviews</span>
          {[...Array(1)].map((_, i) => (
            <FaStar key={i} className="text-green-600" />
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shadow-md shadow-amber-100 rounded-2xl p-6 text-left "
            >
              <div className="text-blue-600 text-3xl mb-4">“</div>
              <h3 className="font-bold text-lg">{testimonial.quote}</h3>
              <p className="mt-4 text-gray-400">{testimonial.text}</p>
              <div className="flex items-center mt-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <img
                  src={testimonial.companyLogo}
                  alt="Company logo"
                  className="h-8 w-auto mt-2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
