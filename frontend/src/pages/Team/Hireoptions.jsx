import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faBullhorn,
  faTasks,
  faBox,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Developer",
    description: "Software Developer, Data Scientist, DevOps, QA...",
    icon: faCode,
  },

  {
    title: "Digital Marketing ",
    description:
      "Growth Marketing Expert, Content Marketing Strategist, Digital Marketer, SEO Specialist...",
    icon: faBullhorn,
  },
  {
    title: "Project Manager",
    description:
      "Digital Project Manager, IT Project Manager, Scrum Master, Agile Coach...",
    icon: faTasks,
  },
  {
    title: "Product Manager",
    description: "Digital Product Manager, Product Owner, Business Analyst...",
    icon: faBox,
  },
  {
    title: "staffing",
    description:
      "Finance Expert, Business Strategist, M&A Expert, Supply Chain Expert...",
    icon: faChartLine,
  },
];

export default function HireOptions() {
  return (
    <div className="max-w-3xl mx-auto p-6 py-5">
      <h1 className="text-3xl font-bold mb-6">Who would you like to hire?</h1>
      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex items-center justify-between p-4 border rounded-lg  transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={role.icon}
                className="text-blue-500 text-2xl"
              />
              <div className=" ">
                <h2 className="font-semibold ">{role.title}</h2>
                <p className="text-gray-500 text-sm">{role.description}</p>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-400" />
          </div>
        ))}
      </div>
      <span className="  py-5">
      <Link to="/contact" className=" text-gray-50 hover:text-cyan-500 gap-8">
       Talent Sphere..??
      </Link></span>
    </div>
  );
}
