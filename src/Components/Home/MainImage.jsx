import React from "react";
import Carousel from "./Carousel";

const MainImage = () => {
  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-auto text-black mb-[35px]">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-4 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-semibold md:w-[95%]
        bg-gradient-to-r from-[#eb927b] via-[#d66b6f] to-[#ad475c] text-transparent bg-clip-text
        ">
          Order Your Favourite Food Here
        </h1>
        <p className="text-justify md:w-[80%] font-light">
          At Aam, we believe in celebrating the vibrant flavors of fresh
          ingredients. Whether it's a wholesome meal or a delightful snack, we
          bring the best of nature straight to your table. Taste the
          difference, savor the freshness.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full sm:h-[300px] md:h-full ">
        <Carousel />
      </div>
    </div>
  );
};

export default MainImage;
