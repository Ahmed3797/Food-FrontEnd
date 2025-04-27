import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodimg4 from "../../assets/foodimg4.jpg";
import foodimg5 from "../../assets/foodimg5.jpg";
import foodimg6 from "../../assets/foodimg6.jpg";
import foodimg7 from "../../assets/foodimg7.jpg";

const Carousel = () => {
  const settings = {
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval (in ms)
    pauseOnHover: true, // Pause autoplay on hover
    infinite: true,
  };

  return (
    <div className="h-full w-full">
      <Slider {...settings} className="h-full ">
        <div className="md:h-[600px] h-[300px] flex justify-center items-center">
          <img
            src={foodimg6}
            alt="Food Item"
            className="w-full h-full object-cover rounded-lg shadow-sm "
          />
        </div>
        <div className="md:h-[600px] h-[300px]">
          <img
            src={foodimg4}
            alt="Food Item"
            className="w-full h-full object-cover rounded-lg shadow-sm "
          />
        </div>
        <div className="md:h-[600px] h-[300px]">
          <img
            src={foodimg7}
            alt="Food Item"
            className="w-full h-full object-cover rounded-lg shadow-sm "
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
