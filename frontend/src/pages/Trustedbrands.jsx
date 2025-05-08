import React from "react";
import kraft from "../assets/business.avif";
import bridgestone from "../assets/abstract.avif";
import duolingo from "../assets/friends.webp";
import shopify from "../assets/resource.avif";
import calm from "../assets/modern.avif";

const TrustedBrands = () => {
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        

        <div className="flex flex-wrap justify-center  items-center gap-12">
        <h2 className=" flex text-center text-white text-sm font-semibold mb-10  ">
          TRUSTED BY LEADING <br /> BRANDS AND STARTUPS
        </h2>
          <img src={kraft} alt="Kraft Heinz" className="h-20 opacity-70 hover:opacity-100 transition" />
          <img src={bridgestone} alt="Bridgestone" className="h-20 opacity-70 hover:opacity-100 transition" />
          <img src={duolingo} alt="Duolingo" className="h-20 opacity-70 hover:opacity-100 transition" />
          <img src={shopify} alt="Shopify" className="h-20 opacity-70 hover:opacity-100 transition" />
          <img src={calm} alt="Calm" className="h-20 opacity-70 hover:opacity-100 transition" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
