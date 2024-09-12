import React from "react";
import foodimg3 from "../../assets/foodimg3.jpg";
const MainImage = () => {
  return (
    <div className="my-2 grid gird-cols-1 h-[500px] text-white relative">
      <div
        className="w-[100%] bg-no-repeat bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${foodimg3})` }}
      >
        <div className=" absolute bottom-12 left-5">
          <h1 className="text-5xl lg:text-8xl md:text-7xl font-semibold md:w-[50%]">
            Order Your Favoutrie Food Here
          </h1>
          <p className="text-sm md:w-[50%] font-thin">
            At Aam, we believe in celebrating the vibrant flavors of fresh
            ingredients. Whether it's a wholesome meal or a delightful snack, we
            bring the best of nature straight to your table. Taste the
            difference, savor the freshness.
          </p>
          <button className="bg-white text-black p-2 w-[120px] rounded-3xl my-3">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
