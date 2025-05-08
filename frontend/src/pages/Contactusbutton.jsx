import React from "react";

export default function ContactUsButton() {
  return (
    <a
      href="/contact" // <-- You can set this to your contact section or a URL
      className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-3 rounded-se-3xl shadow-lg rotate-[-90deg] origin-bottom-right z-50 text-base font-semibold hover:bg-blue-800 transition-all duration-300"
    >
      Contact us
    </a>
  );
}
