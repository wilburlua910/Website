import React from "react";
import RoundButton from "./RoundButton";
import Image from "next/image";
import CustomIcons from "./CustomIcons";

const Hero = () => {
  return (
    <div className="flex m-20">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-9xl font-bold mt-5 text-white">Hey, I am</h1>
        <h1 className="text-9xl font-bold mt-5 bg-gradient-to-r from-blue-500 via-blue-300 to-teal-200 text-transparent bg-clip-text">
          Wilbur Lua
        </h1>
        <div className="container mt-5">
          <h3 className="text-3xl mb-5 text-white">
            Software Engineer | DevSecOps
          </h3>
          <RoundButton text="Resume"></RoundButton>
          <RoundButton text="Contact Me"></RoundButton>
          <CustomIcons />
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        {/* <div className="w-96 h-96 bg-white rounded-full"> */}
        <Image
          src={"/assets/wilbur-photo.jpeg"}
          width={500}
          height={500}
          alt="Profile Picture"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
