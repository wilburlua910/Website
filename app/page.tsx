import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { Poppins } from "next/font/google";
import NewSectionText from "./components/NewSectionText";
import CustomIcons from "./components/CustomIcons";
import About from "./About";

import Experience from "./Experience";
const Home = () => {
  return (
    <div className="overflow-auto">
      <div className="flex flex-row" id="SideNavBarMenu">
        <div className="w-32 h-auto bg-black">
          <ul>
            <li className="flex justify-center text-white pt-10 pb-10">
              <h2 className="text-3xl">WL.</h2>
            </li>
            <li className="flex justify-center text-white">About Me</li>
            <li className="flex justify-center text-white">Experience</li>
            <li className="flex justify-center text-white">Portfolio</li>
          </ul>

          {/* <Hero></Hero>
    <NewSectionText text={"About Me"}></NewSectionText>
    <About></About>

    <NewSectionText text={"Check out my Experiences!"}></NewSectionText>

    <Experience /> */}
        </div>

        {/*Using flex-1 to allow my div */}

        <div className="flex-1 bg-slate-900" id="HomePage">
          {/*Split to 2 rows that takes 50% each of remaining space*/}
          <Hero></Hero>
          <Experience></Experience>

          {/* <div className="flex flex-row">
        <div className="container m-20">
          <h1 className="text-8xl font-bold mt-5 text-white">Hey, I am</h1>
          <h1 className="text-8xl font-bold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Wilbur Lua
          </h1>
        </div>

        <div className="w-40 h-40 rounded-full bg-white"></div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
