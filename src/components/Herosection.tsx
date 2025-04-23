import React from "react";
import Button from "./Button";

const Herosection = () => {
  return (
    // <div className="flex w-full h-[100vh] bg-[#0F172A] justify-center items-center">
    //   <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-primary text-white">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Communities Through Faith & Charity</h1>
    //     <p className="text-lg md:text-xl mb-6 max-w-2xl">
    //       Our Islamic foundation is dedicated to helping those in need and spreading the message of unity and compassion.
    //     </p>
    //     <Button customStyle="border-none" label="Donate Now"/>
    //   </section>
    // </div>
    // <div className="w-full min-h-screen bg-[url(/videos/video.mp4)] flex justify-center items-center px-4 py-16 sm:px-6 lg:px-12">
    //     <section className="w-full max-w-5xl flex flex-col justify-center items-center text-center text-white">
    //         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
    //         Empowering Communities Through Faith & Charity
    //         </h1>
            
    //         <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
    //         Our Islamic foundation is dedicated to helping those in need and spreading the message of unity and compassion.
    //         </p>
            
    //         <Button customStyle="border-none" label="Donate Now" />
    //     </section>
    // </div>

    <div className="relative w-full min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 w-full min-h-screen flex justify-center items-center px-4 py-16 sm:px-6 lg:px-12">
            <section className="w-full max-w-5xl flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Empowering Communities Through Faith & Charity
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
                Our Islamic foundation is dedicated to helping those in need and spreading the message of unity and compassion.
            </p>

            <Button customStyle="border-none" label="Donate Now" />
            </section>
        </div>
    </div>


    // <div className="relative w-full h-screen overflow-hidden">
    //     {/* Video Background */}
    //     <video
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
    //     >
    //         <source src="/videos/video.mp4" type="video/mp4" />
    //         Your browser does not support the video tag.
    //     </video>

    //     {/* Overlay (optional dark overlay) */}
    //     <div className="absolute top-0 left-0 w-full h-full bg-emreld-600/50 z-10" />

    //     {/* Foreground Content */}
    //     <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
    //         <h1 className="text-4xl md:text-6xl font-bold mb-4">
    //         Empowering Through Faith
    //         </h1>
    //         <p className="text-lg md:text-xl max-w-xl mb-6">
    //         Join us in making a difference in the lives of those in need.
    //         </p>
    //         <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg">
    //         Donate Now
    //         </button>
    //     </div>
    // </div>


  );
};

export default Herosection;
