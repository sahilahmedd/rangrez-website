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
    <div className="w-full min-h-screen bg-[#0F172A] flex justify-center items-center px-4 py-16 sm:px-6 lg:px-12">
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

  );
};

export default Herosection;
