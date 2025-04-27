import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS
import Review from './Review';
import pencils from '../../assets/pencils.avif'

const ReviewSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${pencils})` }}>
     
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

    
      <div className="relative z-10 flex justify-center items-center h-full">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <Review />
          <Review />
          <Review />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection
