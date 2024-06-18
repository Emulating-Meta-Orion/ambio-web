import React from "react";

import company1 from "../assets/company1.svg";
import company2 from "../assets/company2.svg";
import company3 from "../assets/company3.svg";
import company4 from "../assets/company4.svg";
import company5 from "../assets/company5.svg";
import company6 from "../assets/company6.svg";
import company7 from "../assets/company7.svg";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "AR & 3D Property Visualization",
      description:
        "Experience immersive virtual tours and walkthroughs of properties using cutting-edge AR and 3D technology.",
      image: "/src/assets/icons/membership.svg",
    },
    {
      id: 1,
      title: "Virtual Property Tours",
      description:
        "Explore properties from the comfort of your home with interactive virtual tours, allowing you to get a realistic sense of space and layout",
      image: "./src/assets/icons/association.svg",
    },
    {
      id: 1,
      title: "Interior Design Visualization",
      description:
        "Visualize potential renovations or interior design changes using AR and 3D modeling to see how your dream space can come to life.",
      image: "/src/assets/icons/group-club.svg",
    },
  ];

  return (
    <section
      className=" mx-auto w:100%"
      id="service"
    >


      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-blue-500 font-semibold mb-3">
          Discover Our Range of Premier Real Estate Services
        </h2>
        <p className="text-white text-2xl"><strong>What services heaven Estate provides?</strong></p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
              <div className="bg-[#d9dbe9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-2 px-2">
                {service.title}
              </h4>
              <p className=" text-neutralGrey text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
