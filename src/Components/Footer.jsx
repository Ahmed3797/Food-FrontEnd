import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Delivery.json";

const Footer = () => {
  return (
    <div className=" w-[100%] bg-[#FFCDB2] text-white p-10 mt-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 ">
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-3xl">AAM</h1>
          <p className="text-gray-500 text-sm">
            Crafted with love and passion, Aam is dedicated to bringing you the
            finest, freshest food. Join us in our journey to make every meal a
            celebration of flavor and freshness. Let's eat well, live well!
          </p>
        </div>

        <div className="flex md:justify-center md:items-center my-5 sm:items-start sm:justify-start">
          <div className="">
            <h1>GET IN TOUCH</h1>
            <p className="text-gray-500 text-sm">+1-223-2345</p>
            <p className="text-gray-500 text-sm">contact@amm.com</p>
          </div>
        </div>

        <div style={{height:"200px"}} >
        <Lottie animationData={animationData} loop={true}
        
        style={{height:"200px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
