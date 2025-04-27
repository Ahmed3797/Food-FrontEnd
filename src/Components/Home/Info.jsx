import React, { useState } from "react";
import ImageComponent from "./ImageComponent";

const Info = () => {
  const [ind, SetInd] = useState(0);

  const setData = (ind) => {
    SetInd(ind);
  };

  let data = [
    {
      heading: "FeastFlow",
      description:
        "From kitchen to doorstep, FeastFlow ensures a seamless food experience. Whether you're a chef crafting masterpieces, a rider on a mission, or a foodie craving flavors, we bring everyone together for the ultimate dining experience—fast, fresh, and flavorful!",
    },
    {
      heading: "ChefSphere",
      description:
        "Where culinary magic happens! ChefSphere connects passionate chefs with food lovers, delivering expertly crafted dishes straight from the kitchen to your table.",
    },
    {
      heading: "SwiftBite",
      description:
        "Speed meets flavor! SwiftBite ensures that every meal reaches you hot and fresh, with our dedicated riders delivering your favorite food at lightning speed.",
    },
    {
      heading: "FlavorDash",
      description:
        "Your ultimate destination for deliciousness! FlavorDash offers a variety of mouthwatering cuisines, bringing the best flavors from top chefs right to your doorstep.",
    },
  ];
  return (
    <>
      <div className="my-2 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2  h-[500px]  p-4">
          <div className="h-[100%]  flex flex-col justify-center items-start">
            <h1 className="font-extrabold text-[40px] md:text-[50px] lg:text-[60px] text-[#FFCDB2]">
              {data[ind].heading}
            </h1>
            <p className="font-light text-[20px]">{data[ind].description}</p>
          </div>
        </div>

        <div className="col-span-2 ">
          <ImageComponent setData={setData} />
        </div>
      </div>
    </>
  );
};

export default Info;
