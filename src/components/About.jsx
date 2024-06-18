import React from "react";
import aboutImg from "../assets/20944999-removebg-preview.png";

export const About = () => {
  return (
    <section>
      <div className="px-4 lg:px-14  mx-auto my-8 " style={{width:"100%"}} id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="Imagem de sobre" />
          </div>

          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-blue-500 font-semibold mb-4 md:w-4/5">
             Discover Heaven Estates Vision
            </h2>
            <p className="md:w-3/4 text-base text-white mb-8">
            Welcome to Heaven Estate, where we empower real estate builders and architects to 
            elevate their clients' experiences. Our platform is designed to streamline the home
             buying and selling process, enabling you to better serve your clients' needs. With
              Heaven Estate by your side, you can exceed expectations and turn dreams into reality 
              for every homeowner.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      
    </section>
  );
};
