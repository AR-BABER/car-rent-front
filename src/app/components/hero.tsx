import Image from "next/image";
import React from "react";
import CardComponent from "./card";

type Props = {};

function Hero() {
  return (
    <div className="">
      <div className="relative">
        <Image
          className="w-full h-screen object-cover py-10 "
          src="/hero.webp"
          width={1920}
          height={700}
          alt="40"
        />

        <div className=" my-10  px-2 absolute -top-16 right-0 w-full h-screen flex items-center">
          <div className="flex flex-col gap-3 py-3 my-5 mx-3">
            <h1 className="text-white text-2xl md:text-4xl flex font-semibold font-serif gap-2">
              Find your <p className="text-red-400">Dream CAR</p> here
            </h1>
            <h2>Search from 70,862 cars</h2>
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
