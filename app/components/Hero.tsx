import React from "react";
import RoundButton from "./Button";

const Hero = () => {
  return (
    <div className="container mx-auto mt-10 flex">
      <div className="container">
        <p className="text-8xl font-bold mt-5">Hi, I am</p>
        <p className="text-8xl font-bold mt-5">Wilbur Lua</p>

        <div className="container mt-5">
          <p className="text-3xl mb-5">Software Engineer | DevSecOps</p>

          <RoundButton text="Resume"></RoundButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
