/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from "react";
import Button from "./Button";
import BannerSlider from "./BannerSlider";

const Herosection = () => {

    const [banner, setBanner] = useState([]);

    const bannerImg = [
        {
            img: "/images/1.png"
        },
        {
            img: "/images/2.png"
        },
        {
            img: "/images/3.png"
        },
        {
            img: "/images/4.png"
        }
    ]

    console.log("Lenght: ", bannerImg.length);
    
    useEffect(() => {
        return setBanner(bannerImg);
      }, []);

    // const handleBanner = () => {
    //     if(bannerImg.length < 4){
    //         setBanner()
    //     }
    // } 

  return (

    // <div className="relative w-full min-h-screen overflow-hidden">
    //     {/* Video Background */}
    //     {/* <video
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
    //     >
    //         <source src="/videos/video.mp4" type="video/mp4" />
    //         Your browser does not support the video tag.
    //     </video> */}

    //     <BannerSlider bannerImg={banner} />

    //     {/* Optional dark overlay */}
    //     <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

    //     {/* Foreground Content */}
    //     <div className="relative z-20 w-full min-h-screen flex justify-center items-center px-4 py-16 sm:px-6 lg:px-12">
    //         <section className="w-full max-w-5xl flex flex-col justify-center items-center text-center text-white">
    //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
    //             Empowering Communities Through Faith & Charity
    //         </h1>

    //         <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 max-w-2xl">
    //             Our Islamic foundation is dedicated to helping those in need and spreading the message of unity and compassion.
    //         </p>

    //         <Button customStyle="border-none" label="Donate Now" />
    //         </section>
    //     </div>
    // </div>

    <div className="relative w-full">
        {/* Banner slider with fixed height */}
        <BannerSlider bannerImg={banner} />

        {/* Optional dark overlay */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-black/50 z-10" />

        {/* Foreground Content (text on banner) */}
        <div className="absolute top-0 left-0 w-full h-[500px] z-20 flex justify-center items-center px-4 py-16 sm:px-6 lg:px-12">
            <section className="text-center text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Empowering Communities Through Faith & Charity
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 max-w-2xl mx-auto">
                Our Islamic foundation is dedicated to helping those in need and spreading the message of unity and compassion.
            </p>

            <Button customStyle="border-none" label="Donate Now" />
            </section>
        </div>
    </div>



  );
};

export default Herosection;
