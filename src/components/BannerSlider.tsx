import React, { useState, useEffect } from 'react';
import Image from 'next/image'


const BannerSlider = ({ bannerImg }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % bannerImg.length);
  };

  useEffect(() => {
    const interval = setInterval(slideRight, 4000);
    return () => clearInterval(interval);
  }, [bannerImg.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden z-0">
      {bannerImg.length > 0 && (
        // <Image
        //   width={600}
        //   height={500}
        //   src={bannerImg[index].img}
        //   alt={`banner-${index}`}
        //   className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        // />
        <Image
            src={bannerImg[index].img}
            alt={`Banner ${index}`}
            fill
            className="object-cover"
            priority
            quality={100}
        />
      )}
    </div>
  );
};

export default BannerSlider;
